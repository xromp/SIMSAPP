var app;
define('sims.student',[
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
            // $locationProvider.html5Mode(true);

            $routeProvider
            .when('/',{
              templateUrl: baseUrl + 'student/student-create-wizard/template/student-create-wizard-tpl.html',
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
    'custom',
    'jquery-smartwizard'
  ],function($,angular,app){
    angular.bootstrap(document, [app.name]);
  });
});