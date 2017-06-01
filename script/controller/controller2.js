var page2App=angular.module('page2Appd', []);

var myCtrl2=page2App.controller('myCtrl2',["$scope",function($scope){
    $scope.pageClass = 'page-home-page2';

    $scope.print =()=>{
        alert('我是第二个控制器');
    }
}]);