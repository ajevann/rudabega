var _HEADER_STYLE = "<style type='text/css'>#table { display: table; width:100%;}#row  { display: table-row;}#far-left, #left, #middle-left, #middle, #middle-right, #right, #far-right {  display: table-cell;  width:14.29%;}.project-container {  width:100%; height:100%;}.project-header {  width:100%; }.project-image { width:100%; height: 300px;  overflow: hidden;}.project-image img {  width:100%; }.project-desc {  width:100%; }</style>";
var _PROJECT_STYLE = "";
var _HEADER = "<div class='header'><div id='table'><div id='row'><div id='far-left'></div><div id='left'></div><div id='middle-left'></div><div id='middle'>CONTACT US AT</div><div id='middle-right'>jason@rudabega.com</div><div id='right'>540-666-6666 </div><div id='far-right'>666 glade road </div></div><div id='row'><div id='far-left'></div><div id='left'></div><div id='middle-left'></div><div id='middle'></div><div id='middle-right'>conor@rudabega.com</div><div id='right'>540-666-6667</div><div id='far-right'>blacksburg, va</div></div></div></div";

var app = angular.module('app',[]);

app.controller('controller', function($scope, $http) {

  $http.get('imagesCustom.json').then(function(res){
    $scope.imagesCustom = res.data;                
  });

  $http.get('imagesCartesia.json').then(function(res){
    $scope.imagesCartesia = res.data;                
  });

  $scope.loadLink = function(link) {
    $scope.currentPage = link;

    $scope.$emit('loadLink');
  };

  $scope.show = function(image) {
    $scope.selectedID = image.id;
    $scope.selectedDesc = image.desc;

    $scope.$emit('showProject');
  };

});

app.directive('directive', function() {
    return {
      replace: true,
      link : function (scope, element, attrs) {

        scope.$on('loadLink', function() {
          console.log('loadingLink ' + scope.currentPage);

          window.location.href=scope.currentPage + '.html';
        });

        scope.$on('showProject', function() {

          $('.content-container').empty();
          $('.content-container').append(loadProject(scope.selectedID, scope.selectedDesc));
        });

      },
    };
});

function loadProject(id, desc) {
  var project = [];

  project.push(_HEADER_STYLE);
  project.push(_HEADER);
  project.push("<img src='images/" + id + ".jpg'></img>");
  project.push("<div class='project-desc'>");
  project.push(desc);
  project.push("</div>");
  project.push("</div>");
  project.join();

return project;

}