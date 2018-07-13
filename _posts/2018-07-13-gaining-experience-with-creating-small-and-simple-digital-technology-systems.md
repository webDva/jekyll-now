---
layout: post
title: Gaining experience with creating small and simple digital technology systems
---

Starting off this quarter of the year with a bang: I made a full-stack to-do list web application.

The most important experience I gained was creating user accounts as a real-world application would do. With this new capability, I can now better create software as a service products. It's amazing what a to-do list application really entails. Such systems are not to be underestimated.

# Digital Technicalities

Technical-wise, I now know how to handle cookies on a server, do session management with Express.js, and update MongoDB database entries.

I gained experience in creating custom Express.js middleware functions. For example, here's a middleware function for preventing unauthorized sessions thereby requiring users to be logged in to access certain server-side resources (wow, I sound so...):

```javascript
const validSessionChecker = (req, res, next) => {
    if (!req.session.user && !req.session.cookie) {
        return res.send({ success: false, reason: INVALID_SESSION });
    } else {
        next();
    }
};
```

And an example of a user of that custom middleware function: 

```javascript
app.get('/retrieveTodos', validSessionChecker, (req, res) => {
    // function internals
});
```

And here's my first ever Javascript function I created (I think) that needs a callback parameter to be passed:

```javascript
function retrieveTodos(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/retrieveTodos', true);
    xhr.send();
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            if (!response.success) return;
            callback(response.todos);
        }
    };
}
```

The to-do list web application's development took five days. I'm not going to host a live-running version of it on an internet server because I'm going to pursue other ideas.

You can see the source code (complete with installation instructions!) here: [https://github.com/webDva/todo-list-web-app](https://github.com/webDva/todo-list-web-app).

# Now go forth

Yeah, it's time to leverage these effects as a skilled technology entrepreneur would do. I decided not to pursue the to-do list web application product idea as I don't believe that I will navigate such a market-space well. I may have advanced cognitive abilities and thus be an inherently skilled technology entrepreneur, but I currently don't have experience in such a market-space.

I do, however, have experience with video games and that is a great market-space. I'm thinking about [making an HTML5 game](https://webdva.itch.io/pantsu-versus-baka) with purchasable and downloadable content. I can do that now with this new skill of being able to create user accounts and handle sessions. Strength begets fortune.

I'm certain that if I made a simple and free web game with an option to pay a one-time subscription fee for a user account that grants access to downloadable content, then someone would pay and become a customer thereby marking the end of this phase of having no income.