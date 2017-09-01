---
layout: post
title: Let's Optimize a 2D Platformer!
---

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