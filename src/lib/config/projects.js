import check from './check';
import convert from './convert';
import template from './template';
import transform from './transform';

export default [
	{
		title: 'Convert',
		id: 'convert',
		importFrom: '@jonibach/convert',
		description: 'Converts values from one type to another.',
		items: convert
	},
	{
		title: 'Transform',
		id: 'transform',
		importFrom: '@jonibach/transform',
		description: 'Transforms data into different shapes and formats.',
		items: transform
	},
	{
		title: 'Check',
		id: 'check',
		importFrom: '@jonibach/check',
		description: 'Checks if a value is of a certain type or meets certain criteria.',
		items: check
	},
	{
		title: 'Template',
		id: 'template',
		importFrom: '@jonibach/template',
		description: 'A template project for a TS npm library.',
		items: template
	}
];
