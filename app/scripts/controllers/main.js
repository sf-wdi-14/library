'use strict';

/**
 * @ngdoc function
 * @name libraryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the libraryApp
 */
angular.module('libraryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
