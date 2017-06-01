//模块编码规范 主要以App示范，其他模块参照
//第一步。模块声明分两类 1、主App声明。2、Module中 Angular申明模块名与JS申明模块名保持一致
var myApp =  angular.module("myApp",["ui.router","queryModule"]);//主模块
var queryModule =  angular.module("queryModule",[]);//功能模块


//下面以App模块为例。
//第二步：配置功能与路由config，如功能模块没有则跳过。
myApp.config( ($stateProvider, $urlRouterProvider, $controllerProvider) => {

});

//第三步：声明控制器
// Angular申明控制器名与JS申明模块名保持一致，控制器数据根据具体模块划分。
var myCtrl = myApp.controller('myCtrl',["$scope","$http",($scope,$http)=>{

}]);

//第四步：声明指令;
// 如项目中有多个局部功能相同的组件指令应当申明在主模块中，局部功能可跨项目使用则应当申明在公共模块中。
// 其他功能模块中的局部功能不能复用其他模块则申明在给自的ModuleJs文件中。
//指令名称应当语义 遵循驼峰命名。
myApp.directive('pickTime', ()=>{
    return{

    }
});

//第五步：声明服务。
//过滤器名称应当语义。
myApp.filter('myfilter',() =>{
    return () => {
     return
    }
});

//第六步：声明服务。
//服务名称语义话遵循驼峰命名，声明方法不做要求,必须return。

//通过工厂模式创建自定义服务。
myApp.factory('myFactory', () =>{
    return
});

//service定义服务,必须用this定义属性与方法名。
myApp.service('myService', ($http,$q)=> {

});

//provider
// 需要注意的是：在注入provider时，名字应该是：providerName+Provider,setter方法必须是(set+变量首字母大写)格式,$get必须返回。
myApp.provider('myProvider', () =>{

});

//以上操作可以链式操作但必须遵从顺序。
angular.module("myApp",["ui.router","queryModule"]).config( ($stateProvider, $urlRouterProvider, $controllerProvider) => {

}).controller('myCtrl',["$scope","$http",()=>{

}]).directive('pickTime', ()=>{
    return{

    }
}).filter('myfilter',() =>{
    return () => {
        return
    }
}).service('myService', ($http,$q)=> {

});