---
title: 'How to create your own Knowledge Panel / Entity Tracker on Google Sheets [5 Steps]'
description: 'Learn how to create a Knowledge Panel Tracker on Google Sheets in 5 simple steps. Automate entity tracking with a free Google Sheets Tracker.'
pubDate: 2024-12-02
updatedDate: 2025-05-07
heroImage: '../../../assets/uploads/blog/knowledge-panel-tracker-cover.png'
heroImageAlt: 'How to create your own Knowledge Panel / Entity Tracker on Google Sheets'
---

Some great tools such as Kalicube and Audits.com allow you to verify whether an entity exists or not in Google's Knowledge Graph. For some time, I was obsessed with regularly checking if the confidence score for some entities was increasing or decreasing.

This is mostly relevant for entities still being established – with a very low confidence score – and it's a way to track if Google started recognizing your name, brand and any other "thing". Something with a shallow confidence score (e.g. below ~50) may appear or disappear from Knowledge Panels (KP) or only appear in certain countries.

In other cases, entities might be fighting for the same space – people or companies with the same or similar names – and you want your brand to show consistently. Years ago, I had a client where a KP for another company (who used to have the same name) would always appear on the KP. It took some time to fix, and I knew the results were improving by looking at the confidence score.

If you want to learn how to build a Knowledge Panel (KP) or understand the mechanics behind one, check out my other post on [how to build a Knowledge Panel](/how-to-build-knowledge-panel). This blog post is only about how to automate entity tracking.

## Using Google Sheets to automatically track your confidence score

One option to track Google's confidence score for an entity (usually displayed as a KP) is to search for it daily and save it on a document. This is a simple, yet boring task, easy to forget on a busy day.

With the help of an LLM, I've built a Knowledge Panel Google Sheets Tracker, where you can add your entity and once a day it'll automatically check it for you and add it to your spreadsheet. No manual work required.

Here's how to do it:

### 1. Copy my sheet with App Scripts code

All you need to do is copy the Knowledge Panel Tracker Sheet and add the entities you want to track in column I. You can add one or several queries, one per cell. The Python code that runs daily is already in this document, inside Extensions > App Script.

### 2. Create your API key (free)

To create your API key, you need to go to Google Cloud and generate your own API key. You might be asked for billing information but I managed to create an API key without adding these details. Go to Credentials > Create Credentials > API key.

These API keys can be used for anything inside Google Cloud and some APIs incur costs, so make sure to limit access to restrict the key to the Knowledge Graph Search API – and don't share your API key!

Just to be safe, limit your API key to only work on "Knowledge Graph Search API".

Now you return to your sheet, open Extensions > App Scripts and place your API key in the empty field.

### 3. Do a once-off check

You want to check once to make sure your script is working. Add as many queries as you want (e.g. name, event, book, thing) in column J. Return to App Scripts and click on "Run". You'll be asked for authorization to run an external script – confirm the authorization. This will run a one-off check of your script to make sure it's working. You won't need to authorize this again.

### 4. Create a trigger

The next step is to create a trigger that will regularly run the script for you. You can choose to run this at any interval, from minutes to monthly. I've selected to run this daily, so once a day, at the specifically selected time, it'll run the script and update the sheet.

You can copy the format below and choose the best trigger time under "Select time of the day". The time doesn't really matter, but if you're anxious to see it in action, pick the next starting hour so you can see results within minutes.

### 5. Add entities to track

All that's left to do is list the queries you'd like to track. I've put this in a separate column so it's easier to manage. If you add or remove queries from the list, the next time it's triggered, it'll only include the queries listed. For instance, Gus Pelogia's current confidence score is 705 (07 May 2025) vs 348 (28 Nov 2024).

## Conclusion

This mini-app is just another example of what can be done with help from LLMs. I don't know how to code much, yet I managed to materialize ideas from paper to reality. All this app does is track something that's already out there. If you want to learn how to build a Knowledge Panel or expand yours, there's still tons of work to do.

If something doesn't work as expected, drop me a line on [LinkedIn](https://www.linkedin.com/in/gpelogia/) and I'll try to help you. Happy tracking!
