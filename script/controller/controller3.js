var page3App=angular.module('page3Appd', []);

var myCtrl3=page3App.controller('myCtrl3',["$scope",function($scope){
    $scope.pageClass = 'page-home-page3';

    $scope.print =()=>{
        alert('我是第三个控制器');
    }
}]);
