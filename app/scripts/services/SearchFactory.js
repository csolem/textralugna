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
          title: "17. mai er en festdag, ikke en programmeringsdag"
        },
        {
          id: "1.234",
          type: "fact",
          title: "Fakta om 17. mai"
        },
        {
          id: "1.345",
          type: "image",
          title: "Hestesport",
          src: "http://gfx.nrk.no/front/2014/08/27/c=0,37,607,291;w=198;h=95;15909.jpg"
        }
      ];
      return searchResult;
    }
 

    // Public API here
    return {
      search: search
    }
  });
