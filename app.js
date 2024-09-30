// app.js
var app = angular.module("shoppingListApp", []);

app.controller("ShoppingListController", function($scope) {
    $scope.items = [];  // Array para armazenar os itens da lista
    $scope.newItem = "";  // Variável para armazenar o novo item

    // Função para adicionar um item à lista
    $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);  // Adiciona o item ao array
            $scope.newItem = "";  // Limpa o campo de entrada
        }
    };

    // Função para remover um item da lista
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);  // Remove o item pelo índice
    };
});
