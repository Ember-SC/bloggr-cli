import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = false;

var App = Ember.Application.create({
  modulePrefix: 'bloggr-cli', // TODO: loaded via config
  Resolver: Resolver
});
App.ApplicationAdapter = DS.FixtureAdapter;

loadInitializers(App, 'bloggr-cli');

export default App;
