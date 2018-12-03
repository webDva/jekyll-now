---
layout: post
title: I'm having trouble deciding on the architecture of the game
---

What kind of multiplayer game do I want to make and for whom?

# The virtue of discipline

I must have the discipline needed as an independent hacker to achieve program success for I must resist the temptation to optimize certain aspects. Like technical scale. If great market traction is gained in the future, then such an aspect will be dealt with in the future and only in the future as adhering to the mantra of solutions arising when problems arise is part of my process.

# An action-based multiplayer game

I'm thinking about making an action-based multiplayer game where player success is a function of their dexterity, notwithstanding that this type of game isn't accessible to gamers with dexterity related disabilities. And I do not wish to neglect that segment.

## Accommodating high ping users

I want to accommodate high ping users, so a multiplayer action-based game may be an unsuitable choice as such.

There's a way to accommodate high ping users in an action-based multiplayer game. The game server can have a low physics time step like thirty times per second instead of sixty times per second--but that doesn't affect the networking subsystem. Or the game server can likewise have a low frequency network update pulse (which is just about relaying the current game state to the game clients) rate of twenty times per second instead of forty times per second which is the network update pulse rate that my multiplayer game prototype uses.

But there's a large risk of me not being able to successfully implement a solution to that problem of ultimately accommodating high ping users for an action-based game as my current experience level is low.

# A great race with myself

Overall, this whole endeavor looks to be composed of great risks. But as said before, like the astronauts of yore, I traverse a new space with a constitution of great integrity and courage.

For a great ambition shall be fulfilled before this decade is out: to mend the world.