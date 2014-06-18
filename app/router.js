import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HomesENV.locationType
});

Router.map(function() {
  this.resource('plans');
});

export default Router;
