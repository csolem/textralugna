'use strict';

angular
  .module('testApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'textAngular',
    'angularBootstrapNavTree',
    'angularLocalStorage'
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
      .otherwise({
        redirectTo: '/'
      });
  });
