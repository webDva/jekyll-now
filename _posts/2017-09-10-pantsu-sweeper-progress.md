---
title: Pantsu Sweeper and Grinding!
layout: post
---

What I've been recently up to is making progress on my Pantsu Sweeper minesweeper clone and other things too! In fact, this particular time period has been productive! I even understand how to transform and inflect verbs in Japanese now!

# Pantsu Sweeper

Regarding the Pantsu Sweeper game, I came across the challenge of deciding what the architecture will be like. I wanted a Square data structure that would allow me to easily and conveniently handle the gameplay mechanics. It would also have to benefit from Phaser's `Sprite` object, using many of `Sprite`'s handy and essential features.

The question was then "how can I create a new type that inherits everything from another type, particularly in this Javascript development environment?"

I discovered Javascript's `Object.create` which would allow me to extend `Phaser.Sprite` and create my own, custom object.

{% highlight javascript %}
var NewGameObject = function (game) {
    Phaser.Sprite.call(this, game, 0,0);

    this.data = { // The Sprite.data property is for adding custom data to a sprite.
        'custom-data': 1
  };
};

NewGameObject.prototype = Object.create(Phaser.Sprite.prototype);
NewGameObject.prototype.constructor = NewGameObject;
{% endhighlight %}

However, I didn't want to do it like the above, because it's ES5 and uses prototypical inheritance, something I'm not fond of (it looks bad to me). Besides, I had the power of Typescript and its subset ES6 in my development environment, so I sought to do it the modern way of using ES6's class syntax.

What I settled on:

{% highlight typescript %}
/*
 * A square that can be clicked on. May be a trapped mine or a reward square.
 */
export class Square extends Phaser.Sprite {
    isTrapSqaure: boolean = false;
    isRewardSquare: boolean = false;
    static WIDTH_AND_HEIGHT: number = 32;

    constructor(gameState: GameState, x: number, y: number, key: Phaser.BitmapData) {
        super(gameState.game, x, y, key);

        let theGame = gameState; // For accessing the list of currently active squares and stuff.

        // Make the square clickable.
        this.inputEnabled = true;

        // Adding the sprite to the display list so that it can be displayed.
        this.game.stage.addChild(this);
    }
}
{% endhighlight %}

The last line, `this.game.stage.addChild(this);`, was the source for a lot of confusion, because I didn't include it initially, preventing the newly formed `Sprite` from rendering to the screen. I wasn't aware of its functionality, but after much debugging and researching, I gained more awareness of such things.

![Initial placeholder assets](/assets/images/pantsuSweeper/pantsu sweeper screen 1.PNG)

The objective now is to develop this game over time so that it can look vastly different from what it looks like in the above screenshot. I have several months where the game's design will be iterated, refined, and improved. That will allow me to make a game that has great gameplay and design, exhibiting my commitment to creating excellent experiences for the player as a game developer. The cost is time combined with effort.

# Making an online sprite sheet maker tool!

I kinda need to make an online sprite sheet maker tool. It's to solve an issue with using sprite sheets with Phaser tiled maps and to contribute to the game development community. And to also learn web development. I've actually started on the sprite sheet maker after neglecting to for some time.

Starting on it made me realize that I don't really know Node.js. I'm struggling with creating the initial development environment and learning to navigate the Node.js ecosystem for building web servers. But at least I finally started to embark on such a project, and it will take some time to satisfactorily progress on this particular journey.

# What about the roguelike?

I'm designing the architecture, deciding what features I want, and researching what knowledge needs to be learned to be able to create the game. I even wanted to have a height component where generated maps have elaborate three dimensional designs, but I may scrap that idea in favor of a smaller and more simple scope. It would've certainly been more involving, adding challenges such as tackling a three dimensional field of fov and line of sight.

# Executing my vision

My mission of forging a career in the software development trade requires me to accomplish a lot, to become a generalist. The decisions I choose to make at this point in time are focusing on my tasks I assigned myself while resisting the temptations of distractions and embracing the grind of my journey.

I have a passion for getting what I want, which is various things, because of my great ambition. One such thing that I want is to be challenged intellectually, which is one of the reasons why I chose to partake in software development.

Succeeding will require the combination of many hours and many attempts. It's like a marathon with patience rather than a sprint with instant gratification.

![archer smile gif](/assets/images/pantsuSweeper/archer-smile.gif)

Nonetheless, I find myself smiling right now at my recent successes and productivity.