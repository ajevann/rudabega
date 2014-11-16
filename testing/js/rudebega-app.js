var app = angular.module("rudebega-app", [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  .directive('dAbout', function() {
    return {
      templateUrl: 'about.html'
    };
  });
  .directive('dCustomWorks', function() {
    return {
      templateUrl: 'custom_works.html'
    };
  });
  .directive('dCartesia', function() {
    return {
      templateUrl: 'cartesia.html'
    };
  });
  .directive('dProducts', function() {
    return {
      templateUrl: 'products.html'
    };
  });