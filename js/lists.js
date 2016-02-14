var app = angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
  .controller('CollapsibleController', ["$scope", function ($scope) {
      $scope.collapsibleElements = [{
          icon: 'mdi-image-filter-drama',
          title: 'First',
          content: 'Lorem ipsum dolor sit amet.'
      },{
          icon: 'mdi-maps-place',
          title: 'Second',
          content: 'Lorem ipsum dolor sit amet.'
      },{
          icon: 'mdi-social-whatshot',
          title: 'Third',
          content: 'Lorem ipsum dolor sit amet.'
      }];