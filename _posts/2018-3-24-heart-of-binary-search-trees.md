---
layout: post
title: "Peering inside the heart of binary search trees"
---

I know I said I didn't want to create a binary search tree data structure from scratch in the last blog post, but I changed my mind. Also, I never would've thought I would ever discuss the nature of binary search trees in a series of blog posts.

I'm tempted to use C, [instead of Python](https://github.com/webDva/KawaiiComSci), for creating binary search trees, because it better represents what a binary search tree looks like in memory compared to Python.

Python's definition of a node structure

```python
class Node:
    def __init__(self, key, left = None, right = None):
        self.key = key
        self.left = left
        self.right = right
```

compared to C's definition of a node structure

```c
struct node {
    int key;
    struct node *left, *right;
};
```

You wouldn't know the inherent nature of what Python's `self.key` was without more extrospection. But with C's `int key;`, you would know that `key` is merely a container, while `struct node *left, *right;` gives rise to the understanding that therein lies more to the `node` structure. The idea that a binary search tree's nodes can coexist in a disparate memory space would spark in your mind.

Nonetheless, it seems that I'm walking the path of a computer science student. And I'm prepared to undergo this long journey of gaining an understanding of computer science principles as I'm certain that it would benefit me in my entrepreneurial endeavors.

Or not.

![Tobi "...or not"](/assets/images/tobi or not.gif "Tobi's "...or not"")

Considering that solutions arise when problems arise, I may need to devote more effort to building my startups instead of expending effort in preparing for optimized large scale infrastructure development. I'm a digital product maker and I should probably forgo further obtaining basic computer science knowledge.

At least I gained a wee bit of experience in typical software engineering.

# Itching to build

In regards to the current digital music economy/market that leaves a lot to be desired, an individual musician remarked:

> I recognize the current state of the marketplace and choose to embrace its realities and use them to my advantage.

And this is where I step in as a passionate tech entrepreneur and use my advanced abilities to alter the realities of that socioeconomic phenomenon. That is the kind of noble and high-performing tech entrepreneur I wish to be. One who can use his near-absolute intellectual strength in pursuing grand economic aspirations. And that is a fortune I possess, an opportunity.

I should definitely, then, stop mucking about with learning computer science stuff and instead focus on building my free digital music marketplace startup.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">i&#39;m really excited about this new startup, this new project. this new endeavor that i&#39;m about to embark on <a href="https://t.co/o8KZTbj6oO">pic.twitter.com/o8KZTbj6oO</a></p>&mdash; webdva (@webDva) <a href="https://twitter.com/webDva/status/976726093414748160?ref_src=twsrc%5Etfw">March 22, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

IPR stands for Initial Product Release and it's sort of like a public precursor to a Minimum Viable Product. The IPR will simply consist of users being able to listen to songs that have been uploaded and shared. So, that's what I should be going for as I begin to build this startup and embark on this new endeavor.