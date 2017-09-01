---
layout: post
title: Let's Optimize a 2D Platformer!
---

I have a game, [Super Simple and Small 2D Platformer Game](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html), that runs slow on mobile devices.

# Introduction

The game is a 2D platformer. It's small and extremely simple, hence the name Super Simple and Small 2D Platformer Game.

[Y9u can play it here](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html).

It's an HTML5 game made with the Phaser framework. I used Typescript, my first foray into the awesome language.

# What's the problem?
It lags. What I mean is that it runs slow. To be accurate, ou can say that the framerate is be low. It's hip for gamers to say that a game is slow by saying that the framerate is low.

But don't know yet, and will have to actually see what the framerate is.

# Reasons for the slowness

I don't really know as of yet, but these could be the reasons.

* The size of the tiled map used
* How Phaser renders tiled maps?

# Algorithm analysis

It would be really cool to be able to determine the runtime complexity of some parts by counting how long each operation occurs. For instances, doing something like determining that one line of code runs at a time of O(1).

But! That's out of scope for me right now and I don't think that it's necessary for solving this problem. Plus, emperical evidence instead of theorectial prediction is necessary, that is, I'll also need a way to measure performance.

# Git tags

When I make games, I use versional control. I organize versions to document and record progress.

Prior to trying to fix the optimization problem, I created a tag that 

# Comparing framerates

![60 fps]({{ site.url }}/images/optimize2Dplatformer/60_fps_screen.png)

![28 fps]({{ site.url }}/images/optimize2Dplatformer/28_fps_screen.png)

# Tilemaps

I honestly believe that the tile map itself is the area of failure. A tile map is EXPLAN TO READER. 

READER DOESN'T KNOW WHAT WORLD AND LAYER ARE. EXPLAIN

## A large art asset

{% highlight typescript %}
// add tiled map
this.map = this.game.add.tilemap("tilemap");
this.map.addTilesetImage("tiles", "tilesheet");

// add platform layer and hazards layer to the game
this.platformLayer = this.map.createLayer("platform");
this.hazardsLayer = this.map.createLayer("hazards");

// setting collision between player and layers
this.map.setCollisionByExclusion([], true, this.platformLayer);
this.map.setCollisionByExclusion([], true, this.hazardsLayer);

this.platformLayer.resizeWorld(); // resize the world to the size of the platform layer
{% endhighlight %}

The commet about resizeWorld() is wrong: the opposite happens. resizeWorld() sets the world size to match the size of this layer. I created a very large tiled map. That means that changing the world size to match would increase it by a lot, and that would impact rendering performance greatly

If the cause of the low framerate on mobile devices turns out to be essentially an art asset being too learge to render correctly, then I won't solve this optimization problem, because I wanted to do it via code and not redesigning art assets.

# Costly animations?

Next thing that could be wrong is that the animation for the coin collectibles. I'm not sure, but I think animations are more expensive than static images to render, since animations are moving images.

A way to test to see if animationing all coin animations (honestly, rendering multiple animations at once, even those not on-screen, does impact performance) causes low framerate is to collect all coins and see if it has an effect on the framerate.

{% highlight typescript %}
// add collectibles to the game
this.collectibles = this.game.add.group();
this.collectibles.enableBody = true;

// create sprites for all objects in collectibles group layer
this.map.createFromObjects("collectibles", 1, "collectibles_animations", 0, true, false, this.collectibles);
this.collectibles.forEach((child: Phaser.Sprite) => {
    child.anchor.setTo(0.5, 0.5); // set the anchor of all collectibles to be the center for the tween animations
}, this);

// add animations to the collectibles
this.collectibles.callAll("animations.add", "animations", "hover", [0, 1, 2, 1], 5, true);
this.collectibles.callAll("animations.play", "animations", "hover");
{% endhighlight %}

# Is how Phaser handles tilemaps the cause?

I had another trouble with using a tilemap.

The player would sometimes pass through floor, especially from long jumps. Looking for answers on the internet, I discovered that the physics collision calculations might not be fast enough to prevent the player object from passing though tiles. That might be called a race condition--I'm not sure--and such problems in software development are involving.

I had to fix this with the below code fix. Not really conduicive to the player experience:

{% highlight typescript %}
// If the player goes through the tiles touching the bottom world bounds, restart the GameState
this.player.body.onWorldBounds = new Phaser.Signal();
this.player.body.onWorldBounds.add((sprite: Phaser.Sprite, up: boolean, down: boolean, left: boolean, right: boolean) => {
    if (down) {
        this.hazardSound.play();
        this.game.state.start("GameState");
    }
}, this);
{% endhighlight %}

TO find out if my concern is true, I would need to delve into the Phaser source code to see how its Tilemap functionality affects my game.

## Collision checking

{% highlight typescript %}
// collisions for the player avatar
this.game.physics.arcade.collide(this.player, this.platformLayer); // player collides with platform layer tiles
this.game.physics.arcade.collide(this.player, this.hazardsLayer, this.hazardCollideCallback, null, this);
this.game.physics.arcade.overlap(this.player, this.collectibles, this.collectibleOverlapCallback, null, this);
{% endhighlight %}

The above code gets executed regularly and I beleive that it may be coastly as these lines perform collision checking.

# The game still lags, D.va

The title of this post turned out to actually be click-bait, since I didn't actually optimize the game. It honestly doesn't matter, as I seek to make other games, benefitting from my efforts with this game. The goal, though, was to be transparent, to show how I approach problems in game development.