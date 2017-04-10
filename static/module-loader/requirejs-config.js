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
    'bootstrap-wysiwyg': assetsUrl + '/bootstrap-wysiwyg/js/bootstrap-wysiwyg.min',

    // Plugins
    'icheck' :assetsUrl + '/iCheck/icheck.min',
    'jquery-smartwizard': assetsUrl + '/jQuery-Smart-Wizard/js/jquery.smartWizard',
    'jquery.hotkeys' : assetsUrl + '/jquery.hotkeys/jquery.hotkeys',
    'google-code-prettify': assetsUrl + '/google-code-prettify/src/prettify',
    'jquery.tagsinput': assetsUrl + 'jquery.tagsinput/src/jquery.tagsinput',
    'switchery': assetsUrl + '/switchery/dist/switchery.min',
    'select2':'select2/dist/js/select2.full.min',

    // lib
    'fastclick': assetsUrl + '/fastclick/lib/fastclick',

    // js
    'datepicker': assetsUrl + 'js/datepicker/daterangepicker',

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
    },

    // plugins
    'jquery-smartwizard':{
      deps:['jquery','bootstrap','fastclick']
    },
    'switchery':{
      deps:['jquery','bootstrap','icheck']
    }
  }
});
