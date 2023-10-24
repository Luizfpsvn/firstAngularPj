var codeAmApp = angular.module('codeAmApp', []);

codeAmApp.controller('luizCtrl', [
  '$scope',
  function ($scope) {
    $scope.name = 'digite o seu nome e clique no botão';
    $scope.habilitaNome = novoNome => {
      $scope.name = novoNome;
    };
  }
]);
