'use strict';

eventsApp.controller('CompileSampleController', function CompileSampleController($scope, $compile, $parse) {
	
	var fn = $parse('1 + 2')
	console.log(fn());

	var getter = $parse('event.name');

	var context1 = {event: {name: 'AngularJS Boot Camp'}};
	var context2 = {event: {name: 'Code Camp', level: '20'}};

	console.log(getter(context1));
	console.log(getter(context2));
	console.log(getter(context2, context1));

	var setter = getter.assign;
	setter(context2, 'Code Retreat');

	console.log(context2.event.name);

	$scope.appendDivToElement = function(markup) { 
		return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
		/*
		 * Alternative code
		 *
		var compile = $compile(markup); 
		var content = compile($scope);
		return content.appendTo(angular.element("#appendHere"));
		 */
	};
});