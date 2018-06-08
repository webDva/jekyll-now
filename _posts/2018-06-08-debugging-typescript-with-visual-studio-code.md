---
layout: post
title: Debugging Typescript with Visual Studio Code
---

The problem involves using Typescript (as opposed to Javascript) as the language for a front-end program with the goal of debugging using the Visual Studio Code IDE's debugger. The solution involves configuring Typescript compilation options, using a server to host the front-end program, and configuring Visual Studio Code launch options.

# Motivation and context

I was resuming work on my game [Kawaii Ketchup](https://webdva.itch.io/kawaii-ketchup) after a hiatus. An obstacle that appeared in my way, I had to solve the problem of being able to have debugging in Typescript using Visual Studio Code as I was previously using another IDE, NetBeans. So, with courage and skill I faced this problem and successfully found a solution.

My particular use case involves a browser-based program, a Phaser game, in fact, so the context for this informative guide will be that of a trying to get Visual Studio Code's debugger to debug Typescript code that gets compiled to Javascript code which runs in a browser. The Chrome browser will be used as the browser for running the browser program.

## Requirements

* Visual Studio Code version 1.23.1
* Microsoft *Debugger for Chrome* (with extension identifier `msjsdiag.debugger-for-chrome`) version 4.4.3
* *Live Server* (with extension identifier `ritwickdey.liveserver`) version 4.0.0

# Using a server

The *Debugger for Chrome* extension documentation says that a local web server must be used to serve the front-end program. I used the Visual Studio Code extension called *Live Server*. You could use the same or you could use something entirely different, like Python's SimpleHTTPServer.

To use *Live Server*--and particularly for my use case of debugging a Phaser game--once the extension is installed, right-click the `index.html` file in the IDE's explorer view pane and select "Open With Live Server" to have the `index.html` file served and the requirement for having a web server satisfied.

# Typescript configuration

Create a mapping of Typescript source files to corresponding Javascript files. This will make the Visual Studio Code debugger be able to operate on your Typescript sources. Do this by enabling the `sourceMap` option in your `tsconfig.json` file.

``` json
{
    "compilerOptions": {
        "sourceMap": true
    },
}
```

Upon compilation, this will tell Typescript to create a `.map` file in the appropriate directory as configured in the `tsconfig.json` file.

To make Typescript automatically re-compile on file changes, use the following console command (in the appropriate directory)

```
tsc -w
```

# Visual Studio Code launch options

Add a new debugging configuration in the Visual Studio Code IDE and allow the IDE to attach to Chrome with the "Chrome: Attach" debug configuration option.

After selecting "Attach to Chrome" as the debug launch configuration type, make your newly created `launch.json` file look a little something like this

``` json
{
    "type": "chrome",
    "request": "attach",
    "name": "Attach to Chrome",
    "port": 9222,
    "webRoot": "${workspaceFolder}",
    "sourceMaps": true
}
```

The line `"sourceMaps": true` is of concern as that will allow the `.map` files produced by Typescript compilations to be used by the Visual Studio Code IDE thereby allowing debugging. Depending on your project's directory structure, additional configuration in the `launch.json` file may be required.

# Begin debugging

Currently, the Visual Studio Code IDE needs to have an instance of the Chrome browser with remote debugging enabled. To accomplish this, run an instance of the Chrome browser with the launch options `<PATH TO YOUR CHROME BROWSER'S BINARY FILE>/chrome.exe --remote-debugging-port=9222` as instructed by the Microsoft *Debugger for Chrome* extension \[[^1]\].

In Visual Studio Code, use the "Debug" menu or press "F5," after which you'll be prompted with a "Select a tab" drop-down menu that will allow you to select a Chrome tab as the debugging target. For instance, my use case involves me selecting the tab with the URL `http://127.0.0.1:5500/public_html/index.html` as the target.

You should now be able to debug Typescript code inside the Visual Studio Code IDE.

---

### Footnotes

[^1]: [https://github.com/Microsoft/vscode-chrome-debug](https://github.com/Microsoft/vscode-chrome-debug)