---
title: >-
  A guide to Google Preferred Sources: How to get instant visibility into AI
  Mode
description: >-
  How Google Preferred Sources works, how to test its impact, and how to get
  users to select your site — including real data from testing across four
  domains.
pubDate: 2026-11-19
---
Like thousands of other websites, I implemented Preferred Sources. In the dark. I see banners everywhere. How many users select my website as a preferred source? No idea. Does it even do anything? I also didn’t know.\
\
Until Google shared the first wave of emails through Google Search Console showing how many users had selected my website as a preferred source. Then I got to poke a little further - and I found a goldmine.

This blog post is a guide to show you how Preferred Sources is the most direct optimization lever for a website and how you can test in front of your clients and make it work like magic.

## Why Preferred Sources Matter

Google Preferred Sources is a user-driven personalization feature in Google Search that lets you select your favorite websites. Initially, it was only for news publications - now it’s for every website.

In their own words “In AI Mode and AI Overviews, your content can be highlighted with a "preferred" badge for users who have selected your site as a preferred source”. I dare to say that every website is listed here, even SearchIRL SEO meetup website that has been live for three weeks, has no external links and only got traffic from social and its own newsletter.

![](../../../assets/uploads/blog/google-preferred-sources-guide/Screenshot%202026-11-17%20at%2023.40.12.png)

Although Google's message is a little vague ("your content *can* be highlighted"), Preferred Sources actually does more:

- URL usually becomes the first listed answer on the right-side panel
- Optimization is instant: add or remove a domain, the next page load has different results
- Works at a domain level, so you could have a CTA on your blog but influence commercial pages

If you're looking for Google's direct stats, they say "readers are twice as likely to click through to a website after selecting it as a Preferred Source." I tend to believe it because of the instant position bump a page gets on answers. That also means your GSC data is even more skewed, because some users — likely those who care a lot about your brand, enough to select you as a preferred source — will bring your average numbers higher.

## An honest view: I took a bet implementing Preferred Sources

When I first implemented Preferred Sources, it was a ticking-a-box exercise. I hoped this could make a difference but didn't have any data to prove it. Yes, implementing things is easier than ever, but it still takes time and every choice you make still means something else is out. I went by gut.

So I created at least a proxy: Google doesn't say anywhere if users are clicking on this feature, so I created a proxy. I can at least see how many users clicked on it and intended to add my website as a preferred source. Better than nothing.

Until October 2026, when SEOs started receiving an email via GSC listing how many users listed them as Preferred Sources. We got something. Crumbs, but still something. My takeaway: the conversion rate between intent to sign up and actually doing it — even though it was a small ask — was low. About a quarter of users became a preferred source.

Once I got my proxy and the actual sign up data, I thought there was something worth investigating here.

## Small scale testing: Does Google Preferred Sources Actually Make a Difference?

Yes, it does. I wouldn't be writing this blog post otherwise. I'll show you how to measure it yourself. In a world where rank tracking and SERP scraping is getting harder, how could you even track a personalized feature?

Keep in mind: this is personalization. Once you select a domain as a Preferred Source, it instantly starts ranking higher — for that single user. The reward is small, but happens instantly. So you prove your point: add a website as a Preferred Source and choose a query they're likely to rank for. Then, remove them from your list and run the query again.

![](../../../assets/uploads/blog/google-preferred-sources-guide/Screenshot%202026-11-17%20at%2023.35.37.png)

You can do this manually by opening every URL, semi-automatically by appending `&udm=50` in your URLs — like `https://www.google.ie/search?hl=en-IE&q=how+to+make+cold+brew+coffee&udm=50` — or you can use agentic browsing.

I asked Claude Desktop (Sonnet 5.5) with Claude's Chrome extension to navigate my browser, save every result and compare the personalized vs non-personalized result. You need to run it twice (adding/removing a website as a preferred source). I tried the non-personalized scrape with DataForSEO but the results were a bit odd, so I decided to run both on the browser.

There's no secret on the prompt. Something along the lines of:

**First Prompt:** Navigate on my logged-in Chrome tab and check the results for Google AI Mode. I'll give you a list of keywords/prompts and I need you to check if a specific domain appears as "Preferred Source."

**Second Prompt:** I only need the final results on screen and in a CSV, no need to inform every check on screen. Keep 10 seconds between each check. Domain is 3fe.com. Do one check first. List of keywords: [...]

## Google Preferred Sources: The Results

I wanted to prove directionally if Preferred Sources have any impact. I used SE Ranking to pick a group of 50 to 90 high and medium volume keywords the domain already ranked for and let Claude do the boring work. It's a bit unsettling to give an AI access to do things on your computer — to see your browser acting on its own, loading pages while your mouse and keyboard are doing something else. But that's another story.

Here are the results:

{% table %}
- Domain
- Market
- Preferred Source
- Queries
- Cited
- Nr. Pos 1
- Avg Position
---
- 3fe.com (local)
- Ireland
- ON
- 53
- 26 (0% increase)
- 19 (+216%)
- 4.58
---
- 3fe.com (local)
- Ireland
- OFF
- 26
- 6
- —
- 7.15
---
- irishtimes.com (news)
- Ireland
- ON
- 78
- 30 (+20%)
- 30 (+650%)
- 1
---
- irishtimes.com (news)
- Ireland
- OFF
- 25
- 4
- —
- 4.16
---
- searchengineland.com (SEO news)
- US
- ON
- 88
- 27 (+3.8%)
- 26 (+160%)
- 1.91
---
- searchengineland.com (SEO news)
- US
- OFF
- 26
- 10
- —
- 4.4
---
- ge.globo.com (sports)
- Brazil
- ON
- 50
- 30 (+7%)
- 29 (+70%)
- 1.33
---
- ge.globo.com (sports)
- Brazil
- OFF
- 28
- 17
- —
- 2.06
{% /table %}

### Test Limitations

I wanted to find out if adding a domain under preferred sources made any difference. It does. In a world where clicks are decreasing and we’ll increasingly depend of word-of-mouth word-of-ai, being recommended is highly relevant.

Of course, this is a limited test: I didn’t have competing domains as a preferred source, I picked keywords the domain already ranked for somewhere between page one and three on Google. As Google is playing catch and mouse with SERP scrapers, my IP got blocked a few times, so I had to wait and run the test again after a few minutes. A little frustrating to think AI was doing something, when in reality it’s waiting for an instruction.

![](../../../assets/uploads/blog/google-preferred-sources-guide/Screenshot%202026-11-17%20at%2023.43.11.png)

Even with Preferred Sources selected, sometimes the results change and a domain doesn’t always appear as an answer, similar to issues we’ve with prompt tracking.

I’m sure there are better and faster ways to do this, but I got enough evidence to see the value behind Preferred Sources and make it worth implementing.

## How to attract users to become a preferred source

Great, so I proved a point that Preferred Sources get you to the top of Google. How will you convince your audience to choose you?

Great, so I proved a point that Preferred Sources get you to the top of Google. How will you convince your audience to choose you? There are multiple fronts:\
\
**Long-Form Content Pages:** this is a natural place to implement this. It doesn’t take a user away from a conversion, like buying a product, and it’s a place where it is common to see CTAs. Plus, getting as long as it’s the same domain, you could benefit from information traffic to influence commercial pages results.\
\
**E-mail:** a user who subscribed to your newsletter and bothered to open it? This guy really likes you. Why not ask for an extra proof of love by creating a preferred source connection? It’s not exclusive, it’s just… preferred. Jokes aside, this is a great place to ask for a small action.&nbsp;

**Sticky Footer:** depending on your niche, your hunger for being preferred, you could add this as a sticky footer. It’s always visible, never on the way.

**Social Media:** for a personal brand like SEOs tend to have, why not ask on social media? If this becomes a big thing, you could even run ads - why not?\
\
[On the technical side](https://developers.google.com/search/docs/appearance/preferred-sources), Google suggests Standard JavaScript implementation, Advanced JavaScript implementation with custom design assets or Deeplink implementation.

## Conclusion: When AI Mode is standard, Preferred Sources will be big

Predictions are prone to fail, but I think — despite Google's stock plummeting partly due to the difficulties of monetizing AI answers — AI Mode will become the standard experience in 2027. Even if not, more users will continue to choose this experience, so the old marketing and SEO advice to "build a brand" just got a new tactic on the playbook.
