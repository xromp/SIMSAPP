var app;
define('sims.people',[
  'angular',
  'module-loader/dependencyResolverFor.js',
  'global/global-variables.js',
  'ui.bootstrap',
  ],function (angular, dependencyResolver) {
  'use strict';
    app = angular.module('PeopleApp', ['ngRoute','ngAnimate','ngSanitize','ui.bootstrap','blockUI']);
    app.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        'blockUIConfig',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, blockUIConfig)
        {
          app.lazy = {
            controller :$controllerProvider.register,
            directive  :$compileProvider.directive,
            filter     :$filterProvider.register,
            factory    :$provide.factory,
            service    :$provide.service,
            blockUI    : blockUIConfig,
          }
            $locationProvider.html5Mode(true);

            $routeProvider
            .when('/people/create',{
              templateUrl: 'people/people-create/people-create-tpl.html',
              controller:'PeopleCreateCtrl',
              controllerAs:'p',
              resolve: dependencyResolver([
                baseUrl + '/people/people-create/PeopleCreateApp.js'
              ])
            })
            .when('/people/finder',{
              templateUrl: 'people/people-finder/people-finder-tpl.html',
              controller:'PeopleFinderCtrl',
              controllerAs:'pf',
              resolve: dependencyResolver([
                baseUrl + '/people/people-finder/PeopleFinderApp.js'
              ])
            })
            .otherwise({
              template:"<p>wrng!</p>",
              controller:'DashboardCtrl'
            })

            var markUp = '';
            markUp += '<div class="block-ui-overlay">'
            markUp += '</div>'
            markUp += '<div class="block-ui-message-container">'
            markUp += '  <div class="block-ui-message" style="color: black!important;font-size: 13px;background-color: transparent;">'
            markUp += '    <i class="fa fa-circle-o-notch fa-spin"></i> Loading... '
            markUp += '    </div>'
            markUp += '</div>'

            blockUIConfig.message='loading message from module';
            blockUIConfig.template = markUp;
            blockUIConfig.autoInjectBodyBlock = false;

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

    'angular-route',
    'angular-block-ui',
    'angular-animate',
    'angular-sanitize',
    'ui.bootstrap'
  ],function($,angular,app){
    angular.bootstrap(document, [app.name]);
  });
});