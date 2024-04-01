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
                converter: inArray,
                from: 'number',
                to: 'number[]',
                value1: 3,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notInArray',
                converter: notInArray,
                from: 'number',
                to: 'number[]',
                value1: 6,
                value2: [1, 2, 3, 4, 5]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'empty',
                converter: empty,
                from: 'any[]',
                to: 'boolean',
                value1: [],
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'notEmpty',
                converter: notEmpty,
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
                converter: isEqualTo,
                from: 'string',
                to: 'number',
                value1: '5',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isNotEqualTo',
                converter: isNotEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThan',
                converter: isGreaterThan,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThan',
                converter: isLessThan,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isGreaterThanOrEqualTo',
                converter: isGreaterThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 10,
                value2: 10
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isLessThanOrEqualTo',
                converter: isLessThanOrEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyEqualTo',
                converter: isStrictlyEqualTo,
                from: 'number',
                to: 'number',
                value1: 5,
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'isStrictlyNotEqualTo',
                converter: isStrictlyNotEqualTo,
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
                converter: startsWith,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'Hel'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'endsWith',
                converter: endsWith,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'world!'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'contains',
                converter: contains,
                from: 'stringA',
                to: 'stringB',
                value1: 'Hello, world!',
                value2: 'lo, wo'
            },
            {
                type: 'check',
                readOnly: false,
                title: 'matches',
                converter: matches,
                from: 'string',
                to: 'RegExp',
                value1: 'Hello, world!',
                value2: /world!$/
            },
            {
                type: 'check',
                readOnly: false,
                title: 'regex',
                converter: regex,
                from: 'string',
                to: 'RegExp',
                value1: 'Hello, world!',
                value2: /world!$/
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthEquals',
                converter: lengthEquals,
                from: 'string',
                to: 'number',
                value1: 'Hello',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthGreaterThan',
                converter: lengthGreaterThan,
                from: 'string',
                to: 'number',
                value1: 'Hello, world!',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'lengthLessThan',
                converter: lengthLessThan,
                from: 'string',
                to: 'number',
                value1: 'Hi',
                value2: 5
            },
            {
                type: 'check',
                readOnly: false,
                title: 'validURL',
                converter: validURL,
                from: 'string',
                to: 'boolean',
                value1: "https://www.example.com",
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'validEmail',
                converter: validEmail,
                from: 'string',
                to: 'boolean',
                value1: "email@example.com",
                value2: undefined
            },
            {
                type: 'check',
                readOnly: false,
                title: 'domainMatches',
                converter: domainMatches,
                from: 'string',
                to: 'string',
                value1: "https://www.example.com",
                value2: "www.example.com"
            }
        ]
    },
    {
        title: 'Data ',
        items: [
            {
                readOnly: true,
                title: 'objectToArray',
                converter: objectToArray,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'arrayOfKeyValuePairs'
            },
            {
                readOnly: true,
                title: 'arrayToObject',
                converter: arrayToObject,
                defaultValue: [['key1', 'value1'], ['key2', 'value2']],
                from: 'arrayOfKeyValuePairs',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'mapToObject',
                converter: mapToObject,
                defaultValue: new Map([['key1', 'value1'], ['key2', 'value2']]),
                from: 'Map',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToMap',
                converter: objectToMap,
                defaultValue: { key1: 'value1', key2: 'value2' },
                from: 'object',
                to: 'Map'
            },
            {
                readOnly: true,
                title: 'setToArray',
                converter: setToArray,
                defaultValue: new Set(['value1', 'value2']),
                from: 'Set',
                to: 'array'
            },
            {
                readOnly: true,
                title: 'arrayToSet',
                converter: arrayToSet,
                defaultValue: ['value1', 'value2'],
                from: 'array',
                to: 'Set'
            },
            {
                readOnly: true,
                title: 'arrayToFlatArray',
                converter: arrayToFlatArray,
                defaultValue: [1, [2, [3, [4, 5]]]],
                from: 'nestedArray',
                to: 'flattenedArray'
            },
            {
                readOnly: true,
                title: 'arrayToGroup',
                converter: arrayToGroup,
                defaultValue: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }, { category: 'vegetable', name: 'carrot' }],
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
                readOnly: false,
                title: 'and',
                converter: and,
                from: 'boolean[]',
                to: 'boolean',
                value1: [true, true, false],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'or',
                converter: or,
                from: 'boolean[]',
                to: 'boolean',
                value1: [false, false, true],
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'not',
                converter: not,
                from: 'boolean',
                to: 'boolean',
                value1: false,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'xor',
                converter: xor,
                from: 'boolean',
                to: 'boolean',
                value1: true,
                value2: false
            },
            {
                type: 'check',
                readOnly: false,
                title: 'nand',
                converter: nand,
                from: 'boolean',
                to: 'boolean',
                value1: true,
                value2: true
            },
            {
                type: 'check',
                readOnly: false,
                title: 'nor',
                converter: nor,
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
                readOnly: false,
                title: 'even',
                converter: even,
                from: 'number',
                to: 'boolean',
                value1: 4,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'odd',
                converter: odd,
                from: 'number',
                to: 'boolean',
                value1: 5,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'divisibleBy',
                converter: divisibleBy,
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
                readOnly: false,
                title: 'exists',
                converter: exists,
                from: 'any',
                to: 'boolean',
                value1: null,
                value2: undefined // This value is not used for this check
            },
            {
                type: 'check',
                readOnly: false,
                title: 'doesNotExist',
                converter: doesNotExist,
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
                readOnly: false,
                title: 'before',
                converter: before,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-01'),
                value2: new Date('2020-01-02')
            },
            {
                type: 'check',
                readOnly: false,
                title: 'after',
                converter: after,
                from: 'Date',
                to: 'Date',
                value1: new Date('2020-01-02'),
                value2: new Date('2020-01-01')
            },
            {
                type: 'check',
                readOnly: false,
                title: 'betweenDates',
                converter: betweenDates,
                from: 'Date',
                to: 'Date[]',
                value1: new Date('2020-01-02'),
                value2: [new Date('2020-01-01'), new Date('2020-01-03')]
            },
            {
                type: 'check',
                readOnly: false,
                title: 'sameDay',
                converter: sameDay,
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
                readOnly: false,
                title: 'keyExists',
                converter: keyExists,
                from: 'object',
                to: 'string',
                value1: { hello: "world" },
                value2: "hello"
            },
            {
                type: 'check',
                readOnly: false,
                title: 'keyDoesNotExist',
                converter: keyDoesNotExist,
                from: 'object',
                to: 'string',
                value1: { hello: "world" },
                value2: "world"
            },

        ]
    },
    {
        title: 'Array Filtering',
        items: [


            {
                type: 'filter',
                readOnly: false,
                title: 'Object Array to Array of Strings',
                converter: objectArrayToArrayOfString,
                from: 'arrayOfObjects',
                to: 'arrayOfStrings',
                defaultValue: 'John',
                data: [{ name: "John", age: 30 }, { name: "Jane", occupation: "Developer" }]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array Values to String',
                description: 'Flattens a nested array of objects and concatenates all values into a single string.',
                converter: nestedObjectArrayValuesToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array Keys to String',
                description: 'Flattens a nested array of objects and concatenates all keys into a single string.',
                converter: nestedObjectArrayKeysToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'occupation', // Example key to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array to String',
                description: 'Flattens a nested array of objects and converts each object to a string representation.',
                converter: nestedObjectArrayToString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'John', // Example name to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Nested Object Array to Query String',
                description: 'Flattens a nested array of objects and converts each object to a query string representation.',
                converter: nestedObjectArrayToQueryString,
                from: 'nestedArrayOfObjects',
                to: 'string',
                defaultValue: 'age=30', // Example query string piece to search for in demonstration
                data: [[{ name: "John", age: 30 }, [{ name: "Jane", occupation: "Developer" }]]]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Array With Object And String',
                description: 'Converts an array of objects into an array with each object accompanied by its string representation.',
                converter: arrayWithObjectAndString,
                from: 'arrayOfObjects',
                to: 'arrayOfOriginalAndString',
                defaultValue: 'Developer', // Example search term for demonstration
                data: [{ name: "John", age: 30 }, { name: "Jane", occupation: "Developer" }]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Search String',
                description: 'Searches a string for a partial match regardless of case.',
                converter: searchString,
                from: 'string',
                to: 'boolean',
                defaultValue: "fox", // The term users might search for in the string
                data: "The quick brown fox jumps over the lazy dog."
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Filter Array by String (Retain Original Format)',
                description: 'Filters an array of transformed objects, returning only those that match the search term, in their original format.',
                converter: filterArrayByString,
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfObjects',
                defaultValue: "Developer", // Search term used for filtering the array
                data: [
                    { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
                    { original: { name: "Jane", occupation: "Developer", experience: "5 years" }, objectString: "Jane, Developer, 5 years" }
                ]
            },
            {
                type: 'filter',
                readOnly: false,
                title: 'Filter Array by String (Retain Transformed Format)',
                description: 'Filters an array of transformed objects based on a search term, retaining the transformed format.',
                converter: filterArrayByStringRaw,
                from: 'arrayOfTransformedObjects',
                to: 'arrayOfTransformedObjects',
                defaultValue: "Developer", // Search term used for filtering the array
                data: [
                    { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
                    { original: { name: "Jane", occupation: "Developer", experience: "5 years" }, objectString: "Jane, Developer, 5 years" }
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
                converter: checkType,
                from: 'any',
                to: 'string',
                value1: "Hello",
                value2: 'string'
            }
        ]
    }

];
