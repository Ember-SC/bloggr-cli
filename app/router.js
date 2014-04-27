var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
    this.resource('posts');
    this.resource('about');
});

export default Router;
