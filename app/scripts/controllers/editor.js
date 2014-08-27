'use strict';

angular.module('testApp')
  .controller('EditorCtrl', ['$scope', '$compile', 'ArticleFactory', 'SearchFactory', function ($scope, $compile, ArticleFactory, SearchFactory) {

    $scope.createNew= function() {
        $scope.currentArticle = { title: "new article "+new Date().getTime(), type: "article", htmlContent : "", relations : []};
    };

    $scope.createNew();

	$scope.disabled = false;

	$scope.recentArticles = ArticleFactory.get();

    $scope.oldSchoolSave = function() {
    	ArticleFactory.save($scope.currentArticle);
        $scope.recentArticles = ArticleFactory.get();
    };

    $scope.clearAll = function() {
    	ArticleFactory.clearAll();
        $scope.recentArticles = [];
    };

	$scope.edit = function(article) {
	  $scope.currentArticle = article;
      if(!$scope.currentArticle.relations) {
        $scope.currentArticle.relations = [];
      }
    };

    $scope.delete = function(article) {
    	console.log("Deleting article "+article.id);
    	ArticleFactory.remove(article.id);
        $scope.recentArticles = ArticleFactory.get();
        $scope.createNew();
    };

    $scope.search = {query : ""};

    $scope.executeSearch = function() {
        $scope.search.results = SearchFactory.search($scope.search.query);
    };

    $scope.addRelation = function(item) {
        for(var i = 0; i < $scope.currentArticle.relations.length; i++) {
           if($scope.currentArticle.relations[i].id == item.id) {
            console.log("Ignore: already in the list of relations");
            return;
           }
        }
        $scope.currentArticle.relations.push(item);
    };

    $scope.removeRelation = function(item) {
        for(var i = 0; i < $scope.currentArticle.relations.length; i++) {
            if($scope.currentArticle.relations[i].id == item.id) {
                $scope.currentArticle.relations.splice(i, 1);
            }
        }
    };

    $scope.isRelation = function(item) {
        for(var i = 0; i < $scope.currentArticle.relations.length; i++) {
            if($scope.currentArticle.relations[i].id == item.id) {
                return true;
            }
        }
        return false;
    };

    $scope.insertInlineImage = function(item) {
        //https://github.com/fraywing/textAngular/issues/51
        //https://github.com/fraywing/textAngular/issues/54
        //TODO: at least use a directive

        //var html = $compile("<br>hello<br>")($scope);
        //$scope.currentArticle.htmlContent = $scope.currentArticle.htmlContent +html;
    }

}]);
