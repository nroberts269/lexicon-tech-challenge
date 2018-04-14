'use strict';

angular.module('primeApp.components', [])
    .component('primeItem', {
        templateUrl: 'primeItem/primeItem.html',
        bindings: { prime: '<' },
        controller: function PrimeItemController($http) {
            var ctrl = this;

            ctrl.$onInit = function() {
                ctrl.prime.isLoading = true;

                $http.get('http://localhost:1908/api/primes/check/' + this.prime.value)
                    .then(function(response) {
                            ctrl.prime.isPrime = response.data.isPrime;
                            ctrl.prime.isLoading = false;
                        },
                        function(response) {
                            console.error(response.data);
                            ctrl.prime.error = true;
                            ctrl.prime.isLoading = false;
                        });
            }

        }
    });