+++
Author = "Harry Cresswell"
topics = ["design"]
tags = ["Sketch", "Design", "code"]
title = "A better technique for naming Artboards in Sketch"
date = "2016-10-26T21:34:41+01:00"
slug = "artboards-in-sketch"
Description = "If you're trying to design well organised, scaleable applications then you better make sure have a good Artboard naming technique."
featured_image = "naming-artboards-in-sketch-banner.png"
spot = "yellow"
+++

{{< img class="image-wrapper" src="naming-artboards-in-sketch-banner.png" caption="There's a better way.." >}}

<p class="message">Disclaimer: this article assumes you know your Artboards from your Text Styles. If you're looking for a primer on how to use Artboards, then I recommend checking out the <a href="https://www.sketchapp.com/learn/documentation/grouping/artboards/">Sketch Documentation</a> before reading this.. it will make a lot more sense!</p>

I think we can all agree Artboards are an essential part of any workflow.


What doesn’t seem to get much of a mention — in the Artboard conversation — is the best way to name your Artboards. And in particular, naming Artboards when designing large, scaleable applications.

In this article i’m going to look at why a good Artboard naming system is important and then run through the current workflow i’m using to name my Artboards.

Hopefully this will help you to improve your workflow and set you up for designing well organised, scaleable applications. It should also prevent a few headaches when you’re working on big projects as part of a team.

## The common mistake designers make

Before we dive into the technique, first lets look at a typical practice when naming Artboards.

What you will often see is designers using a single level numerical system. This number will usually corresponds to the particular flow the Artboard belongs to. You might see something along the lines of `1 – Sign Up` or `5 – Checkout`. It sort of makes sense.. but only at a very basic level. As soon as you start designing larger scale projects, you’re going to run into a few problems using this method.

## Why Artboard names matter

The are a 3 main reasons why I think it’s important to have a good Artboard naming system in place:

### 1. For your own sanity
If you’ve ever worked on a big project in Sketch with over 100 screens or so, you will know how much of a challenge it is to quickly find a specific screen in a particular flow. A simple system will help keep your Sketch file organised and easy to maintain.

Artboard names also help you to remember why you designed a particular Artboard and where it belongs in the flow of the website or application you are designing.

### 2. Communication and feedback
If someone in your team or even a client wants to discuss the design on a particular Artboard, then it will be a lot easier if they have a number to reference to Artboard in question.

Again, this will make you life a hell of a lot easier when it comes to finding that particular Artboard — if and when you need to go back and make some changes.

Does this sound familiar:

<blockquote>The primary button radius on one of the Artboards in the checkout flow is wrong.. can you update that?
<cite>Project manager</cite>
</blockquote>

<blockquote class="u-marginTop-m">Yeah sure, just let me know the Artboard number? <cite>Designer</cite>
</blockquote>

### 3. Scaleability
A good naming system will allow your project to scale without any major problems. If some time in the future you need to update the sequence by adding an Artboard into the flow, then you need a system which will prevent you from having to go back to re-name the sequence of every other Artboard in your entire document — all because you added a new one.


{{< img class="image-wrapper" src="naming-artboards-in-sketch-01.png" caption="There's a better way.." >}}


## A better way to name your screen
Ok so whats the solution? It’s very simple. You just need to use a 3 or 4 level sequence.

I’ve been using something like:

`1200.1.1.1 – Breakpoint - Flow – Stage – State`

After playing around with the idea on several projects I’ve found a 4 level numerical sequence followed by a more verbose written version of the name seems to work best and most importantly — is the easiest to understand.

## Understanding the system

The numeric values at the beginning will help you as the designer to quickly understand the Artboards content and stay organised. It can be used by you and your team as a quick way to reference the Artboard when discussing its contents.

A written version of the sequence will then follow the numbers. This will give you more contexts as to what the  Artboard is showing and where it belongs in the sequence. The idea is that we want anyone in your team to easily be able to understand a Artboard without having to consult the person who designed it each time — thats you of course!  

Let’s break the sequence down and take a look at the 4 different levels so you understand exactly what each level means:

{{< img class="image-wrapper" src="naming-artboards-in-sketch-02.png" caption="There's a better way.." >}}

### Level 1: Defining the screen resolution

The first number corresponds to the specific device or browser breakpoint if you’re design RWD.

In this example we are designing the layout up to a breakpoint of 1200px as it’s a desktop website.

If you prefer to use a more descriptive text based term, you could use ‘M. for Mobile’ or ‘D. for Desktop’, referring each time to a specific device.

{{< img class="image-wrapper" src="naming-artboards-in-sketch-03.png" caption="There's a better way.." >}}

### Level 2: Defining a particular flow

The second number in the sequence corresponds to the section or particular flow you are designing. It might be the Checkout flow for example.  Let’s use the number 2 for our Checkout flow as an example. We know from the sequence below we are looking at the Checkout flow at a breakpoint of 1200px.

`1200.2. - 1200px — Checkout`

Flows contain contain multiple Artboards these Artboards are the ‘Stages’. I’m getting a head of myself here — on to level 3…

{{< img class="image-wrapper" src="naming-artboards-in-sketch-04.png" caption="There's a better way.." >}}

### Level 3: Defining the Stage in a Flow

The third number corresponds to the stage in that particular flow. As I mentioned already, each Flow will have multiple Artboards.

For this example we are designing the Payment Details Stage of the Checkout Flow.

`1200.2.1. – 1200px — Checkout — Payment Details`

If we then wanted to design the stage for shipping details we would then go up one in the sequence. It would look something like this:

`1200.2.2. – Breakpoint — Checkout — Shipping Details`


{{< img class="image-wrapper" src="naming-artboards-in-sketch-05.png" caption="There's a better way.." >}}

### Level 4: Defining the state of stage
The forth and final number in the sequence corresponds to the different state of that particular stage.

You might perhaps want to design how the form error states look on the shipping details stage. Remember this isn’t a different stage but in fact a variation of the same stage so you wouldn’t want to create a new stage here but add a state.

The example here shows the Error state of some form inputs.

`1200.2.2.1 – 1200px — Checkout — Shipping Details — Form Error`

Of course, not all stages in a flow will have different states. If this is the case then the default number 1 can be used (i.e the first and only state).


## Wrapping up

Having a good descriptive screen naming system is crucial when designing larger applications. It will help keep your Sketch files manageable and easy to maintain and also allow you to communicate effectively with your team.

Be sure to choose a system which is flexible enough to allow for new screens to be added into the sequence at any point. This will prevent you from having to re-name all your screen.

Whatever system you choose to use, discuss the system with your entire team.

It should be quick and easy to understand what a screen contains and where it belongs just by looking at it’s number sequence.

Above all this will allow you to communicate any design decision you make effectively and with minimal fuss.

If you have any thoughts on this approach or ways to improve it, i’d love to hear from you.

You can tweet me [@harrycresswell](https://twitter.com/harrycresswell) or drop me an [email](mailto:studio@harrycresswell.com).
