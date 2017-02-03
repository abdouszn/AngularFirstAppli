'use strict';

/**
 * @ngdoc function
 * @name firstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.helloWorld = "Hello, World!";
    $scope.name = "Zéro";
  });