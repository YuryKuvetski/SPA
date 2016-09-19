(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msSplashScreenDisabler', msSplashScreenDisablerDirective);

    /** @ngInject */
    function msSplashScreenDisablerDirective()
    {
        return {
            restrict: 'EA',
            scope   : false,
            link    : function (scope)
            {
                scope.$on('$viewContentAnimationEnded', function (event)
                {
                    if ( event.targetScope.$id === scope.$id )
                    {
                        scope.$root.$broadcast('msSplashScreen::remove');
                    }
                });
            }
        };
    }
})();