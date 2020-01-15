---
layout: post
title: A Public Exploration into Non-convexity
---

I'm studying non-convex optimization for epic gains. And you must be careful about the true and ultimate essence of study.

While the majority and competitors seek orthogonal rewards, I once more find myself bravely venturing at the edge of life and local nature. This particular blog entry is a practice in the aphoristic style which is much better for post-structural profundity.

Wherever continuity is found or desired, a measurement of progress is possible only if the limited, material resource known as gradient information is available. The costly computation of partial differential equations is required to obtain the resource. The gradient of a function ƒ at a point p:

∇ƒ(p) = [∂ƒ(p)/∂x₁ ⋯ ∂ƒ(p)/∂xₙ]⊤ (⊤ denotes transposition which is meant here to create a column vector)

The solution strategy of committing to a local optimization of a non-convex function is intuitive, but we must be wiling to use the underlying structures of outside objects to gain powerful advantages when attempting to solve non-convex problems. As an example of limitations or disadvantages involved in current and popular attempts, consider a local convexity assumption (which forces the true function to morph therefore not corresponding to true reality). A function ƒ is locally convex if the following Polyak-Lojasiewicz condition is satisfied for all x considered in the neighborhood of interest:

\|\|∇ƒ(x)\|\|² ⩾ 2μ(ƒ(x) - ƒ*),

which means that the measured distance metric of the gradient of a function ƒ must grow as fast as an arbitrary function value V(μ) = 2μ that scales a displacement of an optimal function value ƒ*. This assumption requires gradient information which is not always available to engineering organizations or mathematical optimization practitioners, especially as the computation of differential equations usually requires statistics to be performed on large amounts of data. Perhaps there exists a structure or method that is isomorphic to the essence of the gradient being and thus there is a suitable alternative for underserved populations.

Let X be a convex set. Such requires a vector space S over some ordered field (an ordering, such as a ≼ b, is prerequisite for defining supreme (minimal and maximal) elements). The subset X ⊂ S thus has for all x and y in X, and t in the interval [0, 1], the affine combination tx + (1 - t)y.

Fortunately, an antithetical to convexity set is simply non-convex if it is not convex.

Assume a function ƒ : X ⟶ ℝ. ƒ is convex if for all x₁, x₂ ∈ X and for all t ∈ [0, 1]:

ƒ(tx₁ + (1 - t)x₂) ⩽ tƒ(x₁) + (1 - t)ƒ(x₂).

When this inequality is understood as

ƒ(αx + βy) ⩽ αƒ(x) + βƒ(y)

for all x, y ∈ ℝⁿ and all α, β ∈ ℝ with α + β = 1, α ⩾ 0, β ⩾ 0, it can be seen that convexity can be generalized and generalized for the purpose of exploiting the utility of outside structures, which is what the representation or concept of convexity leads to. But *non-convexity* is any object that does not meet the conditions for convexity, and there exists *many* non-convex cases and such coheres with the framework that tries to address the problem of discovering methods for resolving non-convexity's difficulty. The large domain of such a framework is an *outside* of traditional convex optimization. Our goal is to bravely operate within this *outside* to obtain rewards of methods and knowledge that correspond to truths pertaining to non-convexity and its optimization. Due to the difficulty of handling non-convexity, it should be expected that any valuable success found will be limited to only being able to be used in particular fashions rather than in any case without careful analysis of the particular instance.

The underlying structure of convex projections requires a certain and intuitive understanding. Despite the Euclidean L²-norm in the convex projection operator ([arXiv:1712.07897](https://arxiv.org/abs/1712.07897), 2.2 Convex Projections)

Π_C (z) := argmin(x ∈ C) \|\|x - z\|\|₂

(with the C ⊂ ℝⁿ in Π_C being a subscript for understanding notation's sake) being an optional metric, the practitioner is forced to use a geometric interpretation, and such interpretations fail to account for cases where higher dimensions may create additional obstacles. ...Or at least I hope so so that I can create a new non-convex optimization technique with such motivation. My attempt is to create a framework, first conceptual and then implemented in physical form, that enables a practitioner or user to solve many non-convex optimization problems without using a lot of assumptions.