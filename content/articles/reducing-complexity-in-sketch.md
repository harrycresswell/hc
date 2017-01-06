---
date: "2016-04-03"
title: "Reducing Complexity in Sketch"
author: "Harry Cresswell"
description: "Working on giant web apps in bloated sketch files can get tiresome. Here are my tips to make the process more managable."
slug: ""
tags: ["sketch3", "Shopify", "design"]
---

You’ll find this post in your `_posts` directory. **Go ahead and edit it and re-build the site to** see your changes. The best way to rebuild the site is to run `gulp`, which launches a web server and auto-regenerates your site when a file is updated.<!--more-->


<pre>
<code class="language-css">
{{<highlight js>}}

var foo = "English men"
var bar = "bar"

function getJoke(foo, bar) {
    return
        "two " + foo + " walk into a " + bar
}

{{</highlight>}}
</code>
</pre>


Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

## Structured documents

Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a `#` to create headings. Multiple `##` in a row denote smaller heading sizes.

## This is a second-tier heading

You can use  one `#` all the way up to `######` six for different heading sizes.

### This is a third-tier heading

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs](jekyll-docs) for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo](jekyll-gh). If you have questions, you can ask them on [Jekyll Talk](jekyll-talk).

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
