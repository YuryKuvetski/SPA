(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider)
    {
        // State
        $stateProvider
            .state('app.sample', {
                url    : '/sample',
                views  : {
                    'content@app': {
                        template: '<sample-main></sample-main>'
                    }
                }
            });
    }
})();