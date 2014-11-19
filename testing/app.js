angular.module('galleryApp',[]).
    factory('datasource', ['$http',function($http){
       return {
           get: function(fileName,callback){
                $http.get(fileName).success(function(data, status) {
                    callback(data);
                });
           }
       };
    }]);

var gallerycontroller = function($scope,datasource) {
    var IMAGE_WIDTH = 405;
    
    // Retrieve and set data 
    datasource.get("images.json",function(data) {
        $scope.galleryimages = data;
    });
};