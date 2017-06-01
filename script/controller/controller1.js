    var page1App=angular.module('page1Appd', []);

    var myCtrl1=page1App.controller('myCtrl1',["$scope",function($scope){
        $scope.pageClass = 'page-home-page1';
        $scope.print =()=>{
             alert('我是第一个控制器');
            }
        }]);
