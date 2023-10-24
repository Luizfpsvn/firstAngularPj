var codeAmApp = angular.module('codeAmApp', []);

codeAmApp.controller('luizCtrl', [
  '$scope',
  function ($scope) {
    $scope.name = 'Luiz Fernando';
  }
]);

codeAmApp.controller('annaCtrl', [
  '$scope',
  function ($scope) {
    $scope.name = 'Anna carolina';
  }
]);
