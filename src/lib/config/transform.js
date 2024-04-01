import {
	isEqualTo,
	isNotEqualTo,
	isGreaterThan,
	isLessThan,
	isGreaterThanOrEqualTo,
	isLessThanOrEqualTo,
	isStrictlyEqualTo,
	isStrictlyNotEqualTo,
	exists,
	doesNotExist,
	checkType,
	startsWith,
	endsWith,
	contains,
	matches,
	inArray,
	notInArray,
	empty,
	notEmpty,
	and,
	even,
	odd,
	or,
	not,
	divisibleBy,
	regex,
	lengthEquals,
	lengthGreaterThan,
	lengthLessThan,
	before,
	after,
	betweenDates,
	sameDay,
	keyExists,
	keyDoesNotExist,
	validURL,
	validEmail,
	domainMatches,
	xor,
	nand,
	nor,
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
		title: 'Array',
		items: [
			{
				demo: 'check', //
				title: 'inArray', //
				description: 'Checks if a value is in an array.', //
				testFunction: inArray, //
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'numberArray',
				params: [3, [1, 2, 3, 4, 5]]
			},

			{
				demo: 'check',
				title: 'inArray',
				description: 'Checks if a value is in an array.',
				testFunction: inArray,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'numberArray',
				params: [3, [1, 2, 3, 4, 5]]
			},
			{
				demo: 'check',
				title: 'notInArray',
				description: 'Checks if a value is not in an array.',
				testFunction: notInArray,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'numberArray',
				params: [6, [1, 2, 3, 4, 5]]
			},
			{
				demo: 'check',
				title: 'empty',
				description: 'Checks if an array is empty.',
				testFunction: empty,
				type: { from: 'array', to: 'boolean' },
				inputLabel: 'anyArray',
				outputLabel: 'boolean',
				params: [[], undefined]
			},
			{
				demo: 'check',
				title: 'notEmpty',
				description: 'Checks if an array is not empty.',
				testFunction: notEmpty,
				type: { from: 'array', to: 'boolean' },
				inputLabel: 'anyArray',
				outputLabel: 'boolean',
				params: [[1, 2], undefined]
			}
		]
	},
	{
		title: 'Comparison',
		items: [
			{
				demo: 'check',
				title: 'isEqualTo',
				description: 'Checks if two values are equal.',
				testFunction: isEqualTo,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'number',
				params: ['5', 5]
			},
			{
				demo: 'check',
				title: 'isNotEqualTo',
				description: 'Checks if two values are not equal.',
				testFunction: isNotEqualTo,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [5, 10]
			},
			{
				demo: 'check',
				title: 'isGreaterThan',
				description: 'Checks if a value is greater than another value.',
				testFunction: isGreaterThan,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [10, 5]
			},
			{
				demo: 'check',
				title: 'isLessThan',
				description: 'Checks if a value is less than another value.',
				testFunction: isLessThan,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [5, 10]
			},
			{
				demo: 'check',
				title: 'isGreaterThanOrEqualTo',
				description: 'Checks if a value is greater than or equal to another value.',
				testFunction: isGreaterThanOrEqualTo,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [10, 10]
			},
			{
				demo: 'check',
				title: 'isLessThanOrEqualTo',
				description: 'Checks if a value is less than or equal to another value.',
				testFunction: isLessThanOrEqualTo,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [5, 5]
			},
			{
				demo: 'check',
				title: 'isStrictlyEqualTo',
				description: 'Checks if two values are strictly equal.',
				testFunction: isStrictlyEqualTo,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [5, 5]
			},
			{
				demo: 'check',
				title: 'isStrictlyNotEqualTo',
				description: 'Checks if two values are strictly not equal.',
				testFunction: isStrictlyNotEqualTo,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'string',
				params: [5, '5']
			}
		]
	},
	{
		title: 'String',
		items: [
			{
				demo: 'check',
				title: 'startsWith',
				description: 'Checks if a string starts with another string.',
				testFunction: startsWith,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'stringA',
				outputLabel: 'stringB',
				params: ['Hello!', 'Hel']
			},
			{
				demo: 'check',
				title: 'endsWith',
				description: 'Checks if a string ends with another string.',
				testFunction: endsWith,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'stringA',
				outputLabel: 'stringB',
				params: ['Hello!', 'world!']
			},
			{
				demo: 'check',
				title: 'contains',
				description: 'Checks if a string contains another string.',
				testFunction: contains,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'stringA',
				outputLabel: 'stringB',
				params: ['Hello!', 'lo, wo']
			},
			{
				demo: 'check',
				title: 'matches',
				description: 'Checks if a string matches a regular expression.',
				testFunction: matches,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'RegExp',
				params: ['Hello!', /world!$/]
			},
			{
				demo: 'check',
				title: 'regex',
				description: 'Checks if a string matches a regular expression.',
				testFunction: regex,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'RegExp',
				params: ['Hello!', /world!$/]
			},
			{
				demo: 'check',
				title: 'lengthEquals',
				description: 'Checks if a string has a specific length.',

				testFunction: lengthEquals,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'number',
				params: ['Hello', 5]
			},
			{
				demo: 'check',
				title: 'lengthGreaterThan',
				description: 'Checks if a string has a length greater than a specific value.',
				testFunction: lengthGreaterThan,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'number',
				params: ['Hello!', 5]
			},
			{
				demo: 'check',
				title: 'lengthLessThan',
				description: 'Checks if a string has a length less than a specific value.',
				testFunction: lengthLessThan,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'number',
				params: ['Hi', 5]
			},
			{
				demo: 'check',
				title: 'validURL',
				description: 'Checks if a string is a valid URL.',
				testFunction: validURL,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'boolean',
				params: ['https://www.example', undefined]
			},
			{
				demo: 'check',
				title: 'validEmail',
				description: 'Checks if a string is a valid email address.',
				testFunction: validEmail,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'boolean',
				params: ['email@example', undefined]
			},
			{
				demo: 'check',
				title: 'domainMatches',
				description: 'Checks if a string is a valid domain.',
				testFunction: domainMatches,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'string',
				outputLabel: 'string',
				params: ['https://www.example', 'www.example.com']
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
		title: 'Logic',
		items: [
			{
				demo: 'check',
				description: 'Checks if all values are true.',
				title: 'and',
				testFunction: and,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'booleanArray',
				outputLabel: 'boolean',
				params: [true, true]
			},
			{
				demo: 'check',

				description: 'Checks if any value is true.',
				title: 'or',
				testFunction: or,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'booleanArray',
				outputLabel: 'boolean',
				params: [false, false]
			},
			{
				demo: 'check',
				title: 'not',

				description: 'Checks if a value is false.',
				testFunction: not,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'boolean',
				outputLabel: 'boolean',
				params: [
					false,
					undefined // This value is not used for this check
				]
			},
			{
				demo: 'check',

				description: 'Checks if exactly one value is true.',
				title: 'xor',
				testFunction: xor,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'boolean',
				outputLabel: 'boolean',
				params: [true, false]
			},
			{
				demo: 'check',

				description: 'Checks if neither value is true.',
				title: 'nand',
				testFunction: nand,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'boolean',
				outputLabel: 'boolean',
				params: [true, true]
			},
			{
				description: 'Checks if neither value is true.',
				demo: 'check',
				title: 'nor',
				testFunction: nor,
				type: { from: 'boolean', to: 'boolean' },
				inputLabel: 'boolean',
				outputLabel: 'boolean',
				params: [false, false]
			}
		]
	},
	{
		title: 'Numeric',
		items: [
			{
				demo: 'check',

				description: 'Checks if a number is even.',
				title: 'even',
				testFunction: even,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'boolean',
				params: [4]
			},
			{
				demo: 'check',

				description: 'Checks if a number is odd.',
				title: 'odd',
				testFunction: odd,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'boolean',
				params: [5]
			},
			{
				demo: 'check',

				description: 'Checks if a number is divisible by another number.',
				title: 'divisibleBy',
				testFunction: divisibleBy,
				type: { from: 'number', to: 'boolean' },
				inputLabel: 'number',
				outputLabel: 'number',
				params: [10, 2]
			}
		]
	},
	{
		title: 'Existence',
		items: [
			{
				demo: 'check',

				description: 'Checks if a value exists.',
				title: 'exists',
				testFunction: exists,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'any',
				outputLabel: 'boolean',
				params: [null]
			},
			{
				demo: 'check',

				description: 'Checks if a value does not exist.',
				title: 'doesNotExist',
				testFunction: doesNotExist,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'any',
				outputLabel: 'boolean',
				params: [undefined]
			}
		]
	},
	{
		title: 'Date',
		items: [
			{
				demo: 'check',

				description: 'Checks if a date is before another date.',
				title: 'before',
				testFunction: before,
				type: { from: 'date', to: 'boolean' },
				inputLabel: 'Date',
				outputLabel: 'Date',
				params: [new Date('2020-01'), new Date('2020-01-02')]
			},
			{
				demo: 'check',

				description: 'Checks if a date is after another date.',
				title: 'after',
				testFunction: after,
				type: { from: 'date', to: 'boolean' },
				inputLabel: 'Date',
				outputLabel: 'Date',
				params: [new Date('2020-01'), new Date('2020-01-01')]
			},
			{
				demo: 'check',

				description: 'Checks if a date is between two dates.',
				title: 'betweenDates',
				testFunction: betweenDates,
				type: { from: 'date', to: 'boolean' },
				inputLabel: 'Date',
				outputLabel: 'DateArray',
				params: [new Date('2020-01'), [new Date('2020-01-01'), new Date('2020-01-03')]]
			},
			{
				demo: 'check',

				description: 'Checks if two dates are on the same day.',
				title: 'sameDay',
				testFunction: sameDay,
				type: { from: 'date', to: 'boolean' },
				inputLabel: 'Date',
				outputLabel: 'Date',
				params: [new Date('2020-01'), new Date('2020-01-01')]
			}
		]
	},
	{
		title: 'Object/Key',
		items: [
			{
				demo: 'check',

				description: 'Checks if a key exists in an object.',
				title: 'keyExists',
				testFunction: keyExists,
				type: { from: 'object', to: 'boolean' },
				inputLabel: 'object',
				outputLabel: 'string',
				params: [
					{
						hello: 'world'
					},
					'hello'
				]
			},
			{
				demo: 'check',

				description: 'Checks if a key does not exist in an object.',
				title: 'keyDoesNotExist',
				testFunction: keyDoesNotExist,
				type: { from: 'object', to: 'boolean' },
				inputLabel: 'object',
				outputLabel: 'string',
				params: [
					{
						hello: 'world'
					},
					'world'
				]
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
	},

	{
		title: 'Misc',
		items: [
			{
				demo: 'check',
				title: 'checkType',
				description: 'Checks if a value is of a specific type.',
				testFunction: checkType,
				type: { from: 'string', to: 'boolean' },
				inputLabel: 'any',
				outputLabel: 'string',
				params: ['Hello', 'string']
			}
		]
	}
];
