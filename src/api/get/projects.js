var db = require('../db');

module.exports = {
  path: '/projects',
  template: {
    projects: function(params, query, body) {
      return db.projects;
    },
  },
};