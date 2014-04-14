'use strict';

angular.module('testApp')
  .controller('EditorCtrl', ['$scope', 'Article', function ($scope, Article) {

    $scope.createNew= function() {
        $scope.currentArticle = { title: "new article "+new Date().getTime(), type: "article", htmlContent : ""};
    };

    $scope.createNew();

	//$scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
	$scope.disabled = false;

	$scope.recentArticles = Article.get();

    $scope.oldSchoolSave = function() {
    	Article.save($scope.currentArticle);
        $scope.recentArticles = Article.get();
    };

    $scope.clearAll = function() {
    	Article.clearAll();
        $scope.recentArticles = [];
    };

	$scope.edit = function(article) {
	  $scope.currentArticle = article;
    };

    $scope.delete = function(article) {
    	console.log("Deleting article "+article.id);
    	Article.remove(article.id);
        $scope.recentArticles = Article.get();
        $scope.createNew();
    };



}]);
