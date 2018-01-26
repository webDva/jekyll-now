---
layout: post
title: "How to sustain this entrepreneurial campaign?"
summary: "Okay, what's gonna happen is me enduring this phase."
---

I got a lot of power and I must delicately use it.

I have to become my own great force. I have to change who I am to get what I want and need. And the process will be slow. And I know that the changes that I make will be small each time I attempt to change my mindset and behavior, because I recently discovered that you can make progress in anything. It will take a decade or even more to become the successful independent maker of technology that I want to become--**that I need to become**.

A maker that is resourceful, determined, and possesses a perfect success mindset.

I bought a domain, bakayoutube.com. I also had to pay for a dyno on Heroku in order to get HTTPS security. I believe and know that I'm walking a path like Elon Musk, I ponder, as I used his Paypal service to make those transactions. I too am taking great risks, on a smaller scale than his were financially, in order to realize my vision of introducing new commodities so that I may be rewarded.

# Uncertainty

I'm deciding on whether or not to go for a small exit. Actually, yes. I am going to go for a small exit since my revenue projections are oh so bleak.

The whole point of this entrepreneurial endeavor was to obtain a minimum sustainable income. I, being anxious, don't think that I have much runway left, so I may seek employment with an employer before my four month deadline of $1,000 revenue.

Although I am torn. I still don't know for certain, even if I believe that there's a high chance, that I won't be able to achieve a minimum sustainable income in time. I'm aware that what I believe shapes my reality.

*Do I believe that I won't obtain income that will sustain me?*

*Or do I believe that I should take the risk and delay having sustainable income?*

Could/should I do both where I label my current flagship product [Baka Youtube to MP3 Downloader](https://www.bakayoutube.com) as a "side-hustle" while I work a regular job for someone else? No, of course, because I don't have faith in the compassion ability of employers and we both come from different worlds, therefore being incompatible for each other.

I'm uncertain about how much money I would make. But that's part of being a leader, an entrepreneur. I would be exhibiting top CEO attributes if I could make a decision without having all the data that would make this an otherwise perfect system.

Honestly--one predictive mental model I have says that I will make $320 USD in four months. If such a case happens, then my response should be, in order to be hippity and optimistic, "we all gotta start somewhere, right?"

However, at this point, anything higher any than $0.01 USD (a penny!) seems impossible. Before I can have one thousand dollars, I'll need to strategically hunt for that one dollar, that $1 USD. Then I can move on to the next phase.

# Hip coder war story

I fixed an issue where Youtube videos with hash signs (#) in their name crashed the Baka Youtube downloader's Node.js server. I initially used URL parameters where the name of the Youtube video to be converted was sent in the URL string. Everything after the hash sign would get stripped off and browser clients would then be requesting for videos that didn't exist.

So, I decided to finally use JSON in the request body for the API endpoint communication logic.

As hip as I could make it.

# Problems with the Youtube downloader

Tried to ship a feature where long videos can be downloaded. It seems that in production the Heroku/Angular frontend doesn't even like timeouts higher than 45 seconds!

It turns out, that Heroku imposes a web request limit of 30 seconds. That forces me to implement a work-around solution where the Baka Youtube downloader's server has to offload jobs in a background task and make the user's browser poll and ask repeatedly for when long videos are ready to be downloaded. That's on my to do list.

# I don't always have to be happy and that's okay

I must create a trinity of three products so that I can diversify my efforts and investments. The second product shall be a conversational chatbot. I'll find a business model for this product to serve later after I complete its Initial Product Release (IPR) and Minimum Viable Product (MVP).

I'm an independent hacker with an intense moral courage and entrepreneurial spirit. I'm in this for the long haul as my honor compels me. And I'm not happy about having to apply for jobs that are just not good for me.