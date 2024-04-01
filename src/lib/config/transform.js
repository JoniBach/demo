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
                demo: 'check', //
                title: 'inArray', //
                description: 'Checks if a value is in an array.', //
                testFunction: inArray, //
                inputLabel: 'number',
                outputLabel: 'numberArray',
                params: [
                    3,
                    [1, 2, 3, 4, 5]
                ],
            },






            {
                demo: 'check',
                title: 'inArray',
                description: 'Checks if a value is in an array.',
                testFunction: inArray,
                inputLabel: 'number',
                outputLabel: 'numberArray',
                params: [
                    3,
                    [1, 2, 3, 4, 5]
                ],
            },
            {
                demo: 'check',
                title: 'notInArray',
                description: 'Checks if a value is not in an array.',
                testFunction: notInArray,
                inputLabel: 'number',
                outputLabel: 'numberArray',
                params: [
                    6,
                    [1, 2, 3, 4, 5]
                ],
            },
            {
                demo: 'check',
                title: 'empty',
                description: 'Checks if an array is empty.',
                testFunction: empty,
                inputLabel: 'anyArray',
                outputLabel: 'boolean',
                params: [
                    [],
                    undefined
                ],
            },
            {
                demo: 'check',
                title: 'notEmpty',
                description: 'Checks if an array is not empty.',
                testFunction: notEmpty,
                inputLabel: 'anyArray',
                outputLabel: 'boolean',
                params: [
                    [1, 2],
                    undefined
                ],
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
                inputLabel: 'string',
                outputLabel: 'number',
                params: [
                    '5',
                    5
                ],
            },
            {
                demo: 'check',
                title: 'isNotEqualTo',
                description: 'Checks if two values are not equal.',
                testFunction: isNotEqualTo,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    5,
                    10
                ],
            },
            {
                demo: 'check',
                title: 'isGreaterThan',
                description: 'Checks if a value is greater than another value.',
                testFunction: isGreaterThan,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    10,
                    5
                ],
            },
            {
                demo: 'check',
                title: 'isLessThan',
                description: 'Checks if a value is less than another value.',
                testFunction: isLessThan,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    5,
                    10
                ],
            },
            {
                demo: 'check',
                title: 'isGreaterThanOrEqualTo',
                description: 'Checks if a value is greater than or equal to another value.',
                testFunction: isGreaterThanOrEqualTo,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    10,
                    10
                ],
            },
            {
                demo: 'check',
                title: 'isLessThanOrEqualTo',
                description: 'Checks if a value is less than or equal to another value.',
                testFunction: isLessThanOrEqualTo,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    5,
                    5
                ],
            },
            {
                demo: 'check',
                title: 'isStrictlyEqualTo',
                description: 'Checks if two values are strictly equal.',
                testFunction: isStrictlyEqualTo,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    5,
                    5
                ],
            },
            {
                demo: 'check',
                title: 'isStrictlyNotEqualTo',
                description: 'Checks if two values are strictly not equal.',
                testFunction: isStrictlyNotEqualTo,
                inputLabel: 'number',
                outputLabel: 'string',
                params: [
                    5,
                    '5'
                ],
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
                inputLabel: 'stringA',
                outputLabel: 'stringB',
                params: [
                    'Hello!',
                    'Hel'
                ],
            },
            {
                demo: 'check',
                title: 'endsWith',
                description: 'Checks if a string ends with another string.',
                testFunction: endsWith,
                inputLabel: 'stringA',
                outputLabel: 'stringB',
                params: [
                    'Hello!',
                    'world!'
                ],
            },
            {
                demo: 'check',
                title: 'contains',
                description: 'Checks if a string contains another string.',
                testFunction: contains,
                inputLabel: 'stringA',
                outputLabel: 'stringB',
                params: [
                    'Hello!',
                    'lo, wo'
                ],
            },
            {
                demo: 'check',
                title: 'matches',
                description: 'Checks if a string matches a regular expression.',
                testFunction: matches,
                inputLabel: 'string',
                outputLabel: 'RegExp',
                params: [
                    'Hello!',
                    /world!$/
                ],
            },
            {
                demo: 'check',
                title: 'regex',
                description: 'Checks if a string matches a regular expression.',
                testFunction: regex,
                inputLabel: 'string',
                outputLabel: 'RegExp',
                params: [
                    'Hello!',
                    /world!$/
                ],
            },
            {
                demo: 'check',
                title: 'lengthEquals',
                description: 'Checks if a string has a specific length.',

                testFunction: lengthEquals,
                inputLabel: 'string',
                outputLabel: 'number',
                params: [
                    "Hello",
                    5
                ],
            },
            {
                demo: 'check',
                title: 'lengthGreaterThan',
                description: 'Checks if a string has a length greater than a specific value.',
                testFunction: lengthGreaterThan,
                inputLabel: 'string',
                outputLabel: 'number',
                params: [
                    'Hello!',
                    5
                ],
            },
            {
                demo: 'check',
                title: 'lengthLessThan',
                description: 'Checks if a string has a length less than a specific value.',
                testFunction: lengthLessThan,
                inputLabel: 'string',
                outputLabel: 'number',
                params: [
                    "Hi",
                    5
                ],
            },
            {
                demo: 'check',
                title: 'validURL',
                description: 'Checks if a string is a valid URL.',
                testFunction: validURL,
                inputLabel: 'string',
                outputLabel: 'boolean',
                params: [
                    'https://www.example',
                    undefined
                ],
            },
            {
                demo: 'check',
                title: 'validEmail',
                description: 'Checks if a string is a valid email address.',
                testFunction: validEmail,
                inputLabel: 'string',
                outputLabel: 'boolean',
                params: [
                    'email@example',
                    undefined
                ],
            },
            {
                demo: 'check',
                title: 'domainMatches',
                description: 'Checks if a string is a valid domain.',
                testFunction: domainMatches,
                inputLabel: 'string',
                outputLabel: 'string',
                params: [
                    'https://www.example',
                    'www.example.com'
                ],
            }
        ]
    },
    {
        title: 'Data ',
        items: [
            {
                title: 'objectToArray',

                description: 'Converts an object to an array of key-value pairs.',
                testFunction: objectToArray,
                defaultValue: { key1: 'value1', key2: 'value2' },
                inputLabel: 'object',
                outputLabel: 'arrayOfKeyValuePairs'
            },
            {
                title: 'arrayToObject',
                description: 'Converts an array of key-value pairs to an object.',
                testFunction: arrayToObject,
                defaultValue: [
                    ['key1', 'value1'],
                    ['key2', 'value2']
                ],
                inputLabel: 'arrayOfKeyValuePairs',
                outputLabel: 'object'
            },
            {
                title: 'mapToObject',

                description: 'Converts a map to an object.',
                testFunction: mapToObject,
                defaultValue: new Map([
                    ['key1', 'value1'],
                    ['key2', 'value2']
                ]),
                inputLabel: 'Map',
                outputLabel: 'object'
            },
            {
                title: 'objectToMap',
                description: 'Converts an object to a map.',
                testFunction: objectToMap,
                defaultValue: { key1: 'value1', key2: 'value2' },
                inputLabel: 'object',
                outputLabel: 'Map'
            },
            {
                title: 'setToArray',

                description: 'Converts a set to an array.',
                testFunction: setToArray,
                defaultValue: new Set(['value1', 'value2']),
                inputLabel: 'Set',
                outputLabel: 'array'
            },
            {
                title: 'arrayToSet',
                description: 'Converts an array to a set.',
                testFunction: arrayToSet,
                defaultValue: ['value1', 'value2'],
                inputLabel: 'array',
                outputLabel: 'Set'
            },
            {
                title: 'arrayToFlatArray',
                description: 'Converts a nested array to a flat array.',
                testFunction: arrayToFlatArray,
                defaultValue: [1, [2, [3, [4, 5]]]],
                inputLabel: 'nestedArray',
                outputLabel: 'flattenedArray'
            },
            {
                title: 'arrayToGroup',
                description: 'Groups an array of objects by a key.',
                testFunction: arrayToGroup,
                defaultValue: [
                    { category: 'fruit', name: 'apple' },
                    { category: 'fruit', name: 'banana' },
                    { category: 'vegetable', name: 'carrot' }
                ],
                additionalParams: 'key: string',
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
                inputLabel: 'booleanArray',
                outputLabel: 'boolean',
                params: [
                    [true, true],
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',

                description: 'Checks if any value is true.',
                title: 'or',
                testFunction: or,
                inputLabel: 'booleanArray',
                outputLabel: 'boolean',
                params: [
                    [false, false],
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',
                title: 'not',

                description: 'Checks if a value is false.',
                testFunction: not,
                inputLabel: 'boolean',
                outputLabel: 'boolean',
                params: [
                    false,
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',

                description: 'Checks if exactly one value is true.',
                title: 'xor',
                testFunction: xor,
                inputLabel: 'boolean',
                outputLabel: 'boolean',
                params: [
                    true,
                    false
                ],
            },
            {
                demo: 'check',

                description: 'Checks if neither value is true.',
                title: 'nand',
                testFunction: nand,
                inputLabel: 'boolean',
                outputLabel: 'boolean',
                params: [
                    true,
                    true
                ],
            },
            {
                description: 'Checks if neither value is true.',
                demo: 'check',
                title: 'nor',
                testFunction: nor,
                inputLabel: 'boolean',
                outputLabel: 'boolean',
                params: [
                    false,
                    false
                ],
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
                inputLabel: 'number',
                outputLabel: 'boolean',
                params: [
                    4,
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a number is odd.',
                title: 'odd',
                testFunction: odd,
                inputLabel: 'number',
                outputLabel: 'boolean',
                params: [
                    5,
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a number is divisible by another number.',
                title: 'divisibleBy',
                testFunction: divisibleBy,
                inputLabel: 'number',
                outputLabel: 'number',
                params: [
                    10,
                    2
                ],
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
                inputLabel: 'any',
                outputLabel: 'boolean',
                params: [
                    null,
                    undefined // This value is not used for this check
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a value does not exist.',
                title: 'doesNotExist',
                testFunction: doesNotExist,
                inputLabel: 'any',
                outputLabel: 'boolean',
                params: [
                    undefined,
                    null // This value is not used for this check
                ],
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
                inputLabel: 'Date',
                outputLabel: 'Date',
                params: [
                    new Date('2020-01'),
                    new Date('2020-01-02')
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a date is after another date.',
                title: 'after',
                testFunction: after,
                inputLabel: 'Date',
                outputLabel: 'Date',
                params: [
                    new Date('2020-01'),
                    new Date('2020-01-01')
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a date is between two dates.',
                title: 'betweenDates',
                testFunction: betweenDates,
                inputLabel: 'Date',
                outputLabel: 'DateArray',
                params: [
                    new Date('2020-01'),
                    [new Date('2020-01-01'), new Date('2020-01-03')]
                ],
            },
            {
                demo: 'check',

                description: 'Checks if two dates are on the same day.',
                title: 'sameDay',
                testFunction: sameDay,
                inputLabel: 'Date',
                outputLabel: 'Date',
                params: [
                    new Date('2020-01'),
                    new Date('2020-01-01')
                ],
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
                inputLabel: 'object',
                outputLabel: 'string',
                params: [
                    {
                        hello: 'world'
                    },
                    'hello'
                ],
            },
            {
                demo: 'check',

                description: 'Checks if a key does not exist in an object.',
                title: 'keyDoesNotExist',
                testFunction: keyDoesNotExist,
                inputLabel: 'object',
                outputLabel: 'string',
                params: [
                    {
                        hello: 'world'
                    },
                    'world'
                ],
            }
        ]
    },
    {
        title: 'Array Filtering',
        items: [
            {
                type: 'filter',

                description: 'Converts an array of objects into an array of strings.',
                testFunction: objectArrayToArrayOfString,
                title: 'objectArrayToArrayOfString',
                inputLabel: 'arrayOfObjects',
                outputLabel: 'arrayOfStrings',
                defaultValue: 'John',
                data: [
                    { name: 'John', age: 30 },
                    { name: 'Jane', occupation: 'Developer' }
                ]
            },
            {
                type: 'filter',

                description:
                    'Flattens a nested array of objects and concatenates all values into a single string.',
                testFunction: nestedObjectArrayValuesToString,
                title: 'nestedObjectArrayValuesToString',
                inputLabel: 'nestedArrayOfObjects',
                outputLabel: 'string',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                description:
                    'Flattens a nested array of objects and concatenates all keys into a single string.',
                testFunction: nestedObjectArrayKeysToString,
                title: 'nestedObjectArrayKeysToString',
                inputLabel: 'nestedArrayOfObjects',
                outputLabel: 'string',
                defaultValue: 'occupation', // Example key to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                description:
                    'Flattens a nested array of objects and converts each object to a string representation.',
                testFunction: nestedObjectArrayToString,
                title: 'nestedObjectArrayToString',
                inputLabel: 'nestedArrayOfObjects',
                outputLabel: 'string',
                defaultValue: 'John', // Example name to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                description:
                    'Flattens a nested array of objects and converts each object to a query string representation.',
                testFunction: nestedObjectArrayToQueryString,
                title: 'nestedObjectArrayToQueryString',
                inputLabel: 'nestedArrayOfObjects',
                outputLabel: 'string',
                defaultValue: 'age=30', // Example query string piece to search for in demonstration
                data: [[{ name: 'John', age: 30 }, [{ name: 'Jane', occupation: 'Developer' }]]]
            },
            {
                type: 'filter',
                description:
                    'Converts an array of objects into an array with each object accompanied by its string representation.',
                testFunction: arrayWithObjectAndString,
                title: 'arrayWithObjectAndString',
                inputLabel: 'arrayOfObjects',
                outputLabel: 'arrayOfOriginalAndString',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [
                    { name: 'John', age: 30 },
                    { name: 'Jane', occupation: 'Developer' }
                ]
            },
            {
                type: 'filter',
                description: 'Searches a string for a partial match regardless of case.',
                testFunction: searchString,
                title: 'searchString',
                inputLabel: 'string',
                outputLabel: 'boolean',
                defaultValue: 'fox', // The term users might search for in the string
                data: 'The quick brown fox jumps over the lazy dog.'
            },
            {
                type: 'filter',
                description:
                    'Filters an array of transformed objects, returning only those that match the search term, in their original format.',
                testFunction: filterArrayByString,
                title: 'filterArrayByString',
                inputLabel: 'arrayOfTransformedObjects',
                outputLabel: 'arrayOfObjects',
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
                description:
                    'Filters an array of transformed objects based on a search term, retaining the transformed format.',
                testFunction: filterArrayByStringRaw,
                title: 'filterArrayByStringRaw',
                inputLabel: 'arrayOfTransformedObjects',
                outputLabel: 'arrayOfTransformedObjects',
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
                demo: 'check',
                title: 'checkType',
                description: 'Checks if a value is of a specific type.',
                testFunction: checkType,
                inputLabel: 'any',
                outputLabel: 'string',
                params: [
                    'Hello',
                    'string'
                ],
            }
        ]
    }
];
