---
layout: post
title: A Proposal for Achieving Oriented Collision Detection
use_math: true
---

I have an idea for a simple solution for accounting for orientations in collision detection that occurs in three dimensions.

This is in consideration of an idea for a pseudo massive multiplayer online game with Dark Souls like combat.

Due to the nature of Dark Souls's combat which involves the swinging of melee weapons, the orientation or rotation of the hypothetical weapons would need to be accounted for to provide accurate collision detection.

An issue to consider is the art style which would affect many aspects of the game.

Inspired by the very intelligent and impassioned game develeoper named Dek, his game [Hordes.io](https://hordes.io) uses an innovative and simple art style for the characters.

![Hordes.io art style](/assets/images/hordes_screenshot.gif "Hordes.io art style")

For the proposed hypothetical game with Dark Souls like combat, each weapon would be entirely composed of a simple rectangular box. If the proposed simple art style is used, it would facilitate very accurate collision detection due to the collision boxes being the exact same shape and size as the hypothetical game characters and melee weapons.

# Technical implementation proposal

I propose a possible solution to achieving collision detection between two collision boxes in three dimensions with orientations accounted for: using affine transformations to transform the coordinate frame of one collision box's vertices to that of the coordinate frame of the other collision box.

Using the transformation operators $T_1$, representing the original coordinate frame of the collision box to transform, and $T_2$, representing the coordinate frame of the second collision box that it will be transformed into, on the column vector $\vec{x_1}$ that is an untransformed vertex point of the first collision box will look like

$$
\vec{x_2} = T_2(T_1(\vec{x_1}))
$$

with whatever the true four-by-four matrix multiplication order and direction is. The new vector point $\vec{x_2}$ would then be useful for determining if penetration between two oriented collision boxes has occurred.

This should be a simple solution and it looks almost naive-like which is very desirable.

I do not know if such a method or solution will achieve its intended effect and I would thus need to actually experiment and see if it would work and that the hypothesis of simply using affine transformations to achieve collision detection that accounts for orientations is true.

# Practical considerations

However, real world constraints currently prevent such an action of experimentation from being easily performed, such as not having the privilege of a testing space or environment, with using pen and paper being the best that I can do right now, and being limited by the Prosperity program's driving time constraint which must be considered in all decisions.

Note, though, that the driving time constraint can allow the resulting flexible performance constraint to be exploited, such as by allowing the decision maker (me) to deem inaccurate collision detection to be acceptable which may result in orientations in the collision detection system not be accounted for at all, for example.