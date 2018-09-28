---
layout: post
title: A consideration on URL encoding when posting a tweet on the Twitter platform
---

This essay shows you how to have URL encoded tweets when using the Twitter API.

When Twitter API user agents or clients request for a tweet to be posted on the Twitter platform, the Twitter API documentation specifies that tweets should be "[URL encoded as necessary](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update)."

If you send an API request to post a Tweet without accounting for the URL encoding that the Twitter platform will perform on your proposed tweet, then it's possible that the proposed tweet will become elongated and thus exceed the 280 character limit. That would cause the Twitter API server to send an API error in response, namely specifying that the proposed tweet exceeds the 280 character limit. To resolve this, we'll need an algorithm for solving the problem of maximizing the number of characters we can request the Twitter platform API server to accept, which is the object of this discussion.

We consider the following algorithm:

1. Encode the original tweet message string to be a URI encoded string.
2. Extract the first 280 characters of the new URI encoded string.
3. Using the shortened form of the encoded string, decode it from an encoded URI string into a non-encoded URI string.

To encode the string, we use the `encodeURIComponent` built-in JavaScript function. Then we use the `substr` string method to extract the first 280 characters of the encoded string. Then, to decode the encoded string, the `decodeURIComponent` built-in JavaScript function is used.

An implementation of the algorithm in JavaScript:

``` javascript
const URIEncodedString = encodeURIComponent(original_tweet_message_string);
const shortenedURIEncodedString = URIEncodedString.substr(0, 280);
const decodedShortenedURIEncodedString = decodeURIComponent(shortenedURIEncodedString);
```

The `original_tweet_message_string` variable is the tweet status string that is being requested to be posted.

Note that the URI encoding may fail for whatever reason and that that would require you to handle the error in some way. That can be considered a disadvantage of this algorithm, or at least this JavaScript implementation of the algorithm.

Following the algorithm's execution, we now have a string that can confidently be sent to the Twitter API server. The server will perform its encoding on the string and the resulting proposed tweet status string will not exceed the 280 character restriction due to the preprocessing we performed.