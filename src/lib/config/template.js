import { containsHello } from '@jonibach/template';

export default [
	{
		title: 'Template',
		items: [
			{
				demo: 'check',
				title: 'Hello World!',
				description: 'Checks if a value is in an array.',
				testFunction: containsHello,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'boolean',
				params: ['hello']
			}
		]
	}
];
