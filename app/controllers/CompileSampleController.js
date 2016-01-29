'use strict';

eventsApp.controller('CompileSampleController', function CompileSampleController($scope, $compile) {
	
	$scope.appendDivToElement = function(markup) {
		return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
		/*
		 * Another way code
		 *
		var compile = $compile(markup); 
		var content = compile($scope);
		return content.appendTo(angular.element("#appendHere"));
		 */
	};
});