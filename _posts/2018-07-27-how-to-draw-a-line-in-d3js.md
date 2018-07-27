---
layout: post
title: How to draw a line in D3.js
---

Because it's not simple or intuitive.

D3.js doesn't have a function like `drawLine(x, y)` for you to effortlessly draw a line.

Why is D3.js like that? I don't know.

So here I am, this week, writing a short and simple tutorial/guide on how to draw a line in D3.js. Version 5 (instead of 4) will be used.

# Setup

Inline Javascript and CSS will be used in a single .html file. And D3.js will be fetched from a content delivery network. So, the .html file that you would use will have this structure:

```html
<script src="https://d3js.org/d3.v5.js"></script>
<svg id="svg1" style="margin: 0 auto; display: block;"></svg>
<script>
</script>
```

# `svg` element configuration

Inside the Javascript portion, use the `d3.select` function to obtain a reference to the SVG element. Its argument is a string that contains the element's `id` attribute.

```javascript
const svg = d3.select('#svg1');
```

The value returned by `d3.select('#svg1')` has functions that are appended in a chaining fashion to further modify the selected SVG element. This chain-appendment fashion is used throughout many D3.js's operations and is the key to using it.

For instance, it seems that you can modify the HTML attributes and CSS properties of a SVG element in Javascript with the `attr` and `style` functions.

Below, an element width and height of 400 pixels is defined, with a black background color.

```javascript
const svg = d3.select('#svg1')
    .attr('width', 400)
    .attr('height', 400)
    .style('background-color', 'black');
```

# Defining a line

Now we will add a line to the SVG element. We will use the `append` function of the `svg` variable we defined.

## Line color

We want to create a light green colored line. We define a color using the `style` function to modify a `stroke` property, which is the color of the line here.

```javascript
svg.append('line')
    .style("stroke", "lightgreen");
```

## Line width

We also want to define the width of the line with the `stroke-width` property. A line of ten pixels wide is defined below.

```javascript
svg.append('line')
    .style("stroke", "lightgreen")
    .style("stroke-width", 10);
```

## Line location

For a simple two-dimensional line, the endpoints of the line must be defined for it to be displayed. This is achieved with the `x1`, `y1`, `x2`, and `y2` attributes. `x1` and `y1` correspond to the first endpoint while `x2` and `y2` correspond to the second one.

D3.js seems to use a coordinate system with the origin at the top-left corner.

```javascript
svg.append('line')
    .style("stroke", "lightgreen")
    .style("stroke-width", 10)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 200)
    .attr("y2", 200); 
```

# The result

That will be all to create the line that we want.

<script src="https://d3js.org/d3.v5.js"></script>
<svg id="svg1" style="margin: 0 auto; display: block;"></svg>
<script>
    const svg = d3.select('#svg1')
        .attr('width', 400)
        .attr('height', 400)
        .style('background-color', 'black');

    svg.append('line')
        .style("stroke", "lightgreen")
        .style("stroke-width", 10)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 200)
        .attr("y2", 200);        
</script>

# Full source code

The full source code for your convenience:

```html
<script src="https://d3js.org/d3.v5.js"></script>
<svg id="svg1" style="margin: 0 auto; display: block;"></svg>
<script>
    let svg = d3.select('#svg1')
        .attr('width', 400)
        .attr('height', 400)
        .style('background-color', 'black');

    svg.append('line')
        .style("stroke", "lightgreen")
        .style("stroke-width", 10)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 200)
        .attr("y2", 200);        
</script>
```

# Remarks

Nothing follows.