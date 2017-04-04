+++
featured_image = ""
topics = ["design"]
tags = ["Sketch", "Design", "code"]
title = "An Artboard naming system for Responsive Web Design"
date = "2017-04-02T21:34:41+01:00"
slug = "artboards"
Description = "How to name your artboards for scaleable, maintainable Sketch projects"
Author = "Harry Cresswell"

+++

{{< img class="image-wrapper" src="naming-artboards-in-sketch-cover.jpg" >}}

<p class="intro">How do you name your Artboards?</p> <p class="intro">It's probably not something you get asked all too often or give much thought. Maybe, like me, your too busy nesting symbols and getting your head around Auto Layout.</p>

I don't suppose i've totally worked this one out, but I've arrived at a particular technique for naming Artboards in Sketch. I noticed not all that much has been written about the topic so I figured it was time to share my method. **The technique is best suited to Responsive Web Design (RWD)**. That being said, if your focus is on design for mobile the principles still remain the same and it should work just as well.

**I've used this method extensively for a year** or so now, having previously tried a few different techniques which didn't quite make the cut. After some trial and error I've arrived at a method which is rock solid. No problems so far.

If I can help you improve your workflow by sharing this technique then I've done what I set out to do. You'll be designing well organised, scaleable applications in no time. And likewise, prevent yourself a few headaches when you’re working on bigger projects or as part of a team.

Before I get into the technique, let's first look at why you might want to consider using a system to name your artboards in the first place.

## Maintainability

We're designers. We like to be organised.

Nobody wants to fire open a sketch file in 6 months time and find a mess of arbitrarily named Artboards. I for one don't. It pays to be organised, and that goes for your Artboards too.

We want to know exactly what state, in what stage, of what flow any given Artboard belongs to. We need a system that is quick to understand — by anyone in our team — and efficient in its implementation. No nonsense. Minimal fuss.

I'm sure we can all agree this:

[Sketch Overview of  well organised Artboards and Pages]

Is better than this:

[Sketch Overview of unorganised Artboards and Pages]

## Scalability

Does it scale? We're not talking about front end frameworks here (let's leave that for another one), we're trying to solve that problem you have when you need to add in an extra step (or stage) to a flow you created a while back. Does your system allow you to tak on an extra Artboard — anywhere in the sequence —, without you having to go through and rename the rest of your Artboards to keep the sequence in order.

[GIF showing how you can add in another Artboard into a sequence at any point]

## Communication

In most cases the design process tends to involve a few more people than just one designer.

Does the rest of our team understand what's going on in our Sketch file?

Ok, maybe they wont be poking around in Sketch but the problems will start to show when your prototyping in a tool like Invison. Unless your working on a side project, your team, your client or whoever will need to feedback on your designs. Yeah they can comment on Invision, but all too often you need a way to verbally discuss an Artboard.  Giving your team a quick and easy way to reference Artboards will make your life a lot easier, particularly as your project grows.  We like our team right? Let's keep them happy.

[ Screengrab of well organised Invision project]

Ok enough of the reasoning, i'm sure you get the idea by now. Let's look take a look at the system and explain how it works.

## How the system works

Ok, the basic principles.

### Use a 4 level numerical sequence

I'm using a 4 level numerical sequence followed by a description, where the purpose of the description is to explain the numerical sequence in a more verbose manor.


{{< img class="image-wrapper" src="naming-artboards-in-sketch-01.png" caption="4 level sequence" >}}


The four levels represent the Breakpoint, the flow, the stage and the state of our design.

I will come to exactly what these 4 levels represent a bit later, but first let's look at why we're using a code and a description.

### Use a code and a description

Using both a code and a description makes our artboards easy to understand and equally as easy to reference — and not just by us — by the whole of our team.

On it's own, the description (let's call it the 'Unique Identifying Description' or 'UID' for short) isn't exactly quick to reference, and it doesn't help us order our Artboards in any way, but it is still important as it accurately explains the contents of our Artboard.

By prefixing the UID with a numerical sequence, we now have a quick and easy reference code, if you like. By adding this code (let's call it the 'Unique Identifier Code' or 'UIC' for short) we now have a clear system for ordering our Artboards. This is particularly useful when we start using tools like Invision and you need to pin point a particular Artboard.

Now the UIC alone won't make much sense, it's not descriptive of the artboards contents. But add the two together and you have a quick shortcode (the UIC) used for reference purposes, and a more descriptive text version, (the UID), which helps us further identify the design on our Artboard.


{{< img class="image-wrapper" src="naming-artboards-in-sketch-02.png" caption="4 level sequence" >}}


Ok. So why use four levels in the sequence. Surely one level is enough? And what exactly does the Breakpoint, Flow, Stage and State represent.

Let's look at that now, it will help us understand why having four levels in the sequence is important.

### The Breakpoint

Breakpoint comes first. This is the screen resolution you are designing for, in case you didn't know. Think 1200px, 960px, 768px, 320px or if you prefer Desktop HD, Desktop, Tablet, Mobile etc. This should be the deciding factor that determines what Artboard size you choose for your design.

If you are design a responsive website you're design will most likely change at different screen sizes. We'll need a different Artboard to show how the design looks for each size.

Let's say our design isn't a mockup of the large desktop view (like in the example above), but in fact a regular desktop view or 960px. In this case we would change the breakpoint in our Artboard name to reflect that.

In the example below you can see the Breakpoint is 960. this stands for 960px or our desktop size. Suggesting the Artboard shows how our website will look on a Desktop browser.


{{< img class="image-wrapper" src="naming-artboards-in-sketch-03.png" caption="4 level sequence" >}}

### The Flow

Flow is second in the sequence. This is the particular flow you are designing. An obvious example would be the 'Checkout' flow. Think UX here. A flow is the journey a user takes around a site to complete a particular action. A flow will most likely consist of a number of pages or stages, if you like.

Ok, so you've got the hand of it now.

{{< img class="image-wrapper" src="naming-artboards-in-sketch-04.png" caption="4 level sequence" >}}

This tells us that the Artboard shows our design at a breakpoint of 960px (i.e desktop) and the design is part of the checkout flow. Which is the second flow in our website. Notice the second number in the sequence has now changed to 2.

### The Stage

Third in the sequence is the stage. The stage is an Artboard which represents a part or step within in a flow. If we think back to our example 'checkout' flow, a familiar stage in this flow might be 'payment details', as opposed to 'shipping details', or 'checkout complete'. These are all stages, which make up our 'checkout' flow.

Updating our example above might result in something like this:

{{< img class="image-wrapper" src="naming-artboards-in-sketch-05.png" caption="4 level sequence" >}}

This Artboard shows our design for the 'Payment Details stage' in the 'checkout flow' of our website. And this is how our design should look on a desktop monitor, or there abouts.


### The State

Last in the four level sequence is the state. States are used to show different versions of a stage in our flow. For example, you might need to design certain error states in a form. Perhaps a particular user action changes the look of a specific stage, and you need to show this in your design. A success notification would be a good example. Or if we think back to our example; when a user enters the incorrect card details. We need to design the error message.

Think of the state as the same as the stage, but the users action has modified the stage it in some way. So we can add a new Artboard into our sequence and use it to design this state.

Updating our example above would result in:

{{< img class="image-wrapper" src="naming-artboards-in-sketch-06.png" caption="4 level sequence" >}}

This tells us that 'Form error' is the second state we have designed this particular state in the flow (the payment details stage which is part of the checkout flow). In this case the first state was the normal page.

Side note: having said all this, I don't always use states. The reason being, I tend to work with a UI kit or front end framework, where the states have already been determined. If this is the case, (as you've probably noticed in the example) I will just leave a 1 on the end of the sequence. This suggests that the current Artboard is the first and only state.

In some other cases I use the last number in the sequence not for a state but as a quick and dirty way to fudge an extra Artboard half way through a sequence.

This happens quite a lot when you return to past projects and you need to add Artboard into the flow. It's hacky but it will prevent you from having to go through and re-jig all your other Artboard names to make your Artboard sequence run in order.

{{< img class="image-wrapper" src="naming-artboards-in-sketch-07.png" caption="4 level sequence" >}}

## Wrapping up

Ok, this technique might seem a little over the top for a small project, but if like me, you work on big on-going websites and web apps then then having an Artboard naming system is 100% the way to go. It will save your skin 10 times over.

Whatever system you choose to use, the most important thing is that the name you give your Artboards is descriptive of the design that is on it. That might sound obvious but i've seen some strange Artboards names before now, which give you no indication of what the design consists of.

Make sure it's quick and easy to understand the Artboard contents and where it belongs in the sequence. Be sure to discuss your system with your team, so that everyone understands it and can make use of it. Above all this will allow you to communicate any design decision you make effectively and with minimal fuss.

If you have any thoughts on this approach or ways to improve it, i’d love to hear from you. Likewise any questions I will do my best to answer.

Heres to a stress free time with Artboards in Sketch.  #artboardmaster
