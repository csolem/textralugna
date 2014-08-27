'use strict';
/*
Simple dummy search factory,
*/
angular.module('testApp')
  .factory('SearchFactory', function () {

    var search = function search(query) {
      var searchResult = [
        {
          id: "1.123",
          type: "article",
          title: "17. mai er en festdag, ikke en programmeringsdag",
          published: "2005-05-03T00:04:00+02",
          version: 1163428374
        },
        {
          id: "1.234",
          type: "fact",
          title: "Fakta om 17. mai"
        },
        {
          id: "1.345",
          type: "image",
          title: "tux",
          src: "http://oi49.tinypic.com/2426i9s.jpg"
        }
      ];
      return searchResult;
    }
 

    // Public API here
    return {
      search: search
    }
  });
