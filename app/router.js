import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HomesENV.locationType
});

Router.map(function() {
  this.resource('plans', function(){
    this.route('plan', {path: ':name'});
  });
});

export default Router;
