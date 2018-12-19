---
layout: post
title: Establishing the correct forward facing direction for a 3D model
---

Unlike a 2D sprite in a 2D environment, a 3D model in a 3D environment has an orientation which includes what can be called a forward facing direction.

In the picture below, the mesh's forward facing direction is incorrect as the character front of the mesh does not face the intended direction.

![Undesired mesh orientation](/assets/images/improper_babylon_direction.PNG "Mesh facing the wrong direction")

The next picture shows the correct direction for the mesh to have for its forward facing direction.

![Desired mesh orientation](/assets/images/proper_babylon_direction.PNG "The correct direction to face in")

The following guidance reveals the correct procedure for establishing a correct forward facing direction for a 3D mesh, specifically for the Babylon.js game development framework.

# Correct procedure in the Blender 3D modeling utility

The axis that a 3D model must face in so that it can have the correct forward facing direction in an external application is the y-axis and it must be in the positive direction of the y-axis.

![Correct orientation in Blender](/assets/images/correct_blender_direction.PNG "Mesh facing the front direction")

Location, rotation, and scale transformations are to be applied for exportation to the Babylon.js application.