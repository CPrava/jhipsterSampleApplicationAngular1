(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationAngular1App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
