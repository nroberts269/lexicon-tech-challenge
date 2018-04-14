'use strict';

angular.module('primeApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.model = {}
        $scope.submit = function(valid) {
            console.log($scope.model);
            if (!valid) return;

            var primes = [];
            for (var i = 1; i <= $scope.model.max; i++) {
                if (i % 2 !== 0) primes.push({ value: i });
            }
            $scope.model.primes = primes;


            /*$scope.model.isLoading = true;
            $http.get('http://localhost:1908/api/primes/' + $scope.model.max)
                .then(function(response) {
                        $scope.model.primes = response.data;
                        $scope.model.isLoading = false;
                    },
                    function(response) {
                        console.error(response.data);
                        $scope.model.primes = null;
                        $scope.model.isLoading = false;
                    });*/
        }
    }]);