---
title: "Wrestling with Angular and Node.js: Making a Sprite Sheet Maker Web App"
layout: post
---

Indeed, I've finally started work on creating a web app that makes sprite sheets. This project or idea is interfering with the Pantsu Sweeper game's progress, but that's okay, because I do more than make video games. I'm finally doing straight-up web development. Also, inefficient time management may be partly to blame.

# Initial setup with Node.js

This being a full-stack web app project, I was aware of the issue of juggling the frontend and the backend. Project structure wise, I found that you can simply organize the frontend and backend functionality into seperate directories. The Node.js server would simply display the Angular frontend that's located in a seperate directory to the user with

{% highlight javascript %}
app.use(express.static(path.join(__dirname, '../frontend/dist')));
{% endhighlight %}

where `dist` is the directory where the Angular frontend is compiled by Webpack or whatever magic `angular-cli` does when building Angular projects.

## What npm packages to choose?

I may have familarity with HTTP server development, but implementing my understanding was difficult at first as I wasn't aware of what all needed to be implemented. I definitely didn't want to come up with solutions to web server development that were already solved, so I had to research what Node.js packages would help me execute my vision for this web app.

I discovered that I needed the `cors` package to handle Cross-Origin Resource Sharing for uploading files from a browser. For the database storage that I planned for the web app to have, I decided to use MySQL instead of PostgreSQL this time--unlike my first web app of eight months ago--so I included the `mysql` package. I'm not sure about needing `body-Parser`, which I included.

## Multer for uploading files

[Multer](https://github.com/expressjs/multer) does a lot for me here. It functions as a middleware for handling the implementation of dealing with files uploaded by the user. I researched how to use it by reading tutorials and the GitHub documentation. I was then able to come up with code that, although not long-lasting as I was focused on quickly reaching a minimum viable product, created the basic architecture of what I wanted to build.

## Debugging the API code

For debugging Node.js programs that deal with networking such as APIs, I use [Postman](https://www.getpostman.com/). It allows me to fabricate HTTP requests, emulating what a browser would send to a web server. This allowed me to test the API that I was making as there were sure to be mistakes and errors during the creation.

## A way for actually creating sprite sheets

Picking node packages that already have solved this problem for me, one particular npm package that I came across, [`spritesmith`](https://github.com/Ensighten/spritesmith), uses Javascript `Buffer`s for the output of a sprite sheet. I initially thought that having the sprite sheet output being a `Buffer` would pose no problem, but I was mistaken as this would become a big problem later on.

Nonetheless, `spritesmith` was a perfect fit for me as it met the requirements for my circumstances. I then decided to use it on the backend and have the output of its work be sent by the API backend to the Angular frontend.

# The Angular frontend

I used `angular-cli` to initialize the frontend that the user will see.

Reading the official Angular documentation, I found out about template reference variables, which represent a template's HTML element. The code below passes `filelist.files` (which is an HTML5 `Filelist`'s array of `File`s) to the `app-upload-form` component's (which is a web component made for allowing the user to upload files) method member so that the component would not need to know about extra data, as advised in the official Angular documentation.

{% highlight html %}
<input type="file" #filelist multiple (change)="upload(filelist.files)" placeholder="Upload files">
{% endhighlight %}

It was difficult trying to find out how to send HTML5 `File` objects to the backend server using Angular, because I didn't want to use Javascript's `FormData`, as a random person advised not to use. I had to, though, in the end, and using it was actually the correct decision for my circumstances.

I wasted time trying to figure out how to preview the user's uploaded images in the user's browser. Though it was a noble feature, I'll have to rely on using the API server for doing all of the work--was what I thought until I was able to solve the problem of displaying a preview of the sprite sheet image given by the API server.

# Solving an image preview problem

> My best looking and most technical [commit](https://github.com/webDva/Spritesheet-Maker/commit/3996642d9038fe06a0ab5e798600c72bafc01347) yet involved memory manipulation. It gets rid of something I don't like the look of and replaces it with something better and simpler.

I believed that I needed a temporary URL (for the image's `img` tag's `src` attribute) to point to the user's newly created sprite sheet image. The correct implementation for this concept was the creation of an HTML5 `Blob` object and its corresponding URL. After much troublesome research, debugging, and critical thinking, I discovered that creating a new Javascript `Uint8Array` using the `Buffer` given by the sprite sheet making backend was the solution I was looking for. Only then was I able to create a temporary URL for the new `Blob` object. I was joyous when I implemented the solution and was able to finally solve the problem of displaying a preview image of the user's new sprite sheet.

{% highlight typescript %}
let blob = new Blob([new Uint8Array(data['newImage']['data'])], {type: 'image/png'});
this.url = this.sanitzer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
{% endhighlight %}

The above code creates a new `Blob` using the image byte data representing the user's new sprite sheet image retrieved from the API server. The user's new sprite sheet image is then given a temporary browser URL using `createObjectURL` and Angular's handy `DomSanitizer`.

The highlight of the project and the most exciting part, really.

# What's going to happen next?

I'm gonna be hip and trendy and typical right now, and thus say that I learned much so far and had fun. Nonetheless, I'm having trouble right now writing this blog post, struggling to decide whether to use the past tense or the present tense, as I'm considering whether or not to pursue another idea and abandon this one. I've always really wanted to make a sprite sheet making web app since I had an issue with making sprite sheets for the Tiled Map Editor while making my [2D platformer game](https://webdva.github.io/Super-Simple-and-Small-2D-Platformer-Game/public_html/index.html). The goals of this project were to develop a web app, gain more experience with Angular and Node.js, and many other reasons.

I'm not even sure about this being a web app that has a backend server that constantly sends and recieves images--although optimizing the architecture of such a thing is appealing. When I think upon this project, I question whether I should put all functionality on the frontend, in the user's browser.

If I decide to abandon this project, which is highly likely, I'll be moving on to new ideas. I won't really totally abandon it as I may return to it in the far future, like how I returned to my binary search tree inversion project.

Nonetheless, I'm not going to be thinking in absolutes or have bias toward the negatives (I have a unique ultimate vision I want to execute, after all). I'll instead be aware that I did gain much from this endeavor. I have a new executed idea under my belt. I believe that's +1 XP gained.