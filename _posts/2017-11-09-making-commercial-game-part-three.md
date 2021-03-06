---
layout: post
title: "Making a Commercial Game! Part Three: Keeping it Small and Simple!"
summary: "D.va has to make design decisions and D.va likes to make decisions quickly!"
image: /assets/images/2-ketchup-raisin.gif
---

I'm still at a point where I have to make major design decisions.

The latest version of the game:

**Note that the below embedded Javascript grabs the cursor keys which prevents scrolling using the cursor keys for this blog post.**

<html>

<head>
    <title>Template</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="/assets/js/phaser/2.6.2/phaser.min.js"></script>

</head>

<body>
    <div style='width:500px;height:500px' id="phaser"></div>
    <script>
        var __extends = (this && this.__extends) || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        /*
         * Template
         */
        var GameModuleName;
        (function (GameModuleName) {
            /*
             * Boot state for only loading the loading screen
             */
            var BootState = (function (_super) {
                __extends(BootState, _super);
                function BootState() {
                    return _super.call(this) || this;
                }
                BootState.prototype.init = function () {
                    // Set scale using ScaleManager
                    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                    // Set background color
                    this.game.stage.backgroundColor = "#1e97d8";
                };
                BootState.prototype.preload = function () {
                    // Load loading screen image
                };
                BootState.prototype.create = function () {
                    // Start true loading state
                    this.game.state.start("PreloadState");
                };
                return BootState;
            }(Phaser.State));
            GameModuleName.BootState = BootState;
            /*
             * Preload state for actually loading assets
             */
            var PreloadState = (function (_super) {
                __extends(PreloadState, _super);
                function PreloadState() {
                    return _super.call(this) || this;
                }
                PreloadState.prototype.preload = function () {
                    // Display the loading screen image
                    // Load assets
                    // test square graphic
                    var playerSquare = this.game.add.bitmapData(64, 64);
                    playerSquare.rect(0, 0, 64, 64, 'rgb(255, 192, 203)');
                    this.game.cache.addBitmapData('player', playerSquare);
                    // test ketchup graphic
                    var ketchupSqaure = this.game.add.bitmapData(10, 50);
                    ketchupSqaure.rect(0, 0, 10, 50, 'rgb(255,10,10)');
                    this.game.cache.addBitmapData('ketchup', ketchupSqaure);
                    // explosion graphic
                    var explosionCircle = this.game.add.bitmapData(32, 32);
                    explosionCircle.circle(16, 16, 16, 'rgb(255,255,255');
                    this.game.cache.addBitmapData('explosionCircle', explosionCircle);
                    // raisin graphic
                    var raisin = this.game.add.bitmapData(24, 24);
                    raisin.circle(12, 12, 12, 'rgb(54, 27, 79)');
                    this.game.cache.addBitmapData('raisin', raisin);
                };
                PreloadState.prototype.create = function () {
                    this.game.state.start("GameState");
                };
                return PreloadState;
            }(Phaser.State));
            GameModuleName.PreloadState = PreloadState;
            // enum for movement directions
            var Movement;
            (function (Movement) {
                Movement[Movement["Left"] = 0] = "Left";
                Movement[Movement["Right"] = 1] = "Right";
                Movement[Movement["Jump"] = 2] = "Jump";
            })(Movement = GameModuleName.Movement || (GameModuleName.Movement = {}));
            var KetchupSprite = (function (_super) {
                __extends(KetchupSprite, _super);
                function KetchupSprite(game, x, y, key) {
                    var _this = _super.call(this, game, x, y, key) || this;
                    _this.isFollowing = false;
                    _this.game.physics.arcade.enable(_this);
                    _this.checkWorldBounds = true;
                    _this.outOfBoundsKill = true;
                    // Add to the display, but the physics system already did this, so this is redundant.
                    _this.game.stage.addChild(_this);
                    return _this;
                }
                KetchupSprite.prototype.update = function () {
                    if (this.isFollowing) {
                        var angle = Phaser.Math.angleBetweenPoints(this.position, this.targetToFollow.body);
                        this.body.velocity.x = Math.cos(angle) * 200;
                        this.body.velocity.y = Math.sin(angle) * 200;
                    }
                };
                return KetchupSprite;
            }(Phaser.Sprite));
            GameModuleName.KetchupSprite = KetchupSprite;
            /*
             * The main game running state
             */
            var GameState = (function (_super) {
                __extends(GameState, _super);
                function GameState() {
                    var _this = _super.call(this) || this;
                    _this.livesCounter = 100;
                    _this.raisinsCollected = 0;
                    return _this;
                }
                GameState.prototype.create = function () {
                    var _this = this;
                    this.game.physics.startSystem(Phaser.Physics.ARCADE);
                    //this.game.physics.arcade.gravity.x = -400;            
                    // add cursor keys controls
                    this.cursors = this.game.input.keyboard.createCursorKeys();
                    this.player = this.game.add.sprite(100, this.game.world.centerY, this.game.cache.getBitmapData('player'));
                    this.game.physics.arcade.enable(this.player);
                    this.player.body.gravity = new Phaser.Point(-this.game.physics.arcade.gravity.x, 400);
                    this.player.body.collideWorldBounds = true;
                    this.player.anchor.setTo(0.5, 0.5);
                    this.ketchupGroup = this.game.add.group();
                    var spawnTimer = this.game.time.create(false);
                    spawnTimer.loop(800, function () {
                        var singleKetchup = _this.ketchupGroup.add(new KetchupSprite(_this.game, _this.game.rnd.integerInRange(0, _this.game.width), _this.game.rnd.integerInRange(0, 150), _this.game.cache.getBitmapData('ketchup')));
                        // wait then attack
                        var waitTimer = _this.game.time.create(true);
                        waitTimer.add(500, function () {
                            singleKetchup.targetToFollow = _this.player;
                            singleKetchup.isFollowing = true;
                        }, _this);
                        waitTimer.start();
                        // TTL
                        var TTLTimer = _this.game.time.create(true);
                        TTLTimer.add(5000, function () {
                            singleKetchup.kill();
                            waitTimer.destroy();
                        }, _this);
                        TTLTimer.start();
                    }, this);
                    spawnTimer.start();
                    this.textLives = this.game.add.text(0, 50, "" + this.livesCounter, {
                        font: '4em "Segoe UI", Impact, sans-serif',
                        fontWeight: "700",
                        fill: "#ffffff",
                        align: "center"
                    });
                    this.textRaisins = this.game.add.text(0, this.textLives.bottom, "" + this.raisinsCollected, {
                        font: '4em "Segoe UI", Impact, sans-serif',
                        fontWeight: "700",
                        fill: "#361b4f",
                        align: "center"
                    });
                    this.raisinGroup = this.game.add.group();
                    var raisinSpawnTimer = this.game.time.create(false);
                    raisinSpawnTimer.loop(1500, function () {
                        var singleRaisin = _this.raisinGroup.create(_this.game.rnd.integerInRange(0, _this.game.width - 24), _this.game.rnd.integerInRange(_this.game.world.centerY - 64, _this.game.world.height - 24), _this.game.cache.getBitmapData('raisin'));
                        _this.game.physics.arcade.enable(singleRaisin);
                    }, this);
                    raisinSpawnTimer.start();
                    this.lifeBarHolder = this.game.add.graphics(10, 10);
                    this.lifeBarHolder.lineStyle(5, 0xffffff);
                    this.lifeBarHolder.drawRoundedRect(0, 0, 100, 30, 9);
                    this.lifeBar = this.game.add.graphics(10, 10);
                    this.lifeBar.beginFill(0xF1C40F);
                    this.lifeBar.drawRoundedRect(0, 0, 100 * this.livesCounter / 100, 30, 9);
                    this.lifeBar.endFill();
                    this.lifeBar.beginFill(0x999999);
                };
                /*
                 * controls player horizontal movement
                 */
                GameState.prototype.movePlayer = function (direction) {
                    // If the player is in mid-air, decrease their movement speed by 10%.
                    var speedModifier = 0;
                    if (!this.player.body.onFloor()) {
                        speedModifier = 0.10 * GameState.MOVE_VELOCITY;
                    }
                    if (direction === GameModuleName.Movement.Left) {
                        this.player.body.velocity.x = -GameState.MOVE_VELOCITY - speedModifier;
                    }
                    else if (direction === GameModuleName.Movement.Right) {
                        this.player.body.velocity.x = GameState.MOVE_VELOCITY - speedModifier;
                    }
                    else if (direction === GameModuleName.Movement.Jump) {
                        // checks to see if the player is on the ground, then jumps and plays jumping sound
                        if (this.player.body.onFloor()) {
                            this.player.body.velocity.y = -GameState.JUMP_VELOCITY;
                        }
                    }
                };
                GameState.prototype.collisionKetchupPlayer = function (player, ketchup) {
                    var newExplosion = this.game.add.sprite(ketchup.x, ketchup.y, this.game.cache.getBitmapData('explosionCircle'));
                    newExplosion.anchor.setTo(0.5, 0.5);
                    this.game.physics.arcade.enable(newExplosion);
                    var tween = this.game.add.tween(newExplosion.scale).to({ x: 5, y: 5 }, 300, "Linear", true);
                    tween.onComplete.add(function () {
                        newExplosion.kill();
                    }, this);
                    ketchup.kill();
                    this.livesCounter--;
                };
                GameState.prototype.collisionRaisinPlayer = function (player, raisin) {
                    raisin.kill();
                    this.raisinsCollected++;
                };
                GameState.prototype.update = function () {
                    this.game.physics.arcade.collide(this.player, this.ketchupGroup, this.collisionKetchupPlayer, null, this);
                    this.game.physics.arcade.overlap(this.player, this.raisinGroup, this.collisionRaisinPlayer, null, this);
                    this.textLives.text = "" + this.livesCounter;
                    this.textRaisins.text = "" + this.raisinsCollected;
                    // reset the player's avatar's velocity so it won't move forever
                    this.player.body.velocity.x = 0;
                    // processing cursor keys or onscreen controls input to move the player avatar
                    if (this.cursors.left.isDown) {
                        this.movePlayer(GameModuleName.Movement.Left);
                    }
                    else if (this.cursors.right.isDown) {
                        this.movePlayer(GameModuleName.Movement.Right);
                    }
                    if (this.cursors.up.isDown) {
                        this.movePlayer(GameModuleName.Movement.Jump);
                    }
                    this.lifeBar.clear();
                    this.lifeBar.beginFill(0xF1C40F);
                    this.lifeBar.drawRoundedRect(0, 0, 100 * this.livesCounter / 100, 30, 9);
                    this.lifeBar.endFill();
                    this.lifeBar.beginFill(0x999999);
                };
                return GameState;
            }(Phaser.State));
            GameState.MOVE_VELOCITY = 365;
            GameState.JUMP_VELOCITY = GameState.MOVE_VELOCITY + GameState.MOVE_VELOCITY * 0.38;
            GameModuleName.GameState = GameState;
            var Game = (function () {
                function Game() {
                    this.game = new Phaser.Game(550, 550, Phaser.AUTO, "phaser");
                    /* The boot state will contain an init() for the scale manager and will load the loading screen,
                     * while the preloader will display the loading screen and load assets and then start the main game state.
                     */
                    this.game.state.add("BootState", BootState, true);
                    this.game.state.add("PreloadState", PreloadState);
                    this.game.state.add("GameState", GameState);
                }
                return Game;
            }());
            GameModuleName.Game = Game;
        })(GameModuleName || (GameModuleName = {}));
        window.onload = function () {
            var game = new GameModuleName.Game();
        };
    </script>
</body>

</html>

You can also find the [source code here](https://github.com/webDva/Ketchup-and-Raisins-). I don't have a README.md with instructions yet as I'm focusing on making minimum viable products. The source code is very hastily made.

# What's new with the game?

> No wall jumping as of yet, as promised on Twitter--or maybe never!

I added explosion effects that occur whenever the player makes contact with the ketchup bottles. And I was able to make the ketchup bottles follow the player with fair tracking speeds.

Also, the player is granted with a health bar that decreases as a penalty for letting the ketchup bottles come into contact with them. I thought it would be good gameplay design to give the player some leeway by having a large chance to survive for a long time as it seems that the ketchup bottles would be relentless in chasing the player.

Also, raisins randomly spawn, allowing the player to collect them.

I tried to implement wall jumping or bouncing off walls, but the controls interfere with the wall jumping code, so I decided not to use wall jumping. I tried to switch from my initial choice of using Phaser's Arcade physics to using P2 physics in order to implement wall jumping, but P2 physics is unnecessary as I don't need all the stuff it provides.

# Design decisions

I thought about adding levels to the game, but that would increase the scope and complexity to unsafe levels, so I'm not going to do that. The game will be arcade-like. It's actually kinda like Pac-Man in terms of gameplay, even though making it like that was unintentional. Instead of being chased by ghosts, flying and exploding ketchup bottles chase the player who can jump and move around in a platformer-like manner. And the player collects raisins too! That sounds like a good pitch!

I have tasks that I want worked on (maybe they should totally be done by the end of the year):

* character animations
* ketchup animations
* allowing the player to speed up their downward descent to evade the ketchup bottles more easily
* maybe having a timer that decreases over time and that can be increased with raisins collected
* host minimum viable products on [Itch.io](https://itch.io)
* refactor the source code and document it with comments
* still have to decide on art aesthetics (planning on using half pixel art and half vector graphics style)

# Itch.io's pay what you want

[Itch.io](https://itch.io) provides creators with the ability to allow buyers to choose how much they pay for games. Being curious about such an experimental business model, I decide to make this game's price free with the option to pay, because it would be a good long term investment by promoting me as a career game developer and maker, I believe. I'm not sure as I don't have the data to make an accurate prediction, but choosing this option would give me the experience and data I would need to be able to have such fortune telling abilities in the future.