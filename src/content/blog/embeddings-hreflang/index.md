---
title: 'How to use embeddings to map hreflang tags at scale'
description: 'Learn how to use vector embeddings to map hreflang tags at scale.'
pubDate: 2026-02-22
heroImage: '../../../assets/uploads/blog/embeddings-hreflang-cover.jpg'
heroImageAlt: 'How to use embeddings to map hreflang tags at scale'
---

Last October, I had the pleasure of being on stage at Search 'n Stuff in Antalya, Turkey. It was a fantastic conference by the beach side, and most guests and attendees stayed at the same hotel, meaning you'd bump into an SEO at every corner.

I gave a talk about use cases for embeddings and proudly inspired a few SEO peers to create their own tools and use cases for embeddings and cosine similarity. This post dives into one of the use cases I presented at the conference: mapping hreflang tags at scale.

If you know what I'm talking about, skim directly to the Google Colab section of this blog post and get your tags mapped in an instant. If not, read the following (short) paragraphs, and you'll learn it in no time.

## What are embeddings and cosine similarity?

For those unfamiliar with the subject, I'll give a short introduction to two concepts: vector embeddings and cosine similarity. I'll tell you straight out of the bat that I'm not a data scientist, but merely an SEO finding his way to make better work. If I'm botching a concept, I apologise. However, the process works, and that's good enough for me.

Here are the concepts you need to learn:

- **Vector embeddings** capture the semantic meaning and relationships between words. The embeddings of a URL (all the text on this page) form a content corpus that machines can use to understand the content.
- **Cosine similarity** measures how close the vector embeddings from one page are to another page. Essentially, how similar one URL is to another.

As far as I know, [Mike King](https://ipullrank.com/vector-embeddings-is-all-you-need) is the one who popularised the vector embeddings concept in SEO. I learned it from him anyway. Once I started researching for this talk, I realised that cosine similarity works across languages as well.

You can [watch the full talk on YouTube](https://www.youtube.com/watch?v=41oZez-O3Mk).

## A hypothesis, a test

If hreflang tags are meant to tell search engines that two or more pages are equivalent, but meant for a different locale (another language and/or country), then it makes sense to use this combo to find pages that are equivalent, even if they're written in different languages.

Before I went on stage in Antalya, I ran multiple tests and the results looked good. I compared URLs for different locales on websites I manage, and the results were spot on. Now, to put it in concrete numbers, I compared the hreflang tags for a sample of pages on Semrush (the real hreflang tags live on these pages) vs the AI results: 89% match.

Not bad! I don't need to tell you that blindly trusting an AI output is a bad idea, so treat this mapping as a draft. The results are great, but a lot of things can go wrong between my tests and your tags, so always review the results before you publish the tags.

You already saved a ton of time by getting a draft. How about completing your work with finesse?

## How to collect embeddings

I've used Screaming Frog and the OpenAI API to get the embeddings for my pages. You'll need an API key with pre-paid credit to run a crawl with embeddings. $/£/€5 in credits will give you enough credit for thousands of URLs.

You don't need to be a computer wizard to get an API key. Just go to [OpenAI's API Platform](https://openai.com/api/), create an account and click on "Create an API Key".

Read [Screaming Frog's own guide](https://www.screamingfrog.co.uk/seo-spider/tutorials/how-to-identify-semantically-similar-pages-outliers/) on how to set this up in case you're not familiar with how to do this with Screaming Frog. Here's the short version if you want to give it a try:

Go to the top menu > Custom JavaScript > Add From Library > Extract Embeddings. All you need to do on Screaming Frog is find the prompt in the library and place your API key. Remember to tick the "Store HTML" box when doing this crawl or the embedding results will return empty.

## How to use this hreflang Google Colab notebook

Thanks to LLMs, vibe coding for SEO became much easier. This is what allows the [Hreflang Finder Google Colab Notebook](https://colab.research.google.com/drive/1I6UoFdZQE6iwcou9JXNWndImKQ_fekjQ) to work so well. Anyway, after collecting your embeddings with Screaming Frog, all you need is to run this colab (▶️) and upload a CSV file (you can export from Google Sheets or Excel) to this Google Colab.

Once the job is run, it'll automatically download the file to your computer.

Your CSV should contain these headers, case sensitive, in this order:

- Locale
- URL
- Embedding

The tool is taking en-US as the main version. If you don't have en-US, you can ask your LLM to rewrite the code (then paste it on a new Google Colab). The tool will ALWAYS find a match, even if it's a bad one. Here are the output columns it'll return:

- Mutual_top (filter to "TRUE" to find the best recommendations)
- Rank (1 means the best match)
- Cosine_similarity (the score, between 0-1, of how similar the pages are)

## Conclusions

In my talk at Search 'n Stuff, I presented multiple use cases for this combination of vector embeddings + cosine similarity. I'm sure there are more, and no doubt, there are more use cases you can come up with that are more specific to your company.
