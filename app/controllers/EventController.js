'use strict';

eventsApp.controller('EventController', function($scope) {

	$scope.sortorder = 'name',
	$scope.event = {
		name: 'Angular Boot Camp',
		date: 1359781015626,
		time: '10:30 pm',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: 'img/angularjs-logo.png',
		sessions: [
			{ 
				name: 'Directive Masterclass introductory',
				creatorName: 'Bob Smith',
				duration: '1 hr',
				level: 'Advanced', 
				abstract: 'In this session you will learn the ins and outs of directives!',
				upVoteCount: 0
			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'John Doe',
				duration: '30 mins',
				level: 'Introductory',
				abstract: 'In this session you will learn the ins and outs of directives!',
				upVoteCount: 0
			},
			{
				name: 'Well Behaved Controllers',
				creatorName: 'Jane Doe',
				duration: '2 hours',
				level: 'Intermediate',
				abstract: 'In this session you will learn the ins and outs of directives!',
				upVoteCount: 0
			}
		]
	};

	$scope.upVoteSession = function(session) {
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session) {
		session.upVoteCount--;
	};
});