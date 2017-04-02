var assetsUrl = 'http://localhost:5000/assets'
requirejs.config({
  paths:{
    // jQuery
    'jquery':assetsUrl + '/jquery/dist/jquery.min',

    // AngularJs
    'angular':assetsUrl + '/angular/angular.min',
    // 'angular':'http://localhost/sims/assets/angular/angular.min',
    'angular-route':assetsUrl + '/angular-route/angular-route.min',

    // Bootstraps
    'bootstrap':assetsUrl + '/bootstrap/dist/js/bootstrap.min',
    'bootstrap-progressbar':assetsUrl + '/bootstrap-progressbar/bootstrap-progressbar.min',

    // Plugins
    'icheck' :assetsUrl + '/iCheck/icheck.min',

    // customs
    'custom' :assetsUrl + '/custom/js/custom.min'
  },
  shim:{

    'jquery' : {
      exports:'$'
    },
    'bootstrap' : {
      deps:['jquery']
    },
    'custom' : {
      deps:['jquery']
    },
    // AngularJS
    'angular':{
      exports: 'angular',
      deps:['jquery']
    },
    'angular-route':{
      deps:['angular']
    }
  }
});