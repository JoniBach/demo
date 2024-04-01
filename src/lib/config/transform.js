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
    searchString
} from '@jonibach/transform';

export default [
    {
        title: 'Array',
        items: [
            {
                type: 'check',
                readOnly: false,
                title: 'inArray',
                description: 'Checks if a value is in an array.',
                testFunction: inArray,
                from: 'number',
                to: 'number[]',
                value1: 3,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notInArray',
                description: 'Checks if a value is not in an array.',
                testFunction: notInArray,
                from: 'number',
                to: 'number[]',
                value1: 6,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'empty',
                description: 'Checks if an array is empty.',
                testFunction: empty,
                from: 'any[]',
                to: 'boolean',
                value1: [],
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notEmpty',
                description: 'Checks if an array is not empty.',
                testFunction: notEmpty,
                from: 'any[]',
                to: 'boolean',
                value1: [1, 2, 3],
                value2: undefined
            }
        ]
    },
    {
        title: 'Comparison',
        items: [
            {
                type: 'check',
                readOnly: false,
                title: 'isEqualTo',
                description: 'Checks if two values are equal.',
                testFunction: isEqualTo,
                from: 'string',
                to: 'number',
                value1: '5',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isNotEqualTo',
                description: 'Checks if two values are not equal.',
                testFunction: isNotEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThan',
                description: 'Checks if a value is greater than another value.',
                testFunction: isGreaterThan,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThan',
                description: 'Checks if a value is less than another value.',
                testFunction: isLessThan,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThanOrEqualTo',
                description: 'Checks if a value is greater than or equal to another value.',
                testFunction: isGreaterThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThanOrEqualTo',
                description: 'Checks if a value is less than or equal to another value.',
                testFunction: isLessThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyEqualTo',
                description: 'Checks if two values are strictly equal.',
                testFunction: isStrictlyEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyNotEqualTo',
                description: 'Checks if two values are strictly not equal.',
                testFunction: isStrictlyNotEqualTo,
                from: 'number',
                to: 'string',
                value1: 5,
                value2: '5'
            }
        ]
    },
    {
        title: 'String',
        items: [
            {
                type: 'check',
                readOnly: false,
                title: 'startsWith',
                description: 'Checks if a string starts with another string.',
                testFunction: startsWith,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'Hel'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'endsWith',
                description: 'Checks if a string ends with another string.',
                testFunction: endsWith,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'world!'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'contains',
                description: 'Checks if a string contains another string.',
                testFunction: contains,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'lo, wo'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'matches',
                description: 'Checks if a string matches a regular expression.',
                testFunction: matches,
                from: 'string',
                to: 'RegExp',
                value1: 'Hello, world!',
                value2: /world!$/
            },
            {
                type: 'check',
                readOnly: false,
                title: 'regex',
                description: 'Checks if a string matches a regular expression.',
                testFunction: regex,
                from: 'string',
                to: 'RegExp',
                value1: 'Hello, world!',
                value2: /world!$/
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthEquals',
                description: 'Checks if a string has a specific length.',

                testFunction: lengthEquals,
                from: 'string',
                to: 'number',
                value1: 'Hello',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthGreaterThan',
                description: 'Checks if a string has a length greater than a specific value.',
                testFunction: lengthGreaterThan,
                from: 'string',
                to: 'number',
                value1: 'Hello, world!',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthLessThan',
                description: 'Checks if a string has a length less than a specific value.',
                testFunction: lengthLessThan,
                from: 'string',
                to: 'number',
                value1: 'Hi',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'validURL',
                description: 'Checks if a string is a valid URL.',
                testFunction: validURL,
                from: 'string',
                to: 'boolean',
                value1: 'https://www.example.com',
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'validEmail',
                description: 'Checks if a string is a valid email address.',
                testFunction: validEmail,
                from: 'string',
                to: 'boolean',
                value1: 'email@example.com',
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'domainMatches',
                description: 'Checks if a string is a valid domain.',
                testFunction: domainMatches,
                from: 'string',
                to: 'string',
                value1: 'https://www.example.com',
                value2: 'www.example.com'
            }
        ]
    },
    {
        title: 'Data ',
        items: [
            {
                readOnly: true,
                title: 'objectToArray',

                description: 'Converts an object to an array of key-value pairs.',
                testFunction: objectToArray,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'arrayOfKeyValuePairs'
            },
            {
                readOnly: true,
                title: 'arrayToObject',
                description: 'Converts an array of key-value pairs to an object.',
                testFunction: arrayToObject,
                defaultValue: [
                    ['key1', 'value1'],
                    ['key2', 'value2']
                ],
                from: 'arrayOfKeyValuePairs',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'mapToObject',

                description: 'Converts a map to an object.',
                testFunction: mapToObject,
                defaultValue: new Map([
                    ['key1', 'value1'],
                    ['key2', 'value2']
                ]),
                from: 'Map',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToMap',
                description: 'Converts an object to a map.',
                testFunction: objectToMap,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'Map'
            },
            {
                readOnly: true,
                title: 'setToArray',

                description: 'Converts a set to an array.',
                testFunction: setToArray,
                defaultValue: new Set(['value1', 'value2']),
                from: 'Set',
                to: 'array'
            },
            {
                readOnly: true,
                title: 'arrayToSet',
                description: 'Converts an array to a set.',
                testFunction: arrayToSet,
                defaultValue: ['value1', 'value2'],
                from: 'array',
                to: 'Set'
            },
            {
                readOnly: true,
                title: 'arrayToFlatArray',
                description: 'Converts a nested array to a flat array.',
                testFunction: arrayToFlatArray,
                defaultValue: [1, [2, [3, [4, 5]]]],
                from: 'nestedArray',
                to: 'flattenedArray'
            },
            {
                readOnly: true,
                title: 'arrayToGroup',
                description: 'Groups an array of objects by a key.',
                testFunction: arrayToGroup,
                defaultValue: [
                    { category: 'fruit', name: 'apple' },
                    { category: 'fruit', name: 'banana' },
                    { category: 'vegetable', name: 'carrot' }
                ],
                additionalParams: 'key: string',
                from: 'arrayOfObjects',
                to: 'objectGroupedByKey'
            }
        ]
    },
    {
        title: 'Logic',
        items: [
            {
                type: 'check',

                description: 'Checks if all values are true.',

                readOnly: false,
                title: 'and',
                testFunction: and,
                from: 'boolean[]',
                to: 'boolean',
                value1: [true, true, false],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',

                description: 'Checks if any value is true.',
                readOnly: false,
                title: 'or',
                testFunction: or,
                from: 'boolean[]',
                to: 'boolean',
                value1: [false, false, true],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'not',

                description: 'Checks if a value is false.',
                testFunction: not,
                from: 'boolean',
                to: 'boolean',
                value1: false,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',

                description: 'Checks if exactly one value is true.',
                readOnly: false,
                title: 'xor',
                testFunction: xor,
                from: 'boolean',
                to: 'boolean',
                value1: true,
                value2: false
            },
            {
                type: 'check',

                description: 'Checks if neither value is true.',
                readOnly: false,
                title: 'nand',
                testFunction: nand,
                from: 'boolean',
                to: 'boolean',
                value1: true,
                value2: true
            },
            {
                description: 'Checks if neither value is true.',
                type: 'check',
                readOnly: false,
                title: 'nor',
                testFunction: nor,
                from: 'boolean',
                to: 'boolean',
                value1: false,
                value2: false
            }
        ]
    },
    {
        title: 'Numeric',
        items: [
            {
                type: 'check',

                description: 'Checks if a number is even.',
                readOnly: false,
                title: 'even',
                testFunction: even,
                from: 'number',
                to: 'boolean',
                value1: 4,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',

                description: 'Checks if a number is odd.',
                readOnly: false,
                title: 'odd',
                testFunction: odd,
                from: 'number',
                to: 'boolean',
                value1: 5,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',

                description: 'Checks if a number is divisible by another number.',
                readOnly: false,
                title: 'divisibleBy',
                testFunction: divisibleBy,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 2
            }
        ]
    },
    {
        title: 'Existence',
        items: [
            {
                type: 'check',

                description: 'Checks if a value exists.',
                readOnly: false,
                title: 'exists',
                testFunction: exists,
                from: 'any',
                to: 'boolean',
                value1: null,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',

                description: 'Checks if a value does not exist.',
                readOnly: false,
                title: 'doesNotExist',
                testFunction: doesNotExist,
                from: 'any',
                to: 'boolean',
                value1: undefined,
                value2: null // This value is not used for this check
            }
        ]
    },
    {
        title: 'Date',
        items: [
            {
                type: 'check',

                description: 'Checks if a date is before another date.',
                readOnly: false,
                title: 'before',
                testFunction: before,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-01'),
                value2: new Date('2020-01-02')
            },
            {
                type: 'check',

                description: 'Checks if a date is after another date.',
                readOnly: false,
                title: 'after',
                testFunction: after,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-02'),
                value2: new Date('2020-01-01')
            },
            {
                type: 'check',

                description: 'Checks if a date is between two dates.',
                readOnly: false,
                title: 'betweenDates',
                testFunction: betweenDates,
                from: 'Date',
                to: 'Date[]',
                value1: new Date('2020-01-02'),
                value2: [new Date('2020-01-01'), new Date('2020-01-03')]
            },
            {
                type: 'check',

                description: 'Checks if two dates are on the same day.',
                readOnly: false,
                title: 'sameDay',
                testFunction: sameDay,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-01'),
                value2: new Date('2020-01-01')
            }
        ]
    },
    {
        title: 'Object/Key',
        items: [
            {
                type: 'check',

                description: 'Checks if a key exists in an object.',
                readOnly: false,
                title: 'keyExists',
                testFunction: keyExists,
                from: 'object',
                to: 'string',
                value1: { hello: 'world' },
                value2: 'hello'
            },
            {
                type: 'check',

                description: 'Checks if a key does not exist in an object.',
                readOnly: false,
                title: 'keyDoesNotExist',
                testFunction: keyDoesNotExist,
                from: 'object',
                to: 'string',
                value1: { hello: 'world' },
                value2: 'world'
            }
        ]
    },
    {
        title: 'Array Filtering',
        items: [
            {
                type: 'filter',

                description: 'Converts an array of objects into an array of strings.',
                readOnly: false,
                testFunction: objectArrayToArrayOfString,
                title: 'objectArrayToArrayOfString',
                from: 'arrayOfObjects',
                to: 'arrayOfStrings',
                defaultValue: 'John',
                data: [
                    { name: 'John', age: 30 },
                    { name: 'Jane', occupation: 'Developer' }
                ]
            },
            {
                type: 'filter',

                readOnly: false,
                description:
                    'Flattens a nested array of objects and concatenates all values into a single string.',
                testFunction: nestedObjectArrayValuesToString,
                title: 'nestedObjectArrayValuesToString',
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Flattens a nested array of objects and concatenates all keys into a single string.',
                testFunction: nestedObjectArrayKeysToString,
                title: 'nestedObjectArrayKeysToString',
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'occupation', // Example key to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Flattens a nested array of objects and converts each object to a string representation.',
                testFunction: nestedObjectArrayToString,
                title: 'nestedObjectArrayToString',
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'John', // Example name to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Flattens a nested array of objects and converts each object to a query string representation.',
                testFunction: nestedObjectArrayToQueryString,
                title: 'nestedObjectArrayToQueryString',
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'age=30', // Example query string piece to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Converts an array of objects into an array with each object accompanied by its string representation.',
                testFunction: arrayWithObjectAndString,
                title: 'arrayWithObjectAndString',
                from: 'arrayOfObjects',
                to: 'arrayOfOriginalAndString',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [
                    { name: 'John', age: 30 },
                    { name: 'Jane', occupation: 'Developer' }
                ]
            },
            {
                type: 'filter',
                readOnly: false,
                description: 'Searches a string for a partial match regardless of case.',
                testFunction: searchString,
                title: 'searchString',
                from: 'string',
                to: 'boolean',
                defaultValue: 'fox', // The term users might search for in the string
                data: 'The quick brown fox jumps over the lazy dog.'
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Filters an array of transformed objects, returning only those that match the search term, in their original format.',
                testFunction: filterArrayByString,
                title: 'filterArrayByString',
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfObjects',
                defaultValue: 'Developer', // Search term used for filtering the array
                data: [
                    { original: { name: 'Dave', age: 42 }, objectString: 'Dave, 42' },
                    {
                        original: { name: 'Jane', occupation: 'Developer', experience: '5 years' },
                        objectString: 'Jane, Developer, 5 years'
                    }
                ]
            },
            {
                type: 'filter',
                readOnly: false,
                description:
                    'Filters an array of transformed objects based on a search term, retaining the transformed format.',
                testFunction: filterArrayByStringRaw,
                title: 'filterArrayByStringRaw',
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfTransformedObjects',
                defaultValue: 'Developer', // Search term used for filtering the array
                data: [
                    { original: { name: 'Dave', age: 42 }, objectString: 'Dave, 42' },
                    {
                        original: { name: 'Jane', occupation: 'Developer', experience: '5 years' },
                        objectString: 'Jane, Developer, 5 years'
                    }
                ]
            }
        ]
    },

    {
        title: 'Misc',
        items: [
            {
                type: 'check',
                readOnly: false,
                title: 'checkType',
                description: 'Checks if a value is of a specific type.',
                testFunction: checkType,
                from: 'any',
                to: 'string',
                value1: 'Hello',
                value2: 'string'
            }
        ]
    }
];
