angular.module('galleryApp',[]).
  factory('datasource', ['$http',function($http){
    return {
      get: function(fileName,callback){
        $http.get(fileName).success(function(data, status) {
          callback(data);
        });
      }
    };
  }])
  .controller('projectcontroller', ['$scope', function($scope) {
    $scope.show = function($ id) {
      $scope.currentImage = id;
      $scope.emit('showProject');
    };
  }])
  .directive('projectdirective', function() {
    return {
      replace: true,
      link : function (scope, element, attrs) {
        scope.$on('showProject', function() {
          console.log('show');
        });
      },
    };
  });

var gallerycontroller = function($scope,datasource) {
    var IMAGE_WIDTH = 405;
    
    // Retrieve and set data 
    datasource.get("images.json",function(data) {
        $scope.galleryimages = data;
    });
};