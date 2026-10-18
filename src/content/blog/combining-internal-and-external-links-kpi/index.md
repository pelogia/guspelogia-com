---
title: 'Combining the power of internal and external links to boost revenue [Template included]'
description: 'A template for combining internal link score and backlink data to find which pages deserve a traffic and revenue boost.'
pubDate: 2021-11-01
updatedDate: 2023-08-20
heroImage: '../../../assets/uploads/blog/combining-internal-and-external-links-kpi-cover.png'
heroImageAlt: 'Combining the power of internal and external links to boost revenue'
---

This post + template will show you, step by step, a way to use both internal and external links to improve PageRank to the most important pages on your website, helping you to increase your leads and sales.

We all know the importance of internal links for SEO.

Same for external links, which often have teams dedicated just to acquiring them. It came to me that there's a simple way to combine the value we already have from these two essential SEO elements to boost traffic and leads to your most important pages.

The basic idea behind this post is to map the pages that can bring you the best results you need by looking at:

### High DR vs High Internal Link Score = Boost Revenue Pages

Earning links to your product pages is arguably harder than content pages. Digital PR is a great way to earn good links in volume, but these pages are not the ones you need to rank. One common way to improve the link value to your commercial pages is to link from these URLs back to your money URLs, using commercially relevant anchors.

On the other hand, internal links help Google to understand which pages one sees as the most relevant on their website. A page with fewer internal links is deemed as less important by search engines and by website owners as well, even though sometimes they're not aware of it.

So far, nothing from another world – you probably read this over and over again.

Now, how about you combine the internal link score from your favourite crawler with the most linked pages from your backlink tool?

This works with Ahrefs, Semrush, Screaming Frog or Sitebulb – you name it. For this template, I used Link Score from Screaming Frog. It gives a value from 0-100 and they describe it as "an internal PageRank calculation". You can use internal links or unique internal links instead. For backlinks, I took Ahrefs.

This is intended to be used as a mapping exercise and has caveats – some pages won't be relevant content-wise or can't be linked for various reasons. Some pages don't bring leads right now but should in the future. The idea is to find which pages have the highest potential on both fronts and make an informed decision.

The template was built using standard exports from:

- Screaming Frog (Internal HTML Tab Export + Crawl Analysis)
- Ahrefs (Best by Links + HTTP Code 200)
- Google Analytics (Landing Pages + Goal)

### [Link Score vs Page Importance Template (Google Sheets)](https://docs.google.com/spreadsheets/d/1_XPGg8J-7HXkLOuYj_YZW_a6aLdwqhm7O3n-uyYLG8k/edit#gid=0)

You don't need to clean any data from the sheets, the standard exports from each tool match the columns as they are, but you're free to clean the sources and update the vlookups. To make the vlookup work properly, there's a hidden sheet called Ahrefs(Clean) but it's filled automatically.

Below is my personal rationale to decide if a page deserves a boost or not. This will vary depending on each company, how big the website is, goals, etc.

- Root Domains (Below 30) and Trials (Over 10) = Needs External Links
- Link Score (Below 30) and Trials (Over 10) = Needs Internal Links
- Root Domains (Over 50), Link Score (Over 30) and Trials (0) = Boost Another Page

Ps: I'm aware that you could also just connect all of this data directly on Screaming Frog using the Ahrefs and Google Analytics APIs and make one export, but this sheet cleans a lot of the unnecessary information. If you use software that doesn't have API access via Screaming Frog (e.g. if your leads are not on Google Analytics), you can also use this template by adjusting a few vlookups.

I hope you find this template useful and spot some underutilized pages on your website!
