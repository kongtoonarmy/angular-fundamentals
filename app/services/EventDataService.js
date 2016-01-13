eventsApp.factory('eventData', function($http, $log) {
	return {
		getEvent: function (successb) {
			$http({ 
				method: 'GET', 
				url: '/data/event/1'
			})
			.success(function (data, status, headers, config) {
				successb(data);
			})
			.error(function (data, status, headers, config) {
				$log.warn(data, status, headers, config);
			});
		}	
	};
}); 