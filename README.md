# bloggr-cli

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
ember new ../bloggr-cli # Build a new project in the same work directory as ember-cli
cd ../bloggr-cli
npm link ../ember-cli # symlink to the global
```

Fire Up the Ember server:

```bash
ember server
```

and use your favorite *recent* browser to [http://localhost:4200](http://localhost:4200).  You should see "Welcome to Ember.js".

#### What if the Above Sequence Doesn't Work?

Sometimes the latest revision of Ember-CLI doesn't "work"; this is typically due to a transient `npm` package version incompatibility.
For this exercise you can use an older version of Ember-CLI.  In this case, recover by doing the following:

```bash
cd ..                       # or wherever your projects folder is
rm -rf ember-cli
git clone git@github.com:stefanpenner/ember-cli.git
cd ember-cli
git checkout -b origin/master db82f314192552f73977c633a99bc47ae99975aa   # A version of ember-cli that worked for the author
npm link
rm -rf ../bloggr-cli
ember new ../bloggr-cli
cd ../bloggr-cli
npm link ../ember-cli
ember server
```

Now you can continue with building the App in the next section.

#### I Just Want to Run the Completed Application

`cd` into your folder where you do your projects, then:

```bash
git clone git@github.com:Ember-SC/bloggr-cli.git
cd bloggr-cli
npm link ../ember-cli
npm install
bower install
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

At this point, continue with the exercise on your own.  If you get into trouble, the remainder of this document
has all of the new content required to convert the `bloggr` to the Ember-CLI format.  In addition, this project has the
entire working version.

### app/controllers/post.js

```javascript
export default Ember.ObjectController.extend({
    isEditing: false,

    edit: function() {
        this.set('isEditing', true);
    },

    doneEditing: function() {
        this.set('isEditing', false);
        this.get('store').commit();
    }
});
```

### app/helpers/format-date.js

```javascript
export default Ember.Handlebars.makeBoundHelper(function(date) {
    return moment(date).fromNow();
});
```

### app/helpers/format-markdown.js

```javascript
export default Ember.Handlebars.makeBoundHelper(function(input) {
    var showdown = new Showdown.converter();
    return new Handlebars.SafeString(showdown.makeHtml(input));
});
```

### app/routes/index.js

```javascript
export default Ember.Route.extend({});
```

### app/routes/post.js

```javascript
export default Ember.Route.extend({
    model: function(params) {
         return posts.findBy('id', params.post_id);
    }
});
```

### app/routes/posts.js

```javascript
export default Ember.Route.extend({

    model: function () {
        return [
            {
                id: '1',
                title: "Rails is Omakase",
                author: { name: "d2h" },
                date: new Date('12-27-2012'),
                excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
                body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
            },
            {
                id: '2',
                title: "The Parley Letter",
                author: { name: "d2h" },
                date: new Date('12-24-2012'),
                excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
                body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
            }
        ];
    }
});
```

### app/templates/post/-edit.hbs

```javascript
<p>{{input type="text" value=title}}</p>
<p>{{input type="text" value=excerpt}}</p>
<p>{{textarea value=body}}</p>
```

### app/templates/posts/index.hbs

```javascript
<p class="text-warning">Please select a post</p>
```

### app/templates/about.hbs

```javascript
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

### app/templates/application.hbs

```javascript
<div class="navbar">
    <div class="navbar-inner">
        <a class="brand" href="#">Bloggr</a>
        <ul class="nav">
            <li>{{#link-to 'posts'}}Posts{{/link-to}}</li>
            <li>{{#link-to 'about'}}About{{/link-to}}</li>
        </ul>
    </div>
</div>

{{outlet}}
```

### app/routes/post.js

```javascript
export default Ember.Route.extend({
    model: function(params) {
         return posts.findBy('id', params.post_id);
    }
});
```

### app/templates/posts.hbs

```javascript
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span3">
            <table class='table'>
                <thead>
                <tr><th>Recent Posts</th></tr>
                </thead>
                {{#each model}}
                    <tr><td>
                        {{#link-to 'post' this}}{{title}} <small class='muted'>by {{author.name}}</small>{{/link-to}}
                    </td></tr>
                {{/each}}
            </table>
        </div>
        <div class="span9">
            {{outlet}}
        </div>
    </div>
</div>
```

### app/app.js

```javascript
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bloggr-cli', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'bloggr-cli');

export default App;
```

### app/index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BloggerCli</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script>
      window.ENV = {{ENV}};
      document.write('<base href="' + ENV.rootURL + '" />');
    </script>

    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css">
    <link rel="stylesheet" href="assets/app.css">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min.js"></script>
    <script src="assets/app.js"></script>
  </head>
  <body>
    <script>
      window.BloggerCli = require('bloggr-cli/app')['default'].create(ENV.APP);
    </script>
  </body>
</html>
```

### app/router.js

```javascript
var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
    this.resource('posts', function(){
        this.resource('post', { path: ':post_id' });
    });
    this.resource('about');
});

export default Router;
```



## NOTES:

1.  I haven't been able to get the `posts` initialized in the `initializers` folder. So right now the `posts` *route* is returning them; it works "by magic".
