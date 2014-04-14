'use strict';

angular.module('testApp')
  .factory('Article', function (storage) {
    // Service logic

    var getArticles = function() {
      var articles = storage.get('articles');
      if(!articles) {
        articles = [];
        storage.set('articles', articles);
      }
      return articles;    
    };

    var saveArticle = function(article) {
      var articles = storage.get('articles');
      
      if(!articles) {
        articles = [];        
      }      
      if(article.id) {
        console.log("already saved. Overwrite");
        for(var index in articles) {    
          if(articles[index].id == article.id) {
            articles[index] = article;
          }
        }
      } else {
        article.id = new Date().getTime();
        articles.push(article);        
      }

      storage.set('articles', articles);

    };

    var clearAll = function() {
      storage.clearAll();
    }

    var removeArticle = function(articleId) {
      var articles = getArticles();
      for(var index in articles) {
        if(articles[index].id == articleId) {
          console.log("Found it at index "+index+". Deleting it");
          articles.splice(index, 1);
          storage.set('articles', articles);
          return;
        }
      }
    }



    // Public API here
    return {
      get: getArticles,
      save: saveArticle,
      clearAll: clearAll,
      remove: removeArticle
    }
});
