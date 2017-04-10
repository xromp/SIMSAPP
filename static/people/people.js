var app;
define('sims.people',[
  'angular',
  'module-loader/dependencyResolverFor.js'
  ],function (angular, dependencyResolver) {
  'use strict';
    app = angular.module('StudentApp', ['ngRoute']);
    var baseUrl  ='http://localhost:5000/';
    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
          app.lazy = {
            controller :$controllerProvider.register,
            directive  :$compileProvider.directive,
            filter     :$filterProvider.register,
            factory    :$provide.factory,
            service    :$provide.service
          }
            $locationProvider.html5Mode(true);

            $routeProvider
            .when('/people/create',{
              templateUrl: 'people/people-create/people-create-tpl.html',
              controller:'PeopleCreateCtrl',
              controllerAs:'p',
              resolve: dependencyResolver([
                baseUrl + 'people/people-create/PeopleCreateApp.js'
              ])
            })
            .otherwise({
              template:"<p>wrng!</p>",
              controller:'DashboardCtrl'
            })

            // if(config.routes !== undefined)
            // {
            //     angular.forEach(config.routes, function(route, path)
            //     {
            //         $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
            //     });
            // }

            // if(config.defaultRoutePaths !== undefined)
            // {
            //     $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            // }
        }
    ]);
   return app;
});
requirejs(['/module-loader/requirejs-config.js'], function (){
  requirejs([
    'jquery',
    'angular',
    'sims.people',

    'angular-route'
  ],function($,angular,app){
    angular.bootstrap(document, [app.name]);
  });
});