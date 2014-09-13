define(['angular'], function (angular) {
  'use strict';

  angular.module('textralungaApp.controllers.EditorCtrl', [])
    .controller('EditorCtrl', function ($scope) {
      $scope.editorModel = '<p>Hello, World!</p>';
    });
});
