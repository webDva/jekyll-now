---
layout: post
title: Gaining experience with WebSockets
---

Thanks to my unwavering devotion to achieving program success, I successfully migrated from socket.io to the more appropriate [ws](https://github.com/websockets/ws) WebSocket library.

I had to do a large rewrite of the game's source code, but now the game no longer has sporadic disconnection issues as the use of socket.io has been discontinued. But without the use of the socket.io technology, I may have not been able to achieve my present effect of a budding multiplayer game.

On the client side, the browser native WebSocket API is used in conjunction with the ws library.

While migrating to ws, I learned about JavaScript typed arrays and transmitting binary data over a network using such. This will improve the technical performance of the game.

Now I must move on to other tasks such as coming up with and implementing a viable game product idea. Following the realization of that minimum viable product, I will need to finally commence my planned marketing efforts which are detailed below from a public disclosure elsewhere that I'm sharing here partially for my reference:

> The bottom line up front is that I intend to manually obtain a high number of users by directly making contact and communicating with each potential user, one-by-one, like cold-calling.
>
> The high number of users objective is predicted to be satisfied by employing a high marketing operations tempo, that is, the employment of a high rate of prospecting. Like, a high number of cold-calls per day as this proposed marketing strategy was inspired by the sales process of traditional business organizations that conduct telemarketing operations.
>
> The currently available communications channels for outbound marketing communications only include Twitter, but more channels for manual user acquisition are being searched for and considered.
>
> These outbound marketing efforts should be supplemented by aggressive promotion on multiple content marketing channels, such as the Reddit platform and the plethora of video game community and distribution platforms that exist. The high difficulty of navigating the Reddit space has been mitigated with data and experience gained from previous marketing operations.
>
> That is the general gist of the upcoming marketing campaign and great courage and enthusiasm will be used for its success especially as I'm committed to my players' (i.e., users') success. I really believe in this product I'm making and it's my responsibility to ensure that my potential users know about its existence and actually use it. If I have to expend a lot of time and energy to communicate with them, then I will. Even to the detriment of the technical performance of the Initial Product Release.

My honor includes achieving success and victory in any dimension. Along with the essential courage and strength to facilitate success and victory.