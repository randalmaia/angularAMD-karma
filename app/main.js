require.config({
    baseUrl: "/app/",
    
    paths: {
      'angular': '../lib/angular/angular',
      'angular-route': '../lib/angular-route/angular-route',
      'angularAMD': '../lib/angularAMD/angularAMD'
    },
    
    shim: {
      'angularAMD': ['angular'],
      'angular-route': ['angular']
    },
    
    deps: ['app'],
});