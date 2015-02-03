'use strict';

/**
 * @ngdoc function
 * @name libraryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the libraryApp
 */
angular.module('libraryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
