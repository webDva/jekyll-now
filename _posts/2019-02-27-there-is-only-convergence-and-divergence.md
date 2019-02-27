---
layout: post
title: There is Only Convergence and Divergence
---

Since there are no ups and downs, since there is only converging to optimums or not, I'm releasing a public reference and documentation entry of my current processes and recent achievements that will help facilitate convergence.

# Content marketing success

I wrote and published a [*How to draw a line in D3.js* tutorial](/how-to-draw-a-line-in-d3js/) seven months ago, and since then, it has become number three on the first Google Search results page.

![Google Search results](/assets/images/d3_line_google.png "Number three in the Google Search results.")

The goal of having a near monopoly on the search keywords "how to draw a line in D3.js" has been achieved. The great Google search algorithm has deemed that content to be worthy of its high position and may it stay there for a long time without my intervention.

Note that the [version on Dev.to](https://dev.to/webdva/how-to-draw-a-line-in-d3js-5cn4) is much more sanitized and is better written, such as with having a consistent usage of quotes in contrast to the version on the codex that uses single and double quotes interchangeably. But it works, okay?

Since it was published on Dev.to four months ago, the Dev.to version enjoys a success of having over 600 views, eight hearts, one unicorn, and three people have it on their reading list.

I don't use Google Analytics or any analytics for this codex, though. That's okay because I don't directly monetize this resource as it's for functioning as a source of technical knowledge because I care about the experience of my users and I respect their privacy. Also, sometimes faith is the simplest solution that works as solutions with low complexity are more probable to work than their high complexity counterparts.

# Startup systems engineering process documentation and reference

The following is an excerpt from a public discussion I had regarding my current strategy and process for the Prosperity program.

> I'm not sure what you mean by timelines, but regarding time, I want to achieve an Initial Product Release as soon as possible, preferably before this first quarter of the year ends.
> 
> To answer your second question about metrics, since this is a unique type of product that's different from most of the software-as-a-service products shared here on Indie Hackers, and with unique constraints and goals, I can be different from other developers and unique with my analytics, such as by manually collecting data by simply writing down how many players are playing the game as reported by the game server logs. This should be a simple process to implement and operate/execute and since it's a video game, I don't expect there to be many concurrent players/users initially.
>
> You are right though that analytics is a consideration that I should probably take right now. The reason that I proposed such a unique analytics strategy is that more effort and time must devoted to the engineering of the product for this current phase because of what this proposed product is, a video game. Due to the driving time constraints, some aspects of the ~~product~~ startup system will be neglected so that more resources and effort can be used for vital components such as the product itself.
>
> In the future, in order to grow and establish more revenue after the first sale, marketing will take precedence over engineering and analytics will become more automated. But right now, this is basically a new small business being born that requires my undivided attention for many aspects of it and trying to optimize for some processes that shouldn't be optimized right now may lead to the ultimate goal not being achieved: establishing revenue before the year 2020.

# First person movement and projectiles

I have [achieved](/greater-strength-and-courage-are-required/) three dimensional movement. Essentially the game is like a first person shooter, which was unexpected really.

![First person movement](/assets/images/achieved_2p9d_movement.gif "2.9D game (there's no rolling, only pitching and yawing)")

The above picture shows a virtual joystick subsystem implementation made with the Document Object Model (DOM) and CSS as my process consists of using the DOM and CSS for the user interface for all my browser games made since [*Pantsu versus Baka*](https://webdva.itch.io/pantsu-versus-baka).

And shown below is a demonstration of a new and proposed projectile combat subsystem:

![Projectiles implemented](/assets/images/my_first_fps.gif "Projectiles subsystem")

Note that for a 3D game, rotations of projectiles must be implemented, especially for non-spherical projectile objects/meshes. I said this because the game currently does not have rotations for the projectiles.