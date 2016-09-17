(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .component('sampleMain', {
            restrict: 'EA',
            controller : SampleMainController,
            templateUrl: 'app/main/sample/sample.html'
        });

    /** @ngInject */
    function SampleMainController(msApi)
    {
        var vm = this;

        // Data
        msApi.resolve('sample@get').then(function (sampleData) {
            vm.helloText = sampleData.data.helloText;
        });

        // Methods

        //////////
    }
})();
