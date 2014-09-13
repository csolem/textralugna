define(['angular', 'scribe-plugin-toolbar'], function (angular, scribePluginToolbar) {
  'use strict';

  /**
   * @ngdoc directive
   * @name textralungaApp.directive:uiRichTextEditorToolbar
   * @description
   * # uiRichTextEditorToolbar
   */
  angular.module('textralungaApp.directives.Uirichtexteditortoolbar', [])
    .directive('uiRichTextEditorToolbar', function () {
      return {
        restrict: 'E',
        require: '^uiRichTextEditor',
        link: function (scope, element, attrs, uiRichTextEditorCtrl) {
          uiRichTextEditorCtrl.addPlugin(scribePluginToolbar(element[0]));
        }
    };
    });
});
