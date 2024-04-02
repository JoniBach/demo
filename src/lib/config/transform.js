import {
	arrayToFlatArray,
	arrayToGroup,
	arrayToObject,
	arrayToSet,
	mapToObject,
	objectToArray,
	objectToMap,
	setToArray,
	arrayWithObjectAndString,
	filterArrayByString,
	filterArrayByStringRaw,
	nestedObjectArrayKeysToString,
	nestedObjectArrayToQueryString,
	nestedObjectArrayToString,
	nestedObjectArrayValuesToString,
	objectArrayToArrayOfString,
	searchString,
	checkCondition,
	checkConditions,
	filterByObjectCondition,
	filterByObjectConditions
} from '@jonibach/transform';

const data = [
	{ id: 1, category: 'fruit', name: 'Apple' },
	{ id: 2, category: 'vegetable', name: 'Carrot' },
	{ id: 3, category: 'fruit', name: 'Banana' },
	{ id: 4, category: 'fruit', name: 'Cherry' }
];

export default [
	{
		title: 'Dynamic',
		items: [
			{
				demo: 'dynamic', //
				title: 'checkCondition', //
				description: 'Return true if condition matches', //
				testFunction: checkCondition, //
				type: { from: 'array', to: 'array' },
				inputLabel: 'array',
				outputLabel: 'transformedArray',
				params: ['query-array']
			},
			{
				demo: 'dynamic', //
				title: 'checkConditions', //
				description: 'Return true if condition matches across multiple arrays', //
				testFunction: checkConditions, //
				type: { from: 'array', to: 'array' },
				inputLabel: 'array',
				outputLabel: 'transformedArray',
				params: ['query-arrays']
			},
			{
				demo: 'dynamic', //
				title: 'filterByObjectCondition', //
				description: 'Return objects if condition matches across an array', //
				testFunction: filterByObjectCondition, //
				type: { from: 'array', to: 'array' },
				inputLabel: 'array',
				outputLabel: 'transformedArray',
				data,
				params: ['data', 'query-array']
			},
			{
				demo: 'dynamic', //
				title: 'filterByObjectConditions', //
				description: 'Return objects if condition matches across multiple arrays', //
				testFunction: filterByObjectConditions, //
				type: { from: 'array', to: 'array' },
				inputLabel: 'array',
				outputLabel: 'transformedArray',
				data,
				params: ['data', 'query-arrays']
			}
		]
	},
	{
		title: 'Data ',
		items: [
			{
				demo: 'convert',
				title: 'objectToArray',
				description: 'Converts an object to an array of key-value pairs.',
				testFunction: objectToArray,
				params: [{ key1: 'value1', key2: 'value2' }],
				type: { from: 'object', to: 'array' },
				inputLabel: 'object',
				outputLabel: 'arrayOfKeyValuePairs'
			},
			{
				demo: 'convert',
				title: 'arrayToObject',
				description: 'Converts an array of key-value pairs to an object.',
				testFunction: arrayToObject,
				type: { from: 'nested-objects-array', to: 'object' },

				params: [
					[
						['key1', 'value1'],
						['key2', 'value2']
					]
				],
				inputLabel: 'arrayOfKeyValuePairs',
				outputLabel: 'object'
			},
			{
				// demo: 'convert',
				title: 'mapToObject',

				description: 'Converts a map to an object.',
				testFunction: mapToObject,
				type: { from: 'array', to: 'object' },

				params: new Map([
					['key1', 'value1'],
					['key2', 'value2']
				]),
				inputLabel: 'Map',
				outputLabel: 'object'
			},
			{
				// demo: 'convert',
				title: 'objectToMap',
				description: 'Converts an object to a map.',
				testFunction: objectToMap,

				params: { key1: 'value1', key2: 'value2' },
				type: { from: 'object', to: 'boolean' },
				inputLabel: 'object',
				outputLabel: 'Map'
			},
			{
				// demo: 'convert',
				title: 'setToArray',

				description: 'Converts a set to an array.',
				testFunction: setToArray,

				params: new Set(['value1', 'value2']),
				inputLabel: 'Set',
				outputLabel: 'array'
			},
			{
				// demo: 'convert',
				title: 'arrayToSet',
				description: 'Converts an array to a set.',
				testFunction: arrayToSet,

				params: ['value1', 'value2'],
				type: { from: 'array', to: 'boolean' },
				inputLabel: 'array',
				outputLabel: 'Set'
			},
			{
				// demo: 'convert',
				title: 'arrayToFlatArray',
				description: 'Converts a nested array to a flat array.',
				testFunction: arrayToFlatArray,

				params: [1, [2, [3, [4, 5]]]],
				inputLabel: 'nestedArray',
				outputLabel: 'flattenedArray'
			},
			{
				demo: 'convert',
				title: 'arrayToGroup',
				description: 'Groups an array of objects by a key.',
				testFunction: arrayToGroup,

				params: [
					[
						{ category: 'fruit', name: 'apple' },
						{ category: 'fruit', name: 'banana' },
						{ category: 'vegetable', name: 'carrot' }
					],
					'category'
				],
				additionalParams: 'key: string',
				type: { from: 'array', to: 'array' },
				inputLabel: 'arrayOfObjects',
				outputLabel: 'objectGroupedByKey'
			}
		]
	},
	{
		title: 'Array Filtering',
		items: [
			{
				//type: 'filter',
				demo: 'convert',

				description: 'Converts an array of objects into an array of strings.',
				testFunction: objectArrayToArrayOfString,
				title: 'objectArrayToArrayOfString',
				type: { from: 'objects-array', to: 'array' },
				inputLabel: 'arrayOfObjects',
				outputLabel: 'arrayOfStrings',
				params: [
					[
						{ name: 'John', age: 30 },
						{ name: 'Jane', occupation: 'Developer' }
					]
				]
			},
			{
				demo: 'convert',
				description:
					'Flattens a nested array of objects and concatenates all values into a single string.',
				testFunction: nestedObjectArrayValuesToString,
				title: 'nestedObjectArrayValuesToString',
				inputLabel: 'nestedArrayOfObjects',
				outputLabel: 'string',
				type: { from: 'nested-objects-array', to: 'array' },
				params: [
					[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]],
					'Developer'
				]
			},
			{
				//type: 'filter',
				demo: 'convert',
				description:
					'Flattens a nested array of objects and concatenates all keys into a single string.',
				testFunction: nestedObjectArrayKeysToString,
				title: 'nestedObjectArrayKeysToString',
				inputLabel: 'nestedArrayOfObjects',
				outputLabel: 'string',
				type: { from: 'nested-objects-array', to: 'string' },

				params: [
					[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]],
					'Developer'
				]
			},
			{
				//type: 'filter',
				demo: 'convert',
				description:
					'Flattens a nested array of objects and converts each object to a string representation.',
				testFunction: nestedObjectArrayToString,
				title: 'nestedObjectArrayToString',
				inputLabel: 'nestedArrayOfObjects',
				outputLabel: 'string',
				type: { from: 'nested-objects-array', to: 'string' },

				params: [
					[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]],
					'Developer'
				]
			},
			{
				//type: 'filter',
				demo: 'convert',
				description:
					'Flattens a nested array of objects and converts each object to a query string representation.',
				testFunction: nestedObjectArrayToQueryString,
				title: 'nestedObjectArrayToQueryString',
				inputLabel: 'nestedArrayOfObjects',
				outputLabel: 'string',
				type: { from: 'nested-objects-array', to: 'string' },

				params: [
					[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]],
					'Developer'
				]
			},
			{
				//type: 'filter',
				demo: 'convert',
				description:
					'Converts an array of objects into an array with each object accompanied by its string representation.',
				testFunction: arrayWithObjectAndString,
				title: 'arrayWithObjectAndString',
				inputLabel: 'arrayOfObjects',
				outputLabel: 'arrayOfOriginalAndString',
				type: { from: 'array', to: 'nested-array' },

				params: [
					[
						{ name: 'John', age: 30 },
						{ name: 'Jane', occupation: 'Developer' }
					],
					'Developer'
				]
			},
			{
				//type: 'filter',
				demo: 'convert',
				description: 'Searches a string for a partial match regardless of case.',
				testFunction: searchString,
				title: 'searchString',
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'boolean',

				params: ['fox', 'The quick brown fox jumps over the lazy dog.']
			},
			{
				//type: 'filter',
				demo: 'check',
				description:
					'Filters an array of transformed objects, returning only those that match the search term, in their original format.',
				testFunction: filterArrayByString,
				title: 'filterArrayByString',
				type: { from: 'string', to: 'array' },
				inputLabel: 'arrayOfTransformedObjects',
				outputLabel: 'arrayOfObjects',

				params: [
					[
						{ original: { name: 'Dave', age: 42 }, objectString: 'Dave, 42' },
						{
							original: { name: 'Jane', occupation: 'Developer', experience: '5 years' },
							objectString: 'Jane, Developer, 5 years'
						}
					],
					'Developer'
				]
			},
			{
				//type: 'filter',
				description:
					'Filters an array of transformed objects based on a search term, retaining the transformed format.',
				testFunction: filterArrayByStringRaw,
				title: 'filterArrayByStringRaw',
				type: { from: 'array', to: 'array' },
				inputLabel: 'arrayOfTransformedObjects',
				outputLabel: 'arrayOfTransformedObjects',

				params: [
					[
						{ original: { name: 'Dave', age: 42 }, objectString: 'Dave, 42' },
						{
							original: { name: 'Jane', occupation: 'Developer', experience: '5 years' },
							objectString: 'Jane, Developer, 5 years'
						}
					],
					'Developer'
				]
			}
		]
	}
];
