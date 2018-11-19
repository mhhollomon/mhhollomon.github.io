---
layout: post
title:  "My First Jekyll Post"
date:   2018-11-18 20:46:52 +0000
categories: jekyll update
---
Nothing to see here. Just a post I can use to play with the formatting.

### A heading

Just checking to be sure that markdown does its thing.

~~~~perl
#GFM block
if (this_works()) {
   $mark_happy = 1;
}
~~~~

{%highlight perl linenos%}
#liquid block
if (this_works()) {
   $mark_happy = 1;
}
{% endhighlight %}

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
