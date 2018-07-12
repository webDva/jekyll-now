---
layout: post
title: "Making a Commercial Game! Part Two: Iteration and Enumeration of the Initial Minimal Draft!"
summary: "Game development is like writing. It's important to come up with an initial minimal draft for an idea as soon as possible."
image: /assets/images/ketchup-snip-1.png
---

After two hours of working on the game, I came up with an initial minimal draft of the gameplay. You can see it in action here.

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
                    this.game.stage.backgroundColor = "#312341";
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
                    _this.game.physics.arcade.enable(_this);
                    _this.checkWorldBounds = true;
                    _this.outOfBoundsKill = true;
                    // Add to the display, but the physics system already did this, so this is redundant.
                    _this.game.stage.addChild(_this);
                    return _this;
                }
                return KetchupSprite;
            }(Phaser.Sprite));
            GameModuleName.KetchupSprite = KetchupSprite;
            /*
             * The main game running state
             */
            var GameState = (function (_super) {
                __extends(GameState, _super);
                function GameState() {
                    return _super.call(this) || this;
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
                        var waitTimer = _this.game.time.create(false);
                        waitTimer.add(500, function () {
                            _this.game.physics.arcade.moveToObject(singleKetchup, _this.player, 200);
                        }, _this);
                        waitTimer.start();
                    }, this);
                    spawnTimer.start();
                };
                /*
                 * controls player horizontal movement
                 */
                GameState.prototype.movePlayer = function (direction) {
                    // The player's avatar's physics body will be disabled if they touch the lava hazards, so stop
                    // controlling their movement if they're dead.
                    if (!this.player.body.enable) {
                        return;
                    }
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
                GameState.prototype.update = function () {
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

I had the red block objects (which will become ketchup bottles in future iterations) initially function as homing missiles that follow the player, but I couldn't create an elaborate homing missile object. There's still a chance to add such a feature later in the game though. For now, the ketchup bottles will just be moved toward to the player for the gameplay. I plan to add noise such as having varying travel speeds and launch times and elaborate travel patterns. I also plan to create hip animations for the ketchup bottles.

As part of the gameplay, I'll have the player collecting raisins while they try to dodge the incoming ketchup bottles. A new pitch for the game could then be: "dodge ketchup bottles while collecting raisins." That's the name of the game, too, *Ketchup and Raisins? イケナイコト！*. I'll also include a time elapsed and raisins collected score metric for the gameplay.

Now that I've made initial progress, I can better estimate the future, albeit slightly. I plan to devote 1,000 hours total to making the game with 60 hour work weeks, which would mean four months of development time. That seems like a standard and typical software development campaign effort. I hope it doesn't take something like 2,500 hours, which would be nine months of development time instead.

It's like leveling up a new character in an MMORPG game with beneficial goals and actions having costs associated with them. Rather than paying the cost of performing five mundane virtual tasks for obtaining a specific reward in an MMORPG game, I will instead be using my time to make parts of the game for the reward of a good, completed game. Playing an MMORPG game for 1,000 to 2,500 hours to level up a character compared to making a game for 1,000 and 2,500 hours seems about right.

Generally, the more time spent, the better the rewards. So that means that I'll devote a lot of time to making this game, unlike my previous games!