(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/sample');

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/main/main-app.html',
                    },
                    'toolbar@app'   : {
                        templateUrl: 'app/toolbar/toolbar.html',
                    },
                    'navigation@app': {
                        templateUrl: 'app/navigation/navigation.html',
                    },
                    'quickPanel@app': {
                        template: '',
                    }
                }
            });
    }

})();
