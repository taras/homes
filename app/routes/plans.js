import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {name: 'Scarlet', bedrooms: 2, bathrooms: 2, size: 1000},
      {name: 'Amber', bedrooms: 1, bathrooms: 1, size: 600},
      {name: 'Lavender', bedrooms: 2, bathrooms: 1, size: 900}
    ];
  }
});