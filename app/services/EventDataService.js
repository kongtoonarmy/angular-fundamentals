eventsApp.factory('eventData', function() {
	return {
		 event: {
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
					duration: 1,
					level: 'Advanced', 
					abstract: 'In this session you will learn the ins and outs of directives!',
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'In this session you will learn the ins and outs of directives!',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'In this session you will learn the ins and outs of directives!',
					upVoteCount: 0
				}
			]
		}
	};
}); 