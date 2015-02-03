'use strict';

/**
 * @ngdoc overview
 * @name libraryApp
 * @description
 * # libraryApp
 *
 * Main module of the application.
 */
var app = angular
  .module('libraryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome/index.html',
        controller: 'WelcomeCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books/index.html',
        controller: 'BooksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
