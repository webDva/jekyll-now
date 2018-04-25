---
title: Progress on Inverting a Binary Search Tree
layout: post
---

My days are currently in a rhythm where they start in the afternoon, but on the day I decided to revisit my binary search tree inversion problem, my day began at 09:00. As such, I wanted to be productive and make use of my unpexpected time, so I decided to spend a few hours trying to come up with an algorithm that works.

I projected that such a decision to work on the problem would be optimal as I believed that it didn't require as much energy as working on something like planning the architecture of a video game or a web app. Indeed, the project only involved sovling one specific problem, that of inverting a binary search tree. I initially thought that being able to solve such a problem would not have required much knowledge or awareness, but I'm now beginning to think that I jumped to a conclusion.

# The algorithm

The algorithm that I have right now, in psuedocode:

```
allNodes = []
allNodes.push(tree.rootNode)
currentNode = tree.rootNode
parentNode = null
traversingLeft = true
numberOfNodesTraversed = 0
while (numberOfNodesTraversed != tree.numberOfNodes):
    if (traversingLeft AND currentNode.leftNode):
        allNodes.push(currentNode.leftNode)
        numberOfNodesTraversed++
        parentNode = currentNode
        currentNode = currentNode.leftNode
    else if (currentNode.rightNode):
        allNodes.push(currentNode.rightNode)
        numberOfNodesTraversed++
        traversingLeft = true
        parentNode = currentNode
        currentNode = currentNode.rightNode
    else:
        traversingLeft = false
        currentNode = parentNode

for (i = 0; i < allNodes.length; i++):
    Simply exchange the left and right nodes
```

The most recent change I made to the algorithim was to use the information obtained from a counter that gets incremented everytime a new node is inserted, thereby giving the total number of nodes in the binary search tree. This practice of having available such a feature may or may not be an optimal solution as it could be costly in the context of a large scale architecture. Believing that, I didn't want to do it that way. I instead wanted to only rely on using the information provided by the nodes themselves rather than installing a new member `numberOfNodes` onto the `BinarySearchTree` class, which is the implemention of the binary search tree that's operated on.

One issue with this algorithm (and why it doesn't work) is that previous parent nodes are not getting re-traversed, because they are not being tracked in some sort of collection. One idea I'm currently implementing is using a collection (which has already been implemented with the addition of traversed nodes to the `allNodes` array) and computing offsets to jump back up to previous parent nodes.

Sometimes it feels like I'm over-engineering the solution and that there's a simple solution that involves some knowledge that I don't have.

# Still questing for the answer

I've spent two months trying to solve this problem, mostly because of other things vying for my attention and time. During the course of these two months, though, I did try to come up with solutions while I wasn't in front of the code. I even developed somewhat of a fascination or obsession with binary search trees.

I am tempted, at times, to look up the answer to inverting a binary search tree. But maybe I like being teased, enthralled by the longing for the divine knowledge of this advanced concept. I can see this sort of thing turning into a labor of love.