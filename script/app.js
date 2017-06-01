define('dd', ['myApp'], function (app) {
    app.config(function ($stateProvider, $urlRouterProvider, $controllerProvider) {
        app.registerController = $controllerProvider.register;
        app.loadJs = function (js) {
            return function ($rootScope, $q) {
                var def = $q.defer(), deps = [];
                angular.isArray(js) ? (deps = js) : deps.push(js);
                require(deps, function () {
                    $rootScope.$apply(function () {
                        def.resolve();
                    });
                });
                return def.promise;
            };
        };
        $urlRouterProvider.when("/home", "/home/page1");
        $urlRouterProvider.otherwise('/home/page1');
        $stateProvider.state('home', {
            url: "/home",
            views: {
                'home': {
                    templateUrl: 'tpl/home.html',
                    controller: 'homeCtrl'
                },
                'header@home': {
                    templateUrl: 'tpl/header.html'
                },
                'asider@home': {
                    templateUrl: 'tpl/asider.html'
                }
            },
            resolve: {deps: app.loadJs('controller/homeCtrl')}
        }).state('home.page1', {
            url: "/page1",
            views: {
                'check@home': {
                    templateUrl: 'tpl/page1.html',
                    controller: "myCtrl1",
                }
            }
        }).state('home.page2', {
            url: "/page2",
            views: {
                'check@home': {
                    templateUrl: 'tpl/page2.html',
                    controller: "myCtrl2",
                }
            }
        }).state('home.page3', {
            url: "/page3",
            views: {
                'check@home': {
                    templateUrl: 'tpl/page3.html',
                    controller: "myCtrl3",
                }
            }
        });
    });
});
define('myApp',['angular','controller/controller1','controller/controller2','controller/controller3'],function(e,a,b,c){
    return e.module("myApp", ["ui.router",'ngAnimate','page1Appd','page2Appd','page3Appd']);
});
define('bst', ['angular', 'myApp','dd'], function (e) {
    e.element(document).ready(function () {
        e.bootstrap(document, ["myApp"])
    })
});
require(['bst']);