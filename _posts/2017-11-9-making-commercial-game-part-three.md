---
layout: post
title: "Making a Commercial Game! Part Three: Keeping it Small and Simple!"
summary: "D.va has to make design decisions and D.va likes to make decisions quickly!"
image: /assets/images/2-ketchup-raisin.gif
---

I'm still at a point where I have to make major design decisions.

The latest version of the game:

**Note that the below embedded Javascript grabs the cursor keys which prevents scrolling using the cursor keys for this blog post.**

{% include ketchup-build-2/index.html %}

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