+++
tags = "Automation"
title = "Building a simple contact form for your static site with Zapier "
date = "2016-10-26T21:34:41+01:00"
slug = ""
Description = "A simple way to receive form data directly to your email using Zapier. No server side coding required."
Author = "Harry Cresswell"
featured_image = ""

+++

In this article we’re going to look at how you can use [Zapier](https://zapier.com/) to build a contact form for your static website.

We will be using Zapier's Webhooks to collect data submitted in our form, then set up an automated email (to ourselves) containing the data.

Pretty simple.

The cool thing about our form is that it doesn’t require any server side code, so can forget about all that php junk.

If your building a static website with a generator like Jekyll, Hugo, Middleman or even just in vanilla HTML, then this is a great solution to get a form working on your site with minimal fuss.

## Why Zapier

Zapier is an awesome tool which allows you to connect different apps in order to automate tasks. Using an automation tool like Zapier can save you a ton of time and make boring admin tasks a whole lot more fun.

Zapier recommends several workflows you can use to integrate different apps, but there’s really no limitation to what you can do with it. Your only limitation is what you can think up. I think that’s why I like it so much — you can really get creative with what you do with it.

### What are Webhooks

[Webhooks](https://zapier.com/zapbook/webhook/) are a powerful Zapier feature which collect `POST` or `JSON` data and send it to a URL. You can then process this data pretty much however you like.

If you are a developer you might be familiar with endpoints. Webhooks is pretty much the same thing.

### Why not use a static form provider instead

I initially looked into a few different ways to collect form data on static sites before deciding to go with Zapier. The main two I looked at were FormKeep and Formspree.

[FormKeep](https://formkeep.com/) looks like a great solution, but it comes at a serious price. The cheapest plan is _$59/month for 10 forms_. Formkeep might be worth considering for client projects but for a personal website I’d rather keep my costs to a minimum.

[Formspree](https://formspree.io/) is another great option. One i really quite like in fact. It’s free and does exactly what we are trying to achieve, it is probably even quicker to implement. Although Formspree and our Zapier method are very similar, in the end I choose to go with Zapier for a couple of reasons:

### Familiarity

I kept coming back to Zapier because it’s familiar. I already use Zapier for several other automations in my business — for social media, for my email list and a whole bunch of other stuff.  It’s also super quick and easy to set up automation and connect different apps.

### Flexibility

Zapier is the most flexible solution.

Although the form in this tutorial is a very simple one, If we wanted to add further steps to process our form data, then Zapier makes this super easy.

Say for example, we wanted to send the data via an email and then afterwards add the form submitters email address to our mailing list (pretty cool right?). We can do this easily with [multi-step Zaps](https://zapier.com/learn/getting-started-guide/multi-step-zaps/).

Let's say we wanted to send an automated email response, or send a “Getting started with the service” PDF when someone fills out our form. Zapier makes this possible too.

With Zapier our form can trigger any series of automated occurrences we want.

As cool as this stuff is, it isn’t something I’ll get into right now. You have my reasons for going with Zapier, i'm sure you can appreciate the potential power it can bring to a static contact form.

## Building the form

Before we jump into it, let's first take a moment to break down what we would like to do. Here are the steps:

- Build a simple HTML form for our static website.
- Collect the data submitted and store it in a URL using a Zapier Webhook.
- Use Zapier to automagically send us the data in an email when someone submits the form.
- Finally, redirect the user to a success page after they complete the form.

## Step 1: Writing the HTML

Let’s take a look at the HTML we’re going to use to build the form.

For the purpose of this tutorial our form will have two input fields — one for a name and one for an email address — and a button to submit the data.

{{<highlight html>}}

<form id="myForm" action="#">
  <input type="text" name="full-name" placeholder="What's your name?">
  <input type="email" name="email-address" placeholder="What's your email address?">
  <input type="submit" value="Submit" id="Form-submit"/>
</form>

{{</highlight>}}

Make sure you give your form a suitable `id`. We're using `id="myForm"` here to keep things nice and simple.
Make sure you add an `action` attribute, but leave it blank for now. We will come back to this later.

### Adding name attributes

This part is important. Remember is to assign a `name=""` attribute to all the form elements you want to collect data from. You can name them however you like but just make sure they are there.

This is what Zapier will look out for when it tries to grab the values inputed by the user. It's important you remember to add them or your form won't work.

### Add a button

Finally we'll add a very basic button with an `id` of `Form-submit`.

_Note: I've removed all class used to style the form for this tutorial, however you would probably want to add some classes to style your form elements_


## Step 2: Setting up Zapier collect the data

If you haven’t already got a Zapier account, then before you do anything else you will need to [sign up for a free account](https://zapier.com/).

### Create a new Zap


## Step 3: Automate an email response
## Step 4: Using Ajax to redirect user

## Wrapping up

Something I haven’t tackled in this article is form validation. This would require some extra Javascript and a bit of HTML markup.

## Resources

[https://zapier.com/blog/how-use-zapier-webhooks/]
[https://discuss.gohugo.io/t/is-it-possible-to-add-a-contact-form-to-a-site/1550]
[https://pjrvs.com/a/onboarding/]
[http://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript]
