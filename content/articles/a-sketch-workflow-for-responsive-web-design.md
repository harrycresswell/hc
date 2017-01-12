+++
Description = ""
Author = "Harry Cresswell"
title = "A Sketch workflow for responsive webdesign – part 1"
date = "2016-10-26T21:34:41+01:00"
slug = ""

+++

In the first part of this article, i’m going to walk you through the Sketch workflow i’m currently using for all my responsive web design projects.

<!--more-->

This isn’t a design tutorial but more of a primer which will help you get a responsive web design project set up in Sketch ready for wireframing your designs.

We’ll also look at using Invision Sync to prepare our project for team collaboration, sharing with clients and collecting feedback (which we will cover in part 2).

I’ve spent some time fine tuning this workflow, but like most things I’m sure it has a lot of room for improvement.

Needless to say I hope you find this helpful and are able to take things from it to help your own workflow.


## Why use Sketch

Enough has been written about Sketch over the past few years, it needs no real introduction and i won’t go into too much detail here.

In my opinion it’s the leading tool right now for designing both mobile and web interfaces. Whilst new tools are coming through thick and fast, there are a few main reasons why it remains my number one choice:

- The Sketch team regularly update the software, they go far and beyond to understand trends and listen to their users.  
- The file sizes are super lightweight. Documents are quick and easy to work with even at large sizes. Working on big projects with multiple screens is a breeze and can be handled all from one document.
- Smart resizing symbols makes responsive design a whole lot easier.
- Developer community and plugin integration. If it can’t be done natively, someone has probably already made a plugin for it.
- Compatibility with other UX prototyping tools.

If you don’t have a copy already you can either [download a free trial of Sketch] or buy the software for $99.


## Why use Invision

Like Sketch, Invision has started to dominate as a go-to tool. Where Sketch handles design, Invision masters team collaboration, collecting feedback (from your team and clients) about your designs, and basic prototyping – to help bring your static sketch files to life.

The release of Invision’s Inspect feature at the end of last year really made Invision an indispensable tool for prototyping and collaboration.

What Invision isn’t for is micro interactions. There are plenty of other tools out there which are much better for this sort of thing. Invision covers your project at a more general level.

Invision is a web application, so is accessibly via your browser. If you don’t have an account already [sign up for a free Invision account] now.

In this article we will only cover very basic Invision usage which follows. If you’re here for a more detailed run through of using Invision you can find that in [part 2 of this article].


## Setting up a project in Invision

By now you should have an Invision account. T

The only thing we need to do at this stage is create two projects. One for our Desktop application and one for mobile application. This is so we can sync the project with our Sketch project once we have it set up.

So log in to your Invision account and create the two new projects.

For the purpose of this article we will set up:

- Test project – Desktop v.1.0
- Test project – Mobile v.1.0

That’s it for now. We will come back to these projects later.

[VIDEO: Setting up a project in Invision]


## Setting up a better Sketch environment

Sketch is all ready to use straight out of the box. It’s probably one of the easiest learning curves of any design tool i’ve used – with than in mind I’ll skip the basics and jump right into the ways you can optimise Sketch to get the most out of the software from the start.

We’ll then look at some of Sketch’s key features which will help make designing responsive websites a walk in the park.

**Note: You will (I’m sure) pick up some of the basics as we move through the videos which compliment this article.**

### Plugins and plugin management

Plugins extend Sketch’s capabilities and make like a whole lot easier to work with. We’re going to download a few now to get Sketch set up right.


#### Sketch Toolbox

Sketch toolbox isn’t exactly a plugin but more of a plugin manager. It’s a useful way to search through any existing plugins and download them easily.

[Download Sketch Toolbox]


#### Pointgrid

Now we have Sketch Toolbox installed, let’s open it up and do a search for Pointgrid. Pointgrid helps you set up Artboards and a grid layout for a pain free responsive design workflow.

Click `Install` on the right hand side to get it installed.


#### Craft by Invision

Finally we need Craft. Craft is probably the plugin you will be using the most. It’s super powerful and does a lot of cool stuff:

	- Syncing screens with Invision.
	- Adding custom content. Images, text etc.
	- Duplicating unique content
	- Creating styles from your design

There are some great intro videos which come with the plugin so I won’t go over how to use it in great detail. I will cover some basics in the videos below like Syncing screens to Invision, adding content and creating styles.

[download Craft]


## A better Sketch Workflow

By this point you should have a copy of Sketch, an Invision account with two projects set up. You should also have Sketch toolbox to manage your plugins and two plugins installed – Craft and Pointgrid.  

Next we’ll look at how to use these tools to create a basic wireframe of our website. There are a few topics I’d like to cover in this part so I have created a short video for each part to compliment my writing. Hopefully this will make it nice and easy to follow along.


### Setting up Artboards in Sketch

When setting up our Artboards it’s a good idea to think mobile first. It’s good practice when designing websites to think of the simplest layout possible before you scale up to more complex ones.

Thinking this way will help you avoid any design fluff and complex layouts, which might inhibit the users experience on smaller devices.

First we will need to determine some custom breakpoints – in code, a breakpoint is quite literally the point at which the design breaks or changes based on the screen resolution. This will vary depending on your design and shouldn’t necessarily be determined by screen size.

But for the purpose of our example, we’ll use some commonly used breakpoints in order to set up our artboards with a grid which will work well in production.

The breakpoints we’ll be using are as follows:

`320px`, `678px`, `960px` and `1200px`

The video below shows how we can get this set up very easily using point grid.

[VIDEO: setting up artboards and grids using Pointgrid]


### Building a basic UI Kit in Sketch

Before you start designing anything it’s a good idea to create a basic UI kit.

At this stage it doesn’t have to be an exhaustive kit displaying every component which makes up your app (you can build that out as you design), but instead, defining a few rules simple will help you get your project off to a good start.


#### Making a font scale

A good place to start is with a basic font size scale.

This involves defining a scale of font sizes which you can use in your project. This is a technique used in front end development so it makes sense that we do the same when designing.

It will help us to limit the amount of font size variables we use and help with consistence in our design.


#### Setting Typography

Next we need to make some typography choices - for your headings and body copy. When wireframing I tend to just stick to one simple san serif font. The only styling at this point would be perhaps changing the weight of the titles to a bolder weight.

This will help you focus attention on structural patterns and layout, removing any temptation to design at greater fidelity.

We can then make these into text styles which we can use throughout our project.


#### Colour Palette

As we’re only working on the wireframe for our website we will stick to a greyscale colour palette. Removing colours from the equation will help you focus on the layout and structure of the site and not the fine details – this will come later.


#### list styles


#### forms


#### buttons



[VIDEO: Building a basic UI kit for wireframing]]


### Using effective screen names in Sketch

Naming your screens in Sketch doesn’t seem all that important at first, but when your project grows and you start working with a collaboration tool like Invision, you will start to thank yourself that you gave it some exit thought.

Having a solid descriptive screen naming system will help you stay organised, easily reference screens amongst your team and most importantly remember what each screen is showing.

If you want to read more on this I have written an entire article about [effective screen naming in Sketch].

[VIDEO: Effective screens naming examples ]


### Naming layers in Sketch

All Layers should be named in a way that makes sense.

Use a descriptive naming system which is easy to understand by your whole team.

Try not to tie layer names to specifically with design patterns. Instead try and create a reusable system where possible.

In an example you might use a blue container in multiple places throughout your site. You might consider making this a shared style and naming the layer ~Container-blue~. All instances of this particular container should then be called `Container-blue`.

[VIDEO: Effective layer naming]


### Using Symbols in Sketch

Symbols is a powerful feature in Sketch that allows you to re-use elements easily across your entire document.

You can turn any group of layers into a symbol. This group of layers will now become a re-useable pattern.

When you make a change to a symbol on the Symbols master page, the changes are applied to all other instances you might have of that symbol cross your artboards and pages.

To avoid getting in a twist, first focus on making only the smallest patterns into symbols. These will then become the re-usable chunks or UI components you can use in your design.

You might want to use a symbol for a button or a form field with placeholder text for example. However Sketch also gives you the power to nest symbols, so if you keep your symbols organised you might wish to use symbols for larger parts of UI such as your websites header or footer.

I haven’t made a video on symbols as I think the Sketch website already has [a very good primer on using symbols].

I would also suggest taking a look at the sections which cover [organising, resizing and nesting symbols]. This will help you get a good understanding of their flexibility.

### Exporting production ready assets in Sketch

This is an important part to cover. It’s one of the easiest places to go wrong, particularly for designers with little coding experience.

#### Icons and graphics
Where possible try and slice icons and graphics. then export in 3 ways. The first is `.svg`. This will give developers the most flexility, as `svg`’s are infinitely scaleable and can be manipulated with CSS. The browser support for `.svg` is also very good.

The second way is as `.png` at `@1x` resolution and the third is `.png` at `@2x` resolution.

When coding the application, the `.png`’s will act as fallbacks in case `.svg` isn’t supported by the browser.      The two resolutions will cover both regular and retina displays.

#### Images
Likewise images should also be exported as `@1x` and `@2x`. In either `.jpg` or `.png` format. This way the browser can request the right size image for the screen resolution.

You might also compress images before delivery. [tinypng] does a pretty good job of this with minimal loss of image quality.

[VIDEO: Exporting production ready assets]

## Wrapping things up

In this article we’ve looked at a simple Sketch workflow to speed up your responsive web design process. I’ve tried to cover the most important tools and hacks which i’ve been using successfully over the past year or so. There is still quite a bit of my Sketch set up I haven’t covered (mainly other plugins) but will have to save for another time.

In [the next part of the tutorial] we will take a closer look at  using Invision. We’ll cover adding team members to our project. Prototyping screens and making comments. We will also run through Invision’s Inspect feature which helps bridge the gap between design and development.
