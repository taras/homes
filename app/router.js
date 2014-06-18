import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HomesENV.locationType
});

Router.map(function() {
  this.resource('plans');
  this.resource('plan', {path: 'plans/:name'});
});

export default Router;
