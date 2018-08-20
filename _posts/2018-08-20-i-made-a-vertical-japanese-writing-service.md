---
layout: post
title: I made a vertical Japanese writing service
---

A free web service that allows you to easily create vertical Japanese writing, or 縦書き (たてがき or tategaki), from your horizontal Japanese writing, 横書き (よこがき or yokogaki).

You can use it here: [webdva.github.io/tategaki](https://webdva.github.io/tategaki). I named it *Tategaki*.

A screenshot to show an example:

![yokogaki-tategaki transformation](/assets/images/tategaki_screenshot.png "An example of a yokogaki-tategaki transformation.")

Mind you, I care little for the performance of this startup as cost and time are the greatest constraints here. So, I will not be concerned with the visual design of the web service and I will not actively market it with much effort (even though [I've already contacted some people on Twitter](https://twitter.com/webDva/status/1031287353376231425)). I still may need to integrate my feedback mechanism into it.

Why did I make such a startup? I wanted to provide a free service for the Japanese Twitter people and create a web service that accepts donations.

Regarding the technicality of this startup, I created an algorithm for transforming horizontal Japanese writing to vertical Japanese writing. I would delve further with an explanation, but I've other activities to concern myself with. I give you the source code of the algorithm:

``` javascript
function makeVertical(text, rows = 3) {
    let newText = '';
    // padding to prevent unevenness
    const padded = (text.length % rows == 0) ? text : text + '　'.repeat(rows - text.length % rows);
    // start from the end. reverse the string
    const reversed = padded.split('').reverse().join('');
    // create each row of the new string
    for (let i = 0; i < rows; i++) {
        // create each column in the new string, for the current row
        for (let j = 0; j < reversed.length / rows; j++) {
            // creates a row of tategaki characters
            newText += `${reversed[((i * j + rows - i) - 1) + j * rows - i * j]}` + '　';
        }
        newText = newText.slice(0, -1); // to remove the trailing space character at the last column
        newText += '\n'; // starts the new row in the new string
    }

    return newText;
}
```

This technology was borne from my great heart and strength.