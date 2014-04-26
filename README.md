# bloggr-client-cli

The EmberJS bloggr app implemented in the Ember-CLI environment

## Introduction

Thie project is a follow-on for the [Ember-SC](http://www.meetup.com/Ember-SC/) group's
[Hackfest at the Beach](http://www.meetup.com/Ember-SC/events/177022872/).

The purpose of this hack-fest is to start with the [Bloggr](https://github.com/oldfartdeveloper/bloggr-client)
project implemented by [Tilde](http://www.tilde.io/) developer Tom Dale.  We have built the app following along
the [video](https://www.youtube.com/watch?feature=player_detailpage&v=1QHrlFlaXdI).

Now the team wants to incorporate this 'completed' exercise into [Ember-CLI](https://github.com/stefanpenner/ember-cli).
This is the project to do this.

## How to Do the Exercise

### Preparation

Checkout `ember-cli`:

```bash
cd work # or whatever your project directory is.
git clone git@github.com:stefanpenner/ember-cli.git
cd ember-cli
npm link # make the files in ember-cli global.
```

Create a new project using the `ember` command:

```bash
ember new ../bloggr-client-cli # Build a new project in the same work directory as ember-cli
cd ../bloggr-client-cli
npm link ../ember-cli # symlink to the global
```

Fire Up the Ember server:

```bash
ember server
```

and use your favorite *recent* browser to http://localhost:4200

### Building the App

Remember that we've already built the app following the video.
Now we're going to build the same app but within the Ember/Broccoli framework.
This will illustrate two advantages:

1. When you save any source file, the current browser page automatically refreshes; you don't have to manually
   refresh it.  And it's *fast!*
1. Instead of long monolithic files, each piece of functionality goes into it's own file in the folder
   it "belongs to".  This makes large projects much easier to manage.

### The Steps

Here are the code "chunks" that the video had us work with:

#### Initial Setup

1.  Build the original [bloggr app](https://github.com/tildeio/bloggr-client).  You should have already done this.
    If you haven't, you can clone it now:

    ```
    git clone git@github.com:tildeio/bloggr-client.git
    ```

1.  Create the new version of the blogger app in the Ember-CLI framework.  This was described in the above section
    under the title *Preparation*.

1.  Include the reference to the Twitter *bootstrap* CSS package by adding this line:

    ```html
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css">
    ```

    to the header section of `app/index.html`.

1.  Include references to the date/time formatting and markdown editing libraries in `app/index.html`:

    ```html
    <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min.js"></script>
    <script src="assets/app.js"></script> <!-- place above two lines before this line -->
    ```

1.  Verify everything is working by looking at the brower and observing "Welcome to EmberJS".

#### Break down and organize the original two files, `index.html` and `js/app.js`, code chunk by code chunk:

We'll do this i

