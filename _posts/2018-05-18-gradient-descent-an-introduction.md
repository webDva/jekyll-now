---
layout: post
title: "Gradient descent: an introduction"
use_math: true
---

A crash course into the nature of gradient descent.

This will be just a sort of introduction because I don't have much energy allocated right now. So, I decided to segment this entry into two parts as opposed to my original plan of including a more comprehensive informative text. Next week I'll show how I implemented gradient descent.

Finally. I have a greater understanding of gradient descent compared to when I first heard of it when I began doing machine learning.

## Gradient descent

An equation that describes the nature of gradient descent:

$$
x_{n + 1} = x_n - \gamma\nabla{F(x_n)}
$$

* $x_n$ is some point
* $x_{n + 1}$ is a successive point
* $\gamma$ is a sort of rate of climbing, or more specifically, the rate of differentiation
* $\nabla{F}$ is the gradient or derivative of a function $F$

The above equation suggests that $F(x_n) \geq F(x_{n + 1})$, which is to say that cumulative differentiations (of the nature described above) yield smaller values \[[^1]\]. As such, gradient descent can be used to minimize a cost function $J$. The mean squared error cost function, which operates on a set of $n$ observations, is one such function. It is defined as

$$
J(h_\theta(x)) = {1 \over n} \sum\limits_{i=1}^n (h_\theta(x) - \hat{Y_i})^2
$$

where $h_\theta(x)$ is a hypothesis and $\hat{Y_i}$ is an actually occurring fact that may differ from the hypothesis.

The hypothesis, when it comes to using gradient descent to select hyperparameters for a neural network, takes the same form that a simple linear regression line has, with $\theta_0$ and $\theta_1$ as the hyperparameter values.

$$
h_\theta(x) = \theta_0 + \theta_{1}x
$$

The partial derivatives of the mean squared error cost function $J(\theta_0, \theta_1)$ are

$$
\frac{\partial J}{\partial \theta_0} = {1 \over n} \sum\limits_{i=1}^n -2x(\hat{Y_i} - (\theta_0 + \theta_{1}x)) \\ \frac{\partial J}{\partial \theta_1} = {1 \over n} \sum\limits_{i=1}^n -2(\hat{Y_i} - (\theta_0 + \theta_{1}x))
$$

That'll be all for now. Next week, I'll expand upon this and show how I implemented gradient descent.

---

### Footnotes

[^1]: [https://en.wikipedia.org/wiki/Gradient_descent](https://en.wikipedia.org/wiki/Gradient_descent)