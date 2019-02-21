---
layout: post
title: Greater strength and courage are required
---

New capabilities are being gained and new processes are being adopted. My courage remains eternal as this system of success I'm engineering calls for no less.

# A great divergence was averted

I faced a great problem: I tried to achieve rotations in three dimensions on the server side of the 3D multiplayer browser game I'm making. I had the system requirement of achieving movement along a forward vector direction that is determined by the current three dimensional orientation, but I did not easily achieve that effect.

I tried to come up with many kinds of solutions. Solutions such as rotating the forward vector using the principles of 3D transformations using matrices. I even learned how to extract Euler angles from a rotation matrix in a desperate attempt to solve the problem, but it was to no avail.

It took a week to resolve the issue that arose, and on the seventh day, I found the cause and achieved a desirable effect.

## Investigative report

The [linear interpolation subsystem](/how-i-implemented-client-side-linear-interpolation/) was responsible. Rather, a portion of code pertaining to it was commented out and that action disabled essential functionality, namely the visible or graphical change of a game object's orientation.

An extension of the linear interpolation subsystem was created to account for rotations in multiple axes in three dimensions instead of just one axis on a two dimensional plane. Influenced by a bias or distortion, I commented out the extension believing that the linear interpolation of orientations in three dimensions instead of just two is nontrivial and required additional effort. In addition to the commented out portion of code, more system elements were simultaneously being constructed, such as new networking components to account for three dimensional rotations, increasing the complexity of the system.

The most probable cause of the failing to be aware of this mistake was that current cognitive processes were being overloaded and my process could not satisfactorily perform in the new environment.

# Lessons learned

## Implementing six degrees of freedom

A painful lesson learned was that achieving the effect of having six degrees of freedom in a 3D game is a nontrivial endeavor. Also note that I will not be using quaternions as they lie beyond my reach for now and Euler angles suffice for now. So the game won't be using rolling, only pitching up and down and yawing left and right.

## The linear interpolation of orientations

The linear interpolation of orientations in three dimensions in terms of client side rendering in a networked multiplayer game is a trivial effort. Note that this determination does not include the interpolation of values inside rotation matrices.

## A new constitution of courage and strength

Knowledge of individual facts alone does not suffice. The interaction of intra-system elements must be accounted for. Failure to connect the dots will lead to catastrophic failure.

I must be more stalwart and more capable. I must be more ambitious and more skilled. I must be more courageous and more strong.