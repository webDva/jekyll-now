---
layout: post
title: Making a portable matrix multiplication library
---

I'm beginning work on a portable matrix multiplication library for embedded devices.

# *matrixmul*

*matrixmul* was created as a precursor for a more ambitious project, a small and simple neural network for microcontrollers. The library, as it must perform on various embedded systems, is being designed with the need of being small and easily used in any software project for an exotic device in mind.

For this library, I want to adhere to the standard capabilities of C as I want to optimize for portability. For instance, I neglected the use of `malloc` defined in `stdlib.h` and tried to use `unistd.h`'s `sbrk` instead to allocate memory; but in the end, I decided that data variables will have to be statically memory allocated. The functions provided by the library will require users to pass memory references. I have to deal with the design of how matrices are created too. The source code repository: [https://github.com/webDva/matrixmul](https://github.com/webDva/matrixmul).

# Strategic intentions

Regarding the issue of marketing for succeeding in my efforts, I'll give away value to many others over a long period of time in the hope that they positively acknowledge me and thus establish an audience for webdva. So while I may not have started out selling video games as I have previously envisioned, I will have started out in a much more humble fashion: giving away free value to many entities over a long period of time. And indeed it is not as fancy, but I will have traversed great depths. More greater than any other before me.

For I have grand ambitions to fulfill.

Before the year 2040, I will have created a deep learning neural network that can fit on small microcontrollers. My moonshot. But before I can achieve such a grand feat, creating small and simple systems will be the norm for me now as they involve less complexities than their counterparts. As time progresses, I will invest my efforts in gaining experience managing larger and more complex projects and then I may begin the journey of creating technology that is beyond human imagination.

I must survive this phase.

> CEOs that survive are CEOs - Travis Kalanick

I have experience with such things, traversing dark dreams. I consider this no different from playing Dark Souls on New Game Plus.

I shall survive this phase. This is my oath as a champion of excellence and prosperity.