'use strict';

var ngTW = angular.module('homePageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
  

ngTW.controller('HomeCtrl',['$scope','Example', function HomeCtrl($scope, Example) {
	$scope.lists = Example.lists;
    $scope.tags = Example.tags;
    $scope.open = false;
}])

ngTW.controller('SidebarCtrl',['$scope', function HomeCtrl($scope) {

}])
