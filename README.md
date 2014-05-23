# bloggr-cli

The EmberJS bloggr app implemented in the Ember-CLI environment.

## Introduction

Thie project is for the [Ember-SC](http://www.meetup.com/Ember-SC/) group's
[Hackfest at the Beach](http://www.meetup.com/Ember-SC/events/177022872/).

The purpose of this hack-fest is to start with the [Bloggr](https://github.com/oldfartdeveloper/bloggr-client)
project implemented by [Tilde](http://www.tilde.io/) developer Tom Dale.  We have built the app following along
the [video](https://www.youtube.com/watch?feature=player_detailpage&v=1QHrlFlaXdI).

Furthermore the team has incorporated this 'completed' exercise into [Ember-CLI](https://github.com/stefanpenner/ember-cli).
Presently [bloggr](https://github.com/Ember-SC/bloggr-cli) now uses the Ember **model** and **fixtures** to
set up a client-only local store.

At this time, we're now about to build the web backend in **Node.js**.

## How to Do the Exercise

### Preparation

1.  Open a command line window and go to the directory where you keep your software projects.
    Get a recent revision of `ember-cli` as follows.  In a terminal in the folder where you build your javascript
    projects:
    
    ```bash
    git clone git@github.com:stefanpenner/ember-cli.git
    cd ember-cli
    ```
    
    This exercise assumes that you have downloaded version 0.0.28.

1.  Create a new project using the `ember` command:

    ```bash
    ember new ../bloggr-cli # Build a new project in the same work directory as ember-cli
    cd ../bloggr-cli
    npm link ../ember-cli # symlink to the global
    ```

1.  Fire Up the Ember server:

    ```bash
    ember server
    ```

    and use your favorite *recent* browser to [http://localhost:4200](http://localhost:4200).  You should see "Welcome to Ember.js".

#### I Just Want to Run the Completed Application

1.  Be sure you've installed `ember-cli` as described above.

1.  `cd` into your folder where you do your projects, then:

    ```bash
    git clone git@github.com:Ember-SC/bloggr-cli.git
    cd bloggr-cli
    npm install ember-cli --save-dev
    ember init
    ember server
    ```

### Building the App

Remember that we've already built the app following the video.
Now we're going to build the same app but within the Ember/Broccoli framework.
This will illustrate two advantages:

1. When you save any source file, the current browser page automatically refreshes; you don't have to manually
   refresh it.  Try this: in `app/templates/application.hbs`:

   ```html
   <h2 id='title'>Welcome to Ember.js</h2>

   {{outlet}}
   ```

   to

   ```html
   <h2 id='title'>Welcome to Ember.js</h2>

   Here are some changes, dude!

   {{outlet}}
   ```

   See the browser on this page automatically update.

1. Instead of long monolithic files, each piece of functionality goes into it's own file in the folder
   it "belongs to".  This makes large projects much easier to manage.  We'll see this as we proceed.

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

1.  Verify everything is working by looking at the brower and observing "Welcome to EmberJS".  The new font should
    be larger because of the *twitter bootstrap* formatting.

#### Break down and organize the original two files, `index.html` and `js/app.js`, code chunk by code chunk:

We'll do this in the same steps that Tom Dale's video did:

1.  Replace the "Welcome to Ember.JS" with the menu bar HTML.  In `app/templates/application.hbs` replace

    ```html
    <h2 id='title'>Welcome to Ember.js</h2>

    {{outlet}}
    ```

    with

    ```html
    <div class="navbar">
        <div class="navbar-inner">
            <a class="brand" href="#">Bloggr</a>
            <ul class="nav">
                <li><a link="#">Posts</a></li>
                <li><a link="#">About</a></li>
            </ul>
        </div>
    </div>

    {{outlet}}
    ```

    You should see the nicely rendered menu bar for "Bloggr", "Posts", and "About".

1.  Build the 'About' section.

    In the `app/router.js` file, insert the 'about' route
    into the `Router.map` function:

    ```javascript
    Router.map(function() {
        this.resource('about');  <!-- INSERTED LINE HERE -->
    });
    ```

    Create a new template, `app/templates/about.hbs` with the following contents:

    ```html
    <div class='about'>
        <p>Yehuda Katz is a member of the <a href="http://emberjs.com">Ember.js</a>, <a href="http://rubyonrails.org">Ruby
            on Rails</a>
            and <a href="http://www.jquery.com">jQuery</a> Core Teams; he spends his daytime hours at the startup he
            founded,
            <a href="http://www.tilde.io">Tilde Inc.</a>.</p>

        <p>Yehuda is co-author of best-selling <a href="http://affiliate.manning.com/idevaffiliate.php?id=485_176">jQuery in
            Action</a> and
            <a href="http://affiliate.manning.com/idevaffiliate.php?id=485_145">Rails 3 in Action</a>.</p>

        <p>He spends most of his time hacking on open source—his main projects, along with others, like <a
                href="https://github.com/wycats/thor">Thor</a>,
            <a href="http://www.handlebarsjs.com">Handlebars</a> and <a href="https://github.com/carlhuda/janus">Janus</a>—or
            traveling the world doing evangelism work.</p>

        <p>He can be found on Twitter as <a href="http://www.twitter.com/wycats">@wycats</a>.</p>
    </div>

    <div class='about'>
        <p>My name is Tom Dale. I helped create <a href="http://www.emberjs.com/">Ember.js</a>, a JavaScript framework that
            brings sanity to the web.</p>

        <p>In October of 2011, I co-founded <a href="http://www.tilde.io">Tilde</a> with Yehuda Katz, Leah Silber and Carl
            Lerche.</p>

        <p>In my spare time I run a cash-for-beer exchange program at many local San Francisco dive bars.</p>
    </div>
    ```
    Now, when you browse [localhost:4200/about](http://localhost:4200/about), you will see the about contents.

## Continuing on Your Own

At this point, continue with the exercise on your own.  If you get into trouble, this GitHub project
has all of the code required to convert the `bloggr` to the Ember-CLI format; see the
section "I Just Want to Run the Completed Application" above.
