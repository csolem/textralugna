'use strict';

angular.module('testApp')
  .controller('TreeCtrl', function ($scope) {
	$scope.folders = [{
  		label: 'test',
  		children: ['Jaded','Lessd','Coffeescriptz']
	},{
  		label: 'test2',
  		children: ['Jades','Lesss','Coffeescriptx']
	}];
    $scope.treeHandler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.label;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };

	
  });
