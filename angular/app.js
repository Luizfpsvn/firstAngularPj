var codeAmApp = angular.module('codeAmApp', []);

codeAmApp.controller('luizCtrl', [
  '$scope',
  function ($scope) {
    $scope.name = '(seu nome aqui)';
    $scope.habilitaNome = novoNome => {
      $scope.name = novoNome;
    };
  }
]);
