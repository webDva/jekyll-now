---
layout: post
title: "A return to binary search trees"
---

Having made progress in the once obscure data structure, I've decided to share my experience with binary search trees this week.

**I developed an algorithm that finds, for a binary search tree, a specified node's most adjacent neighbor. I believe that it could have implications in efficiently finding cheap alternatives to missing resources in some large scale infrastructure.**

This is what the algorithm looks like in simple or general terms:

1. Obtain a list of all the binary search tree's nodes in ascending order.
2. Maintain a list of all the distances between each node and the specified node.
3. Determine the most adjacent node as the one with the smallest distance between it and the specified node.

I decided to use Python instead of the half-quirky Javascript. So, I found a nice [Python module](https://github.com/joowani/binarytree) called `binarytree` to help me in this binary search tree endeavor.

To install that sole dependency, I simply used the Python package installer named pip in a terminal.

```
pip install binarytree
```

Then, I was able to use the library to aid me in my efforts to create the algorithm with just this as the sole import of the Python file

```python
from binarytree import bst
```

The next step involved designing the function that encapsulates the algorithm. I decided to name the function `findNearestNeighborNode` and make it take two parameters, `rootNode` and `specifiedNodeValue`.

`rootNode` must be defined as a binary search tree created with the `binarytree` module. And `specifiedNodeValue` would be an integer value that specifies which node to find an adjacent neighbor for.

The function would then return an integer value that points to the target node in question, i.e., the node that is most adjacent to the specified node.

```python
def findNearestNeighborNode(rootNode, specifiedNodeValue):

```

The algorithm requires a list of all the binary search trees node's in ascending order. I noticed that the inorder method for traversing binary search trees would yield such an effect. \[[^1]\]\[[^2]\] Thanks to the `binarytree` module, all that is needed to be done by the developer is to provide the root node of a `binarytree` created binary search tree. Inorder traversal could then be performed with a single, simple statement, like

``` python
allNodes = rootNode.inorder
```

Now, as the algorithm needs to maintain a list of the differences between each node and the specified node, a list must be created in the function. A difference represents a node's distance from the specified node, by the way.

```python
differences = []
```

Having created an array that can maintain the list of differences, the algorithm then computes each node's distance from the specified node and adds the result of each determination to the array of differences.

```python
for node in allNodes:
    differences.append(abs(specifiedNodeValue - node.value))
```

Finally, the algorithm finds the node whose distance with the specified node is the smallest and then the function returns that node's location.

```python
lowest_difference = min(differences)
for index, difference in enumerate(differences):
    if difference == lowest_difference:
        return allNodes[index].value
```

To test to see if the algorithm works and to see its effects, I created a random binary search tree to test the algorithm on.

``` python
test_bst = bst(height = 3, is_perfect = False)
```

The `binarytree` module can print a very nice graph of a binary search tree like this for us, with the statement `print test_bst`.

```
        ____6__
       /       \
    __3__       10___
   /     \     /     \
  1       5   8      _14
 / \     /          /
0   2   4          12
```

Using `findNearestNeighborNode(test_bst, 7)` on the above binary search tree, the algorithm would find the closest node to a non-existant 7 node to be the 6 node.

Here's the full source code of the algorithm, complete with very informative comments:

```python
from binarytree import bst 

# Function to find the nearest neighbor node of a specified node in a binary search tree. Returns the target node's value in question.
# rootNode is a binary search tree created from the bst module and specifiedNodeValue is an integer value of a possible node that could exist.
def findNearestNeighborNode(rootNode, specifiedNodeValue):

    # Use the in order method of binary search tree traversing to get a list of all nodes in ascending order.

    allNodes = rootNode.inorder

    # For each node, find the arithmetic difference between it and the specified node, then place the result into an array for finding the lowest difference.
    # The node that has the lowest difference will be the node that will be considered the nearest neighbor node.

    differences = [] # The array that will contain all the differences.

    for node in allNodes:
        differences.append(abs(specifiedNodeValue - node.value))

    # Find the first lowest difference and then deem the first node with that difference as the node that is the nearest neighbor to the specfied node.
    
    lowest_difference = min(differences)
    for index, difference in enumerate(differences): # Finding the node with the same index as the index of the lowest difference.
        if difference == lowest_difference: # Note that the allNodes array and differences array map or correspond to each other.
            return allNodes[index].value

```

# Stumbling upon the answer to inverting a binary search tree

Noticing the effect that the inorder traversal had, I think I [finally](/progress-invert-binary-search-tree/) found the solution for reversing a binary search tree by considering inorder traversal.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">It took several months to find the answer by myself (without seeking the answers of others), but I stumbled upon the answer myself when I was solving another problem. Though, I still don&#39;t know how to implement the traversal method myself.</p>&mdash; Webdva (@webDva) <a href="https://twitter.com/webDva/status/972808211446292480?ref_src=twsrc%5Etfw">March 11, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But I don't ~~know how~~ want to implement a traversal method myself nor implement a binary search tree data structure (complete with accessor functions) from scratch right now.

# Flaming chicken in hand

I'm still learning how to use my Effectual Transformation skill. And I forgot about having knowledge in binary search trees. I must not squander these great fortunes that I have as they can create opportunities that I can exploit. I will strive to leverage these effects in my endeavors.

---

# Footnotes

[^1]: [http://www.ida.liu.se/opendsa/OpenDSA/Books/TDDD86_2014/html/Glossary.html#term-inorder-traversal](http://www.ida.liu.se/opendsa/OpenDSA/Books/TDDD86_2014/html/Glossary.html#term-inorder-traversal)
[^2]: [https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm)