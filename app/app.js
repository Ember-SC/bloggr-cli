import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bloggr-client-cli', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'bloggr-client-cli');

export default App;
