var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
    this.resource('about');
    this.resource('posts', function(){
        this.resource('post', { path: ':post_id' });
    });
});

export default Router;
