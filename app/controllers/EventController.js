'use strict';

eventsApp.controller('EventController', function($scope, eventData, $anchorScroll, $routeParams, $route) {

    $scope.sortorder = 'name',
    $scope.event = eventData.getEvent($routeParams.eventId);

    console.log($route.current.pathParams.eventId);
    console.log($route.current.pathParams.foo);
    console.log($route.current.params.foo); // http://localhost:8080/#/event/1?foo=bar
    console.log($route.current.foo);

    $scope.reload = function() {
        $route.reload();
    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    };
});
