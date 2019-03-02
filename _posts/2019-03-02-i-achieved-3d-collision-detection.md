---
layout: post
title: I achieved 3D collision detection
---

I was able to easily and quickly implement this functionality in part due to the experience and technology I acquired during this whole multiplayer game endeavor. I won't be detailing how I implemented collisions in three dimensions, so this won't be a very technically informative entry.

The 3D collision detection subsystem uses axis aligned bounding boxes (AABB). Rotations are not accounted for.

![3D collision detection 1](/assets/images/3d_collision_detection.gif "The game server reports hits that occur.")

What's happening in the above screenshot is that, as a projectile sphere collides with the player avatar, the server reports that a hit has occurred.

Here is another instance which somewhat demonstrates the accuracy of the hit detection:

![3D collision detection 2](/assets/images/3d_collision_detection_2.gif "Another instance of the new 3D collision detection feature.")

But there are some issues that must be considered:

* A hitbox shares the same position and movement translation as its assigned parent game object, but it does not rotate at all.
* A hitbox's size and dimensions are invariant. As such, as the hitbox does not rotate but its parent game object does, the invariant size and dimensions of the hitbox can cause an issue with the accuracy of collisions.
* A hitbox is a box whereas the projectiles are currently spheres, another accuracy issue.
* 3D model creation and thus accurately determining the appropriate size for hitboxes on the game server is problematic.

Nonetheless, this new system element currently functions as an asset that will be used to achieve essential effects.