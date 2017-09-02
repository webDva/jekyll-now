---
layout: post
title: Let's Optimize a 2D Platformer!
---

I have a game, [Super Simple and Small 2D Platformer Game](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html), that runs slow on mobile devices. Let's see what could be wrong with it.

# Introduction

The game is a 2D platformer. It's small and extremely simple, hence the name "Super Simple and Small 2D Platformer Game."

[You can play it here](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html).

It's an HTML5 game made with the Phaser framework. I used Typescript, my first use of the language.

You can also view the [full source code here](https://github.com/webDva/Super-Simple-and-Small-2D-Platformer-Game).

# What's the problem?

It lags, or it runs slow. To be accurate, you can say that the framerate is low. It's hip for gamers to say that a game runs slow by saying that the framerate is low.

# Comparing framerates

In an attempt to optimize the game, I added the below code to display the frames per second:

{% highlight typescript %}
render() {
    // display frames per second
    this.game.debug.text("fps: " +this.game.time.fps, 10, 30, "rgb(255,255,255)", "4em Impact, sans-serif");
}
{% endhighlight %}

This is the framerate for the desktop version:

![60 fps]({{ site.url }}/images/optimize2Dplatformer/60_fps_screen.png)

And this is the framerate for a mobile phone:

![28 fps]({{ site.url }}/images/optimize2Dplatformer/28_fps_screen.png)

When running on a desktop browser, the game seems to average at 60 frames per second, but on a smartphone, it has a low average of 28 frames per second.

So the framerate does get lower on mobile devices.

# Tilemaps

A tile map is essentially a map, or a level, for a game. A tiled map is composed of individual tiles. My platformer uses a tiled map to render its sole level.

The Phaser docmentation defines a tile map layer as 

> A single layer within a Tilemap. Extends from Phaser.Sprite and is responsible for rendering itself.

A Phaser.Sprite is a regular sprite that gets drawn every frame. So you can conclude that a tilemap is a sprite that gets drawn as a level in the game every frame.

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

The comment about resizeWorld() is wrong: the opposite happens. resizeWorld() sets the world size (which can be thought of here as a place where game objects exist) to match the size of the layer. I created a very large tiled map, as large as a desktop monitor (around 2000 x 2000). That means that changing the world size to match the tilemap layer's size would increase the world size by a lot, and that would impact rendering performance greatly.

**In fact, I think that it does and that it is the cause for the lag on mobile devices.**

Also, the game might be rendering the tilemap layer sprite in its entirety, even if only a small portion is within the camera bounds (which helps to cull what to render).

**I didn't include any checking or handling to only render a small portion of the tilemap layer at a time, and including such functionality may be the solution to the low framerate problem.**

# Costly animations?

Another thing that could be wrong is the animation for the coin collectibles. Animations are more expensive to render than static images, since animations are moving images.

A way to test to see if animating all coin animations causes a low framerate is to play the game to collect all coins and see if it has an effect on the framerate. Honestly, rendering multiple animations at once, even those not on screen--which is what the game does do--will have an impact on performance.

But the lag is so unbearable that it's difficult to try this idea.

How I handled animating the coin collectibles:

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

# Tilemap collisions

I had another problem with using a tilemap.

The player would sometimes pass through the floor, especially from long falls. Looking for answers on the internet, I discovered that the physics collision calculations performed by Phaser might not be fast enough to prevent the player object from passing though tiles.

I had to remedy this with the below code fix. Not really conducive to a good player experience as the player is penalized for falling too high:

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

To validate my concern, I would need to delve into the Phaser source code to see how its Tilemap functionality affects my game.

## Collision checking

{% highlight typescript %}
// collisions for the player avatar
this.game.physics.arcade.collide(this.player, this.platformLayer); // player collides with platform layer tiles
this.game.physics.arcade.collide(this.player, this.hazardsLayer, this.hazardCollideCallback, null, this);
this.game.physics.arcade.overlap(this.player, this.collectibles, this.collectibleOverlapCallback, null, this);
{% endhighlight %}

The above code gets executed regularly and I believe that it may be costly in terms of performance as these lines perform collision checking every frame. Nonetheless, it is essential for collision to occur.

# Conclusion

The title of this post actually turned out to be click-bait, since I didn't actually optimize the game. I'm not really motivated enough to actually implement the above proposed solution. It honestly doesn't matter, as I'm going to make other games, benefiting from my efforts with this game. The goal of this post, though, was to be transparent, to show how I approach problems in game development.