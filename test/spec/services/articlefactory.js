'use strict';

describe('Service: ArticleFactory', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var ArticleFactory;
  beforeEach(inject(function (_ArticleFactory_) {
    ArticleFactory = _ArticleFactory_;
  }));

  it('should do something', function () {
    expect(!!ArticleFactory).toBe(true);
  });

});
