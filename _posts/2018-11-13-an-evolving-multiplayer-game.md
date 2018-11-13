---
layout: post
title: An evolving multiplayer game
---

I solved the server side physics processing engine problem.

# Simple server side physics system

Since I basically have to create my own game engine on the server side, I had to discover a way to calculate simple physics movements.

To implement a click-to-move control scheme, a desired target location, `target_x` and `target_y`, are supplied to the server from the client to calculate a direction to move in.

```javascript
const direction = Math.atan2(target_y - current_y, target_x - current_x);
```

The server determines the player's position using a delta increment and the delta is calculated using sines and cosines for the appropriate axis.

```javascript
current_x += movement_speed * Math.cos(direction);
current_y += movement_speed * Math.sin(direction);
```

So now the player on the browser client side is able to receive and then render the game state which includes player positions that is determined and created on the server.

# A wee bit of the game architecture

I have the physics processing separate from other segments of the game state. Player positions and movement calculations are performed in one routine while the sending of data to the set of connected game clients is performed in another routine, for instance.

```javascript
physicsLoop() {
    players.forEach(player => {
        player.processPlayerMovement();
    });
}
```

`physicsLoop` is actually named `moveLoop` in my source code, and the name `movementLoop` would even be appropriate and accurate.

The purpose of the physics routine is to process all the positions and movement that occurs in a single game session. It's executed at a frequency of sixty times a second on the server.

# And the result of my good work

Server-side calculated and processed bullets, with the player deciding where to aim his or her bullets with the direction of the mouse:

![server side physics bullets](/assets/images/server_side_bullets.gif "Connected players are able to shoot bullets")

I'm going for a multiplayer top-down roguelite type thing.

# My commitment to accessibility

I originally planned on only having a click-to-move control scheme for the player controls to facilitate accessibility, but I discovered that it would actually be accessible if players had the option to choose between a mouse only and keyboard only control scheme.

Even though it may be very difficult to implement such a feature of multiple control schemes, these things are on the game's feature list and are predicted to be implemented in the far future as traction is gained.

I actually made a mistake by trying to make the click-to-move control scheme work server side as this was done to the detriment of my objective of quickly making a working prototype product. I should have instead done what I was familiar with which is a simple delta movement request that is sent by the client.

Besides, it's hard to aim with the mouse while having to move your character with a click-to-move control scheme, so I'll have to change the current control scheme.

# My ambitions

The multiplayer game's architecture is being constructed. This is my first distributed systems endeavor and I hope that I can scale this startup to thousands of players over a period of years as that is optimal and ideal.