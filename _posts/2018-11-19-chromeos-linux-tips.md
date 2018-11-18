---
layout: post
title:  "ChromeOS Linux Container (crostini) tips"
categories: crostini ChromeOS ChromeBook tips
---
The new Linux Containers available on some ChromeBooks are manna from heaven if you are developer. Having full blown Debian based distribution just a click away makes a supported ChromeBook a very usable development platform. And getting such a device can be cheap.

Here is a set of tips to help make things a little nicer.

## Viewing local servers.

Many systems these days come with a bundled local webserver to allow you test you changes without having to stage to a external host. BY default, these always want to listen on localhost (127.0.01). But hthe Linux container is a full-fledge VM and some localhost is, well, local. THi means that you can't use the "main" browser and point it to the localhost and have anything useful happen.

One solution is to install the browser of your choice into the VM and use that. But you have a perfectly good browser already installed, so why take up the space to install another.

In order to use the main browser, you need to coax the local webserver to listen on the external interface. To get the external interface, you can use the command `hostname -I` (note the capital I). 

As an example here is the command to make jekyll use the external interface.
~~~~
jekyll serve --server `hostname -I`
~~~~

To view the server, point the browser to
~~~~
http://penguin.linux.test:<port>
~~~~

ChromeOS points that synthetic domain to your Linux VM.
