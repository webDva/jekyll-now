---
layout: post
title: A recommendation on the use of _blank
---

Guidance for developers who are interested in a wee bit of User Experience (UX) crafting.

# Background

The `target` attribute for the `<a>` HTML element/tag enables developers to control how links are opened in browsers. There are two values for this attribute that are of concern to us, `_self` and `_blank`.

When no value is supplied to the `target` attribute, then `_self` will be the value used as it is the default value. Its use instructs the user's browser to open the `<a>` link in the current tab.

A visual example of the `_self` value being used as the default value:

```html
<a href="/arbitrary-url">arbitrary text</a>
```

In contrast, the `_blank` value instructs the user's browser to open the `<a>` link in a new browser tab rather than the current one.

```html
<a href="/arbitrary-url" target="_blank">arbitrary text</a>
```

# Recommendation

It has been determined that it is highly unlikely that the use of the `_blank` value for the `target` attribute is warranted when using the `<a>` HTML tag. You can then suppose that during nine times out of ten times, the use of the `_blank` value is unwarranted.

The reason for this determination is that the use of the default value `_self` provides for an acceptable user experience as it enables the user to have the option to open `<a>` links how they please, given that users have modern browser technology which makes possible such a means of having the option to open `<a>` links according to a preference or circumstance.

# Use case examples

## An unwarranted use example

When there exists extremely little content on the current page of a website, then it is highly likely that the use of the `_blank` value for the `target` attribute is unwarranted. An introductory landing page that is solely for introducing a yet-to-be available product or service is one such example.

## A warranted use example

As an example of when it is appropriate to use the `_blank` value for the `target` attribute, I have a [video game](https://webdva.itch.io/pantsu-versus-baka) that has a feedback form which allows the user to visit a new page, a Twitter profile.

![Feedback form](/assets/images/underscore_blank_example.PNG "<a> link that opens Twitter in a new tab")

Since it's an HTML5 video game, it is assumed or believed to be true that it would be very necessary to preserve the current state of the video game such as by not having the tab which contains the state be destroyed with the use of an `<a>` HTML tag link. So, the use of the `_blank` value for the `target` attribute here in this situation is preferred and acceptable. When the user clicks on the link that leads to the Twitter profile, a new browser tab is opened rather than the current one being used which contains the current video game state.

# Inspiration

You have a lot of influence and power as a developer. Be concerned about the experience that you provide to your users and have empathy for your users.