'use strict';

eventsApp.controller('EventController', function($scope) {

	$scope.snippet = '<span style="color:#ff00000">hi there</span>';
	$scope.boolValue = false;
	$scope.mystyle = {'color':'red', 'background-color':'blue'};
	$scope.myclass = 'blue';
	$scope.event = {
		name: 'Angular Boot Camp',
		date: '21/12/58',
		time: '10:30 pm',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: 'img/angularjs-logo.png',
		sessions: [
			{ 
				name: 'Directive Masterclass',
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