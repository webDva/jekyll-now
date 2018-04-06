---
layout: post
title: A wee bit of an introduction to k-means clustering
image: /assets/images/cluster_viz_example.png
use_math: true
---

I will only touch upon lightly the subject of k-means clustering here. A sort of tease, if you will.

# What is k-means clustering?

In short, k-means clustering is a technique for determining clusters or groupings for a set of observations.

The technique is defined mathematically as \[[^1]\]:

$$
\underset{S}{\operatorname{arg min}} \sum\limits_{i=1}^k \sum\limits_{x \in S_i} \|x - \mu_i\|^2
$$

$S$ is the set of clusters with $k$ being the number of clusters (hence, $\textbf{S} = \\{ S_1, \, S_2, \, \dots, \, S_k \\}$). The number of clusters has to be less than or equal to the number of $n$ observations whose set is defined as $(\textbf{x}_1, \, \textbf{x}_2, \, \dots, \, \textbf{x}_n)$ and each observation is a vector.

$\sum\limits_{i=1}^k \sum\limits_{x \in S_i} \\|x - \mu_i\\|^2$ is the within-cluster sum of squares or intra-cluster variance of a partitioning of the observations, where $\mu_i$ is the mean of the observations of each respective cluster.

This mathematical form shows that the objective of the k-means clustering technique is to find the smallest intra-cluster variance for a set of clusters $S$ for a set of $n$ observations.

And yes, I had to resort to a mathematical explanation. Well, this is just a wee bit of an introduction anyway and this blog post is supposed to be short too. I think that this would suffice in introducing k-means clustering. There's more involved, like how this definition just shows that there is theoretically a global optimum for the variance, but finding it in reality is very difficult. And there's another form of this technique that can assign probabilities for each observation-cluster pair.

But just know here that by being able to partition a set of observations using some sort of technique, you can categorize data without having to do it yourself. And this unsupervised machine learning technique is what I seek, to help me in my endeavors.

I aim to eventually automate some processes so that I can scale my efforts and not rely on others, in the far future. For now, though, this newfound power will have other uses, like being used by my automated news service startup directly.

---

### Footnotes

[^1]: [https://en.wikipedia.org/wiki/K-means_clustering](https://en.wikipedia.org/wiki/K-means_clustering)