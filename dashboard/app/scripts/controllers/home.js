'use strict';

var app = angular.module('app');

app.controller( 'HomeCtrl',
  ['$scope', '$io', 
  function( $scope, $io ) {
  
  $io.$connect({
    url: 'ws://localhost:3000'
  });
  
}]);