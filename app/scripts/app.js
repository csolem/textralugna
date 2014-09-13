/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/editor', 'directives/uirichtexteditor', 'directives/uirichtexteditortoolbar']/*deps*/, function (angular, MainCtrl, AboutCtrl, EditorCtrl, UirichtexteditorDirective, UirichtexteditortoolbarDirective)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name textralungaApp
   * @description
   * # textralungaApp
   *
   * Main module of the application.
   */
  return angular
    .module('textralungaApp', ['textralungaApp.controllers.MainCtrl',
'textralungaApp.controllers.AboutCtrl',
'textralungaApp.controllers.EditorCtrl',
'textralungaApp.directives.Uirichtexteditor',
'textralungaApp.directives.Uirichtexteditortoolbar',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/editor.html',
          controller: 'EditorCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/editor', {
          templateUrl: 'views/editor.html',
          controller: 'EditorCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
