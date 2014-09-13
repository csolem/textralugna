/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: uiRichTextEditorToolbar', function () {

    // load the directive's module
    beforeEach(module('textralungaApp.directives.Uirichtexteditortoolbar'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<ui-rich-text-editor-toolbar></ui-rich-text-editor-toolbar>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the uiRichTextEditorToolbar directive');
    }));
  });
});