---
layout: post
title: I implemented server-side collision detection
---

A glorious achievement. I'm leveling up my game development skills.

![Players bumping into walls](/assets/images/server_side_collision.gif "Players bumping into walls.")

It took me four hours to implement collision detection that is performed on a centralized and authoritative server for distribution to a network of connected game clients.

Collisions are detected *a priori* for player-map tile collisions using the extrapolation or prediction of future positions before physical movement is stepped through inside the game's running physics routine.

```javascript
willCollide(object1, object2, object1_extension) {
    if (object1.x + object1_extension.x < object2.x + object2.width &&
        object1.x + object1_extension.x + object1.width > object2.x &&
        object1.y + object1_extension.y < object2.y + object2.height &&
        object1.y + object1_extension.y + object1.height > object2.y) {
        return true;
    } else {
        return false;
    }
}
```

In the above function, the `object1` and `object2` function arguments are Javascript object literals that have `x`, `y`, `width`, and `height` properties which are used to perform the collision detection. The `object1_extension` function argument is another Javascript object literal and it has `x` and `y` properties that the algorithm uses to determine what the extrapolation or predicted future position of a potentially colliding object might be.

The above function (which is just one small segment of the git commit that added collision detection) is used in performing player-map tile collisions inside the game's physics processing routine which is becoming large and very complicated.

The collision detection check is performed between *all* the connected players and **all** the tiles that are in the current map/level. This can cause a server performance issue. To address this issue, something called *quad trees* (which remind me of the k-nearest neighbors concept from data science--is there a connection? Yes, there is.) or a sector based method can be used.

But solutions arise when problems arise and I'm deciding to classify this potential performance issue as tomorrow's problem for tomorrow's me.

![One Punch Man](/assets/images/opm_tomorrow.jpg "One Punch Man.")

Meaning, I will address such issues in the future. I've got an Initial Product Release that I want to happen as soon as possible. It's been nearly a fortnight since I started up this multiplayer game and I haven't released it to the beloved players yet. I would like to have a minimum viable working version released before Thanksgiving, but some time around Christmas might be a more likely release date as this is my first multiplayer game and it has lots of complexities involved with making it and releasing it.