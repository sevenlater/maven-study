
angular.module('yourApp').controller('FormCtrl',function($scope,$http,$rootScope,$stateParams) {


    $scope.selectArr = [
        {"v":1, "name": "选项1"},
        {"v":2, "name": "选项2"},
        {"v":3, "name": "选项3"},
        {"v":4, "name": "选项4"}
    ];

})