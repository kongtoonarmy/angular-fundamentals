'use strict';

eventsApp.controller('LocaleSampleController', function LocaleSampleController($scope, $locale) {
    
	console.log($locale);

    $scope.myDate = Date.now();
    $scope.myFormatFull = $locale.DATETIME_FORMATS.fullDate;
    $scope.myFormatShort = $locale.DATETIME_FORMATS.shortDate;

    console.log($scope.myDate);
    console.log($scope.myFormatFull);
    console.log($scope.myFormatShort);
});
