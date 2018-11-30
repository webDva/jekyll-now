---
layout: post
title: A Consideration on Server Side Physics for a 3D Multiplayer Game Regarding Rotations in 3D Space
use_math: true
---

Another technical aspect of making a 3D multiplayer game to consider is the server side physics. And yes, the visuals/aesthetics are considered technical aspects for the sake of this program's success as this is a multi-faceted endeavor where success must be achieved in multiple dimensions.

# The Feasibility of Implementing Rotations in Three Dimensions

My current understanding of the phenomenon of rotations in three dimensional space yields the speculation that using the rotation formalism shown below with the ordered matrix multiplication of individual axes (as described [here](https://en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations)) could be beneficial for implementing server side 3D physics, namely due to its comprehensiveness and apparent ease of implementation.

$$
R_x(\theta) =
\left[ {\begin{array}{ccc}
1 & 0 & 0 \\
0 & \cos \theta & {-\sin \theta} \\
0 & \sin \theta & \cos \theta \\
\end{array} } \right] \\

R_y(\theta) =
\left[ {\begin{array}{ccc}
\cos \theta & 0 & \sin \theta \\
0 & 1 & 0 \\
{-\sin \theta} & 0 & \cos \theta \\
\end{array} } \right] \\

R_z(\theta) =
\left[ {\begin{array}{ccc}
\cos \theta & {-\sin \theta} & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1 \\
\end{array} } \right]
$$

The implementation of rotations in three dimensions using the above proposed basic rotation formalism would likely incur a technical performance penalty in the server side physics subsystem due to the need for the management of nine parameters for each physical entity combined with the frequent multiplication of matrices. Even though sub-par technical performances are acceptable for this program as performance (or quality) is the most flexible program constraint, this technical performance would place a limit on the number of effects achievable, such as a large scale multiplayer game product.

## Client-Server Communication

Also, thanks to "lessons learned" (not words I like to use, because, what is this, school?) or insight and experience gained from the development of the prototype of a 2D multiplayer game, it is predicted that, with the existence of a feature that allows the player to aim in three dimensions, engineering the subsystem of uploading the player's avatar's intended 3D rotation from the client to the server would incur a high development complexity cost and thus would be detrimental to this program's success.

# My Determination

As such, the implementation of rotations in multiple axes is an unfavorable action given the program constraints.

Note that this determination still allows for the development of an effective 3D multiplayer game, but only with the successful exploitation of constraints.