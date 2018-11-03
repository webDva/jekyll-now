---
layout: post
title: Brainstorming my first multiplayer game
---

I'm thinking about making a networked multiplayer game.

It would be a pong clone or something similar in order to keep things simple.

More than likely, though, I will not be creating such a thing right now as the risks involved are too great for me to bear. I have a mandate to fulfill before this decade is out and other solutions may be more viable.

Nonetheless, here is what I envision.

# Multiplayer complexities

The game company Valve said on their developer [wiki](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking) about multiplayer games:

> In contrast with a single player game, a multiplayer game has to deal with a variety of new problems caused by packet-based communication.

So it seems that I would have a lot of work to do indeed.

## Networked physics problem

I would have to implement physics on an authoritative server. So that would increase the cost of development and the complexity of the proposed product.

Proposed [driving user input](https://gafferongames.com/post/networked_physics_2004/) for a networked multiplayer pong game (in C):

```c
struct UserInput {
    boolean up;
    boolean down;
};
```

And the basic state for each player and the pong ball that I can come up with for now:

```c
struct PlayerState {
    Vector position;
    Vector velocity;
};

struct BallState {
    Vector position;
    Vector velocity;
};
```

More components in the proposed structures would be needed, more than likely, but this currently suffices for a theoretical framework for this public one-way discussion.

# Planned aspects of the game

I'm still not going to embark on this project right now, even though there's a possibility that I should. But these are features that I would like to add to the game:

### Machine learning

Artificial neural network opponent for a single player option as this is a multiplayer game with resulting varying human opponent availability. The already high complexity of this networked multiplayer game startup would be increased even further then.

Maybe instead of a neural network, a simple computer opponent like how most other pong games do. Or even I would be there to play with the lonely player, doing things that don't scale and being committed to my players' success.

### Visuals of the game

Cute, kawaii bright neon graphics that are attractive. Why am I even writing this?

### Cloud server

The game server would highly likely be off-premise using the free tier of Heroku instead of my Orange Pi Zero single board computer. I'm not saying that I believe that this product would need to be scaled and accommodate a lot of users in the future. I just would wish to rapidly release and deploy this product and setting up my Orange Pi Zero is not conducive to that as I lack the experience to do that currently. This is an already complex endeavor with machine learning and networked multiplayer.

# Uncertainties

A multiplayer HTML5 pong game might be an addicting game. Or it might not be.

People might like this new and accessible game I'm envisioning. Or they might not.

I do not know.

I do not know what lies in the probability distribution. Then it is proposed that I assume the risk of expending effort to rapidly create and release a product in order to resolve this uncertainty.

This uncertainty is a component of the dedicated indie maker's life. I explore this space in search of rewards. As time progresses while I navigate this space, I acquire data and experience that will aid me in future endeavors.

# Using previous experience

Thanks to previous endeavors, I'm in possession of technology and knowledge that would be beneficial to this startup, such as the one-button accessibility implementation from my last video game, [*Spooky Thing*](https://webdva.itch.io/spooky-thing), as I would intend to make this pong game accessible, only requiring one button to move the pong paddle up and down.

# Will and means

I'm a full-time indie maker. You can also call me a technology entrepreneur or a startup founder (and yes, these are startups). You can definitely call me a small business owner as I'm not employed by an employer other than myself.

I don't have income. I can't seem to put my rather great and tragic past behind me. I seem to be stuck in a local minimum or maybe even diverging from the local maximum. I'm operating with chronic deficiencies. My relationship with my pseudo-investor is estranged. The fate of my health is unknown.

But I have eternal courage and commitment at my side. I got the right stuff, fine constitution. I have a desire to mend the world. This full-time indie maker lifestyle is so much better than working a traditional minimum wage job, despite me not having the amenities that employment with an employer provides. For me to have income, I must grind from zero to n as though I were trying to reach the top of the leader board in a video game, starting from the bottom.

To play this unique game and win, great ambition and strength are required.

If I do not have the required ambition and strength, then I shall git gud (get good).

I play to win.