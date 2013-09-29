'use strict';

angular.module('homePageApp',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/login');
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: '/state1',
      templateUrl: '../views/main.html',
      controller:'MainCtrl'
    })
    .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
    });
  });