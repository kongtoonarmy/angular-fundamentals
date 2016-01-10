'use strict';

eventsApp.controller('EditEventController',  function EditEventController($scope, $location) {

	$scope.saveEvent = function(event) {
		window.alert('event: ' + event.name + ' saved!');
	}

	$scope.cancelEdit = function() {
		window.location = "EventDetails.html";
	}
})