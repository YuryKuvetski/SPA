(function ()
{
    'use strict';

    angular
        .module('fuse', ['app.core', 'app.navigation', 'app.toolbar', 'app.sample'])
        .component('fuseAdmin', {
            transclude: true,
            restrict: 'EA',
            templateUrl: 'app/fuse.html'
        });
})();