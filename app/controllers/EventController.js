'use strict';

eventsApp.controller('EventController', function($scope) {
	$scope.event = {
		name: 'Android Name',
		date: '21/12/58',
		time: '10:30 pm',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: 'images/angularjs-logo.png',
		sessions: [
			{
				name: 'Directive Masterclass'
			},
			{
				name: 'Scopes for fun and profit'
			},
			{
				name: 'Well Behaved Controllers' 
			}
		]
	};
});