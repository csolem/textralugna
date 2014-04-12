'use strict';

angular
  .module('testApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'textAngular',
    'angularBootstrapNavTree'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/editor', {
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl'
      })
      .when('/tree', {
        templateUrl: 'views/tree.html',
        controller: 'TreeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
