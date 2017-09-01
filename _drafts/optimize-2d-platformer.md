---
layout: post
title: Let's Optimize a 2D Platformer!
---

I have a game, [Super Simple and Small 2D Platformer Game](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html), that runs slow on mobile devices. I want to solve that problem.

# Introduction

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

# Comparing framerates

![60 fps]({{ site.url }}/images/optimize2Dplatformer/60_fps_screen.png)

![28 fps]({{ site.url }}/images/optimize2Dplatformer/28_fps_screen.png)

# THe first attempt to see what's wrong

I honestly believe that the tile map itself is the area of failure. A tile map is EXPLAN TO READER. 

## ressizeWorld()

EXPLAIN WHAT RESIZEWORLD() DOES TO THE READER

{% highlight javascript %}
this.platformLayer.resizeWorld(); // resize the world to the size of the platform layer
{% endhighlight %}

The commet is wrong: the opposite happens. `resizeWorld()` sets the world size to match the size of this layer. READER DOESN'T KNOW WHAT WORLD AND LAYER ARE. EXPLAIN