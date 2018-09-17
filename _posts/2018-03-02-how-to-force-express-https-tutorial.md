---
layout: post
title: "How to force Express.js to use HTTPS"
summary: "Webdva shows you how to make your Express server redirect a user to the HTTPS version of your web app. Webdva also shows you how to redirect to a custom domain deployed on Heroku."
image: /assets/images/pexels-photo-546819.jpeg
---

A technical problem that I've had to face, I've decided to share the sweet wisdom I obtained with you!

If you have a web app that's hosted on Heroku, and you use Node.js/Express.js for the backend, then you'll likely want a way to force users of your web app to use the HTTPS version of your web site. This tutorial will show you how to force your Express.js web app, hosted on Heroku, to use HTTPS.

Note that this isn't limited to only Heroku. It can also be applied to other things.

As an added bonus, if you have a custom domain name, you can also force users' browsers to redirect to the custom domain name instead of letting them use the sub-domain one provided by Heroku (e.g., yourappname.herokuapp.com). This can be useful, for example, for when you want to use Google Analytics only on your custom domain instead of the Heroku provided sub-domain name.

# The process in detail

We will perform HTTP to HTTPS redirection by creating an Express middleware function \[[^1]\] and then, inside that function, write the redirection code that will force Express to use HTTPS. The middleware function provides access to the Express `req` and `res` objects and `next` function that we will need.

Note that Express.js version 4 is used here in this tutorial. And ES6 code is used, but you can still easily convert it for your own use case.

## Production mode check

We use the conditional `if (process.env.NODE_ENV === 'production')` for only performing redirections when in production and being hosted on your Heroku dyno as I'm not familiar with how to use HTTPS when doing local development on your own machine.

Note that `app` in the following code snippets was created using `const app = express();` and is therefore the `express()` object that is commonly included or imported in Node apps.

```javascript
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        // the code that performs redirection will go in this code block
    } else
        // if not in production, then skip trying to perform redirection
        return next();
});
```

## See if a redirect is needed

The `req.headers` object contains the information that we need for seeing if the user agent is using HTTPS or not. Namely, the `req.headers['x-forwarded-proto']` value will explicitly tell us if HTTPS is being used. We perform the check by using the conditional statement `if (req.headers['x-forwarded-proto'] !== 'https')`.

Should a redirect *not* be needed, we would simply skip trying to perform a redirect by calling `return next();` to move on to the next route in your app's execution logic.

```javascript
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https')
            // the instructions to perform redirection will be located here
        else
            // if https is already being used, we simply move on to the next phase in the app's logic cycle
            return next(); 
    } else
        return next();
});
```

## Performing a redirect

Having found out that there is a need for a redirection, we perform the actual redirection by using Express's `res.redirect` function.

We do that by writing the statement `return res.redirect('https://' + req.headers.host + req.url);`. The sole string argument of `res.redirect` is prefixed with our desired `https://` to redirect the user agent to the HTTPS version of our web app. The `req.headers.host` and `req.url` object values are appended to keep the same URL path that the user agent already made a request for.

```javascript
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https')
            // the statement for performing our redirection
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
});
```

## Use a custom domain name

If you have a custom domain name for your Heroku app, using the statement `return res.redirect(301, 'https://www.your-custom-domain.com');` would perform an HTTP 301 redirect that switches the user agent to your custom domain. This can be useful if users visit your web app using the default Heroku domain name, i.e., yourapp.herokuapp.com.

The object value `req.headers.host` is checked to see if we are at the intended host name or not.

```javascript
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        // perform host checking prior to https checking, by the way
        if (req.headers.host === 'your-app-name.herokuapp.com')
            // make express use your custom domain name instead of heroku's default
            return res.redirect(301, 'https://www.your-domain-name.com');
        if (req.headers['x-forwarded-proto'] !== 'https')
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
});
```

# The full source code

```javascript
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers.host === 'your-app.herokuapp.com')
            return res.redirect(301, 'https://www.your-custom-domain.com');
        if (req.headers['x-forwarded-proto'] !== 'https')
            return res.redirect('https://' + req.headers.host + req.url);
        else
            return next();
    } else
        return next();
});
```

You'll want to place the middleware code before most of your application logic starts executing, like, maybe, before your first custom `GET` or `POST` route that you create. Or even after you configure Express, succeeding the statements 

```javascript
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

as an example.

# Conclusion

I believe that I was quite descriptive and sufficient in showing you the process of how to force a Express.js app to use HTTPS. If there are any discrepancies between the information provided here in this tutorial and what's actually needed in your own endeavors, then I hope that at least there's enough information here to help you get started in the right direction of resolving your own issues.

---

### Footnotes

[^1]: [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)