---
title: 'Six simple tips for writing great SEO tickets'
description: 'Detailed tips for SEOs to write better tickets to developers and get more work done'
pubDate: 2024-01-27
updatedDate: 2024-02-06
heroImage: '../../../assets/uploads/blog/write-seo-dev-tickets-cover.png'
heroImageAlt: 'Six simple tips for writing great SEO tickets'
---

Since I joined Indeed in March 2022, I have written ~0.7 a ticket per working day. Most of these are requirements for engineers – new features, improvements, data science, bug fixes and more.

We know SEOs struggle with their technical requests being forgotten on the backlog. I'm lucky to get SEO tasks done every sprint, but if an engineer doesn't understand my task, they won't do it the way I want, or won't do it at all.

Over time, I got better at writing and estimating them. In April 2024, I'll speak about "How to write THE perfect SEO ticket for your devs". While I still prepare for this talk, here are six tips for writing beautiful tickets that will make your engineering team deliver better work for you.

## One problem, one ticket

Have you tried to put two puzzle pieces at the same time?

While we may think something is simple (can you just add this to the header?), the reality is way messier. Perhaps your CMS doesn't have a function to customize the meta robots file and you want to better control which pages can be crawled and indexed. The change may be small, but it requires several steps, even for this simple change.

In the best case scenario, this field must be created on the CMS and rendered on the HTML code. You probably also need to prepare lists of pages that will have a given meta robots information.

Developers can look at the whole picture, understand the puzzle, but will still add one piece at a time. You should split a ticket cramped with tons of requests into several smaller and more manageable pieces.

## Add context to your request

As SEO, we sometimes have complex topics very clear in our heads, but not everyone understands why or what we mean.

For instance, if we say Structured Data in SEO, we all know you mean adding Schema.org elements to a page. However, "Structured Data" without context might mean a lot of things – a CRM, for example, is full of structured data. An SQL database is also structured data.

Another example: SEOs know that internal links have an impact on increasing rankings, but others may think links "only" have a purpose for users to click on them. We know the win comes from "outside", as a result of an internal change. If you don't live in the SEO world, it's understandable why this makes no sense.

Your developers also need to know why they're doing something to find the best way to execute that task.

> Suggested ticket line: "Doing […] will allow search engines to […]"

## Describe the work to be done

Think how IKEA makes manuals and pieces that are almost fool-proof.

Give clear and specific instructions on what you need to do and how you should do it. Over time, you will learn where you need more clarity and you will start thinking ahead to deliver the best ticket possible. Provide examples, screenshots, create mockups on your browser.

To stick with structured data: show exactly where each element will come from. If you need a list of fields/data to appear in a report, list every field. If another section is standard to every page or only exists on the backend (e.g. SameAs doesn't necessarily appear on the page), make it clear.

Need to update a long list of title tags? Give the current and new title tags, and any other relevant hooks, like the URL. In my case, my engineers also need the content ID of a page, not something I'd have known ahead.

Do you describe issues that can only be found inside an SEO tool? Give them access to the tool or to exported files.

> Suggested ticket line: "This ticket is completed when […]"

## Describe the expected impact

Is there a way to measure the impact of this activity? This doesn't necessarily mean traffic or conversions, but tasks should have a meaning and some sort of impact.

It could be a content change to make sure page elements render correctly on mobile or appear on the raw source code. A CMS improvement that will prevent human error. Fixing 404s to avoid user frustration. Adding hreflang tags so Google and Bing can find the right page for each country.

The impact is the motivation behind the task. Giving a relevant reason allows a developer to find a better solution, sometimes beyond your initial requirements.

> Suggested ticket line: "This will save us […]" or "This allows search engines to […]"

## Organize your task dependencies

Does another ticket need to be completed for this one to be started? Are they part of a wider initiative?

Use Epics (on JIRA) or equivalent to add them to a project. You turn a lot of loose tasks into semi-structured data. Tickets can also have dependencies added between them.

Your developers handle more than just your technical SEO requests. They work with various teams, each using their own lingo. The more organized your tickets are, the better for them to know what to take next (or what they can safely ignore).

Aim to create dependencies and tickets to EPICs as soon as you create them. Even better if these tickets are part of an SEO roadmap they are familiar with. This builds trust and will make your SEO efforts a lot more effective.

## Don't fix it, just yet

Have you ever spotted an issue, panicked and manually fixed it straight away? Let's pretend a group of 50 new content pages were imported to your blog, but all H2s were published as H3s. Annoying, I know.

You have two options:

1. Inform the developer but fix them manually, which takes time, it's boring, but it's in your hands. You can get it done by the end of the week if you power through it.
2. Raise a ticket explaining how the headers are incorrect. It'd take two weeks until they look at this request on the next sprint.

The first option may give you a sense of fulfillment – you saw a problem and fixed it quickly. However, it doesn't let your developers see what caused the problem in the first place.

If you can afford to wait for them to fix it, there is a higher chance of the same issue not happening again. At least leave some examples with issues so they have an opportunity to troubleshoot what went wrong.

> Suggested ticket line: "Here are some examples where […] hasn't been fixed yet."

## Ticket example: fixing hreflang tags

Alex Galinos, Head Of SEO & SEO Product Manager at hoppa, left a comment on a recent post I made showing a great ticket example. It details many of my tips above, such as giving context, examples and exactly what has to be changed.

## Tips from other SEOs

This blog post was originally a LinkedIn post that got some good attention. There was plenty of good advice from other SEOs in the comments that are worth reading as well.

> Showing an actual User Story example of how I personally go about such things. Writing efficient, well-structured, clear SEO tickets is an art and science on its own.
>
> — Alex Galinos, Head Of SEO & SEO Product Manager at hoppa

> I learned during my time as interim PO and of course SEO PM that context goes a long way. Offering to join refinements is also an option to be available for any outstanding questions.
>
> — Vanda Pokecz, SEO Team Lead at Ladenzeile GmbH

> Whenever possible, include screenshots, diagrams, or examples to visually explain your requirements and make them more digestible.
>
> — Ivan Dragovic, SEO Specialist at Holistic Digital Solutions

> Add screen recordings to my tickets on exactly what needs to be done.
>
> — Shri Vidhya, SEO Manager at Spiceworks Ziff Davis

> Including "negative" requests – details that might be part of the dev solution but I know in advance that will lead to an SEO problem, so we discuss it before it goes ahead.
>
> — Nélia Silva, SEO Lead at Sonae MC
