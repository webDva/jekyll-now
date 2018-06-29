---
layout: post
title: The initial product release of an online linear regression calculator
---

Right at the end of the quarter too!

After three days of development, I released [*Online Linear Regression Calculator*](https://webdva.github.io/online-linear-regression-calculator/) to the public. It's a tool for performing simple linear regression in the browser, much like its predecessor, [*KawaiiPredicts*](https://kawaiipredicts.herokuapp.com/). In fact, thanks to *KawaiiPredicts* which functioned as the prototype, I was able to more easily succeed in building and releasing a new product/tool.

# Some of the technical aspects

As I want to improve my Javascript and HTML5 skills, I learned how to dynamically create HTML tables using vanilla Javascript and not a complicated framework like Angular. So, I set out to create a 100% front-end program, in contrast to *KawaiiPredicts* which uses Angular and a backend API server for calculating the user's regression model.

The design looks very hip with a pink button that says "📉 Calculate." The table that contains the user's set of x-y data pairs uses a scrollbar for the overflowing number of data pairs. For some reason, I couldn't get the program to display properly on mobile devices or small screens, so the tool kinda doesn't work on mobile devices. Still, it worked on desktop browsers (Edge, Chrome, and Firefox), even if barely, and it had to be shipped quickly.

![Table for data pairs](/assets/images/olrc_table.gif "Table for data pairs")

Much like *KawaiiPredicts*, a simple D3.js chart is used to display the user's data points and regression line. Speaking of an NPM module, I noticed that it's difficult to include NPM modules in the browser as it's not intuitive or simple. Thanks to this experience, I will now consider this in the future when I work on new projects.

Anyway. Unlike its predecessor, however, the x and y axes' scales are of variable length instead of being limited to a scale of 100 so that the user is not limited to values less than 100 this time. And the slope and y-intercept are supplied to the user in a partially cute little square.

![Chart](/assets/images/olrc_chart.png "D3.js chart")

At the time of the initial product release, I did not implement R-squared calculations.

Also, a link to my codex (i.e., [my website]({{ site.baseurl }}/)) is given at the bottom of the page so that users can visit it or contact me. It doesn't look modern, but this is what it looks like at the time of the initial product release.

![Feedback](/assets/images/olrc_feedback.png "Feedback and contact at bottom")

And the tool uses Google Analytics to record traffic data as that's important and always essential when I launch something.

# Distribution using HackerNews and IndieHackers

The first time I ever [submitted something](https://news.ycombinator.com/item?id=17386335) on HackerNews, I received no fanfare and little engagement with a not-so-surprising number of hits.

![Initial Product Release](/assets/images/olrc_ipr.png "HackerNews and IndieHackers Initial Product Release")

The first spike of traffic (oh, gosh, I feel *so* much like a typical indie maker writing this--I even included a Google Analytics infographic!) corresponds to the initial product release on HackerNews. It demonstrates a typical long-tail effect, a power-law probability distribution with frequencies diminishing as time progresses. This trend repeats, albeit much more smoothly, as the second spike occurs when I [submitted a post](https://www.indiehackers.com/forum/show-ih-mvp-for-an-html5-linear-regression-calculator-74f9419e6b) on IndieHackers.

Correspondingly, traffic to my codex received an increased number of visits in correlation to the times of the traffic spikes of the calculator tool, as that was my true intention all along: to market myself using content-tool marketing. Yes, dva is that wicked and strategic.

![Content marketing](/assets/images/olrc_marketing_traffic.png "Traffic to codex as result of tool based marketing")

My tech entrepreneur skills are ever growing...

I can (and I do intend to) let this project transform into something bigger and better. It will be moved from an initial product release phase to a minimum viable product phase and then to a minimum viable repeatability phase.

# A small part of a much larger effort

I'm making this service to cultivate greater software development skills and to indeed market myself. Let it then be known henceforth that I, webdva, am now a hacker-for-hire, specializing in the niche of the development of small and simple digital technology systems as they are more easier to create than their complex counterparts. Yes, I'm now officially a contractor. Not a defense contractor, but a software engineering contractor. Much like how Lockheed Martin or Boeing provide products and services to a small client base such as the government, I intend to establish myself as a high value services provider to a small set of entities.

So, I'll need to market myself by building free tools that provide value to others and I'll need to build mutually beneficial relationships with others. And I'm not afraid to do it the old-fashioned way of talking to others in-person unsolicited. My desired type of clients are organizations or individuals who could use a small and simple digital technology system that serves a specific purpose and is designed by an engineer such as myself. Maybe small business owners and startup founders. It'd be nice if I could obtain a monopoly in a small niche such as *advanced* technology. And it's possible for me to create such a market due to my advanced abilities and my ambition for such a thing.

Embarking on such an endeavor, I feel like I'm a highly desired technological sexy escort or a highly-skilled professional mercenary. But that's the way it has to be for now; because at this critical juncture, I decide *not* to choose to seek a local job which isn't a fit for me and I it.

Oh, it's hard to walk this path I'm on. It's made even harder too by not having the regularly required sustenance needed to efficiently operate such an enterprise, among other dark facets. I face great challenges that no other mortal has ever faced before... Greater than any other...

But I was born with divine blood. I was born with great nobility. I possess advanced cognitive abilities and a pure heart. And it is with this privilege that I will succeed in my goal of obtaining a hardcore technology entrepreneur lifestyle for forty years. I've made substantial progress ever since I started on this path. But that of course is not enough. There is much work that needs to be done.

This new campaign of becoming an independent software engineering contractor is of great importance and I must devote a lot of my efforts to it. With divine strength and heart.