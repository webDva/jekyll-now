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
