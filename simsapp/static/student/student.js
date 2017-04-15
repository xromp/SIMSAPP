var app;
define('sims.student',[
  'angular',
  'module-loader/dependencyResolverFor.js'
  ],function (angular, dependencyResolver) {
  'use strict';
    app = angular.module('StudentApp', ['ngRoute']);
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
            .when('/student/student-create',{
              templateUrl: 'student/student-create-wizard/student-create-wizard.html',
              controller:'StudentCreateWizardCtrl',
              resolve: dependencyResolver([
                baseUrl + 'student/student-create-wizard/StudeCreateWizardApp.js'
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
    app.controller('DashboardCtrl',['$scope','$routeParams', '$location', function ($scope, $routeParams, $location) {
    }]);
   return app;
});
requirejs(['/module-loader/requirejs-config.js'], function (){
  requirejs([
    'jquery',
    'angular',
    'sims.student',

    'angular-route',
    'jquery-smartwizard',
    'switchery',
    'custom'
  ],function($,angular,app){
    angular.bootstrap(document, [app.name]);
  });
});