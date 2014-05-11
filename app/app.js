import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bloggr-cli', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'bloggr-cli');

//var App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

export default App;
