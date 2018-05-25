---
layout: post
title: Implementing batch gradient descent
use_math: true
---

This is the next part of my discussion of gradient descent.

As promised in the [previous part](/gradient-descent-an-introduction/), I will show how I implemented gradient descent, particularly batch gradient descent.

The implementation uses the nature of gradient descent as described by the following equation

$$
x_{n + 1} = x_n - \gamma\nabla{F(x_n)}
$$

The gradient is calculated using the partial derivatives of the mean squared error cost function which are

$$
\frac{\partial J}{\partial \theta_0} = {1 \over n} \sum\limits_{i=1}^n -2x(\hat{Y_i} - (\theta_0 + \theta_{1}x)) \\ \frac{\partial J}{\partial \theta_1} = {1 \over n} \sum\limits_{i=1}^n -2(\hat{Y_i} - (\theta_0 + \theta_{1}x))
$$

The function's interface consists of the `X` and `Y` sets of x-y pairs for some dataset, initial `weight` and `bias` hyperparameters, the number of `epoch`s to run the algorithm for, and the learning rate `gamma`. It works by calculating the sum of all successive gradient descents using all the x-y data pairs supplied. The current hyperparameter value is used as the accumulator for each gradient. The number of times the algorithm runs the summing process is based on the number of epochs.

The full source code:

```python
def gradientdescent(X, Y, weight = 0, bias = 0, epochs = 500000, gamma = 0.00001):

    current_h0 = weight
    current_h1 = bias

    for epoch in range(epochs):
        previous_h0 = current_h0
        previous_h1 = current_h1
        for i in range(len(X)):
            current_h0 += -gamma * (-2 * X[i] * (Y[i] - (previous_h0 * X[i] + previous_h1)))
            current_h1 += -gamma * (-2 * (Y[i] - (previous_h0 * X[i] + previous_h1)))

    return (current_h0, current_h1)
```

It converges to the local minimum fairly well and fast enough with a large number of epochs for not-too-many data pairs, although I haven't measured it in any objective way. And for some reason, a learning rate higher than 0.00001 produces large numbers that yield show stopping Python `nan`'s during run-time.

Now, I have implementation achievements for simple linear regression, k-means clustering, and batch gradient descent in my portfolio. A portfolio of success that grows bit-by-bit.