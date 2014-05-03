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
