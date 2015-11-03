'use strict';

/**
 * @ngdoc overview
 * @name analystRefactorApp
 * @description
 * # analystRefactorApp
 *
 * Main module of the application.
 */
angular
  .module('analystRefactorApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
