import check from './check';
import convert from './convert';
import template from './template';
import transform from './transform';

export default [
	{
		title: 'Convert',
		id: 'convert',
		importFrom: '@jonibach/convert',
		items: convert
	},
	{
		title: 'Transform',
		id: 'transform',
		importFrom: '@jonibach/transform',
		items: transform
	},
	{
		title: 'Check',
		id: 'check',
		importFrom: '@jonibach/check',
		items: check
	},
	{
		title: 'Template',
		id: 'template',
		importFrom: '@jonibach/template',
		items: template
	}
];
