(function ()
{
    'use strict';

    angular
        .module('app.navigation', [])
        .component('navigation', {
            templateUrl: 'app/navigation/layouts/vertical-navigation/navigation.html',
            controller: NavigationController
        });

    /** @ngInject */
    function NavigationController()
    {
        var vm = this;

        // Data
        vm.folded = false;
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;

        //////////

        /**
         * Toggle folded status
         */
        function toggleMsNavigationFolded()
        {
            vm.folded = !vm.folded;
        }
    }

})();