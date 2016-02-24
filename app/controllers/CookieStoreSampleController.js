'use strict';

eventsApp.controller('CookieStoreSampleController', ['$scope', '$cookies', function CookieStoreSampleController($scope, $cookies) {

    $scope.event = {id: 1, name: "My Event"};

    $scope.saveEventToCookie = function(event) {
        $cookies.putObject('event', event);
    };

    $scope.getEventFromCookie = function() {
        console.log($cookies.getObject('event'));
    };

    $scope.removeEventCookie = function() {
        $cookies.remove('event');
    };
}]);
