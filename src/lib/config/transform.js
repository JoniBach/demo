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
    nor
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


    // {
    //     title: 'Checks',
    //     items: [
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isEqualTo',
    //             converter: isEqualTo,
    //             from: 'string',
    //             to: 'number',
    //             value1: '5',
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isEqualTo',
    //             converter: isEqualTo,
    //             from: 'string',
    //             to: 'number',
    //             value1: '5',
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isNotEqualTo',
    //             converter: isNotEqualTo,
    //             from: 'number',
    //             to: 'number',
    //             value1: 5,
    //             value2: 10
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isGreaterThan',
    //             converter: isGreaterThan,
    //             from: 'number',
    //             to: 'number',
    //             value1: 10,
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isLessThan',
    //             converter: isLessThan,
    //             from: 'number',
    //             to: 'number',
    //             value1: 5,
    //             value2: 10
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isGreaterThanOrEqualTo',
    //             converter: isGreaterThanOrEqualTo,
    //             from: 'number',
    //             to: 'number',
    //             value1: 10,
    //             value2: 10
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isLessThanOrEqualTo',
    //             converter: isLessThanOrEqualTo,
    //             from: 'number',
    //             to: 'number',
    //             value1: 5,
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isStrictlyEqualTo',
    //             converter: isStrictlyEqualTo,
    //             from: 'number',
    //             to: 'number',
    //             value1: 5,
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'isStrictlyNotEqualTo',
    //             converter: isStrictlyNotEqualTo,
    //             from: 'number',
    //             to: 'string',
    //             value1: 5,
    //             value2: "5"
    //         },
    //         // Example for a custom function, you need to adjust the `converter` with an actual function reference
    //         {
    //             type: 'custom',
    //             readOnly: false,
    //             title: 'exists',
    //             converter: exists,
    //             from: 'any',
    //             to: 'boolean',
    //             value1: null,
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'custom',
    //             readOnly: false,
    //             title: 'doesNotExist',
    //             converter: doesNotExist,
    //             from: 'any',
    //             to: 'boolean',
    //             value1: undefined,
    //             value2: null // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'checkType',
    //             converter: checkType,
    //             from: 'string',
    //             to: 'boolean',
    //             value1: "Hello",
    //             value2: 'string'
    //         },

    //         // String Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'startsWith',
    //             converter: startsWith,
    //             from: 'stringA',
    //             to: 'stringB',
    //             value1: "Hello, world!",
    //             value2: "Hel"
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'endsWith',
    //             converter: endsWith,
    //             from: 'stringA',
    //             to: 'stringB',
    //             value1: "Hello, world!",
    //             value2: "world!"
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'contains',
    //             converter: contains,
    //             from: 'stringA',
    //             to: 'stringB',
    //             value1: "Hello, world!",
    //             value2: "lo, wo"
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'matches',
    //             converter: matches,
    //             from: 'string',
    //             to: 'RegExp',
    //             value1: "Hello, world!",
    //             value2: /world!$/
    //         },

    //         // Array and Collection Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'inArray',
    //             converter: inArray,
    //             from: 'number',
    //             to: 'number[]',
    //             value1: 3,
    //             value2: [1, 2, 3, 4, 5]
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'notInArray',
    //             converter: notInArray,
    //             from: 'number',
    //             to: 'number[]',
    //             value1: 6,
    //             value2: [1, 2, 3, 4, 5]
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'empty',
    //             converter: empty,
    //             from: 'any[]',
    //             to: 'boolean',
    //             value1: [],
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'notEmpty',
    //             converter: notEmpty,
    //             from: 'any[]',
    //             to: 'boolean',
    //             value1: [1, 2, 3],
    //             value2: undefined // This value is not used for this check
    //         },

    //         // Example for a logical condition
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'and',
    //             converter: and,
    //             from: 'boolean[]',
    //             to: 'boolean',
    //             value1: [true, true, false],
    //             value2: undefined // This value is not used for this check, the function takes an array
    //         },

    //         // Example for numeric conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'even',
    //             converter: even,
    //             from: 'number',
    //             to: 'boolean',
    //             value1: 4,
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'odd',
    //             converter: odd,
    //             from: 'number',
    //             to: 'boolean',
    //             value1: 5,
    //             value2: undefined // This value is not used for this check
    //         },
    //         // Logical Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'or',
    //             converter: or,
    //             from: 'boolean[]',
    //             to: 'boolean',
    //             value1: [false, false, true],
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'not',
    //             converter: not,
    //             from: 'checkBoolean',
    //             to: 'boolean',
    //             value1: false,
    //             value2: undefined // This value is not used for this check
    //         },

    //         // Numeric Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'divisibleBy',
    //             converter: divisibleBy,
    //             from: 'number',
    //             to: 'number',
    //             value1: 10,
    //             value2: 2
    //         },

    //         // String Specific
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'regex',
    //             converter: regex,
    //             from: 'string',
    //             to: 'RegExp',
    //             value1: "Hello, world!",
    //             value2: /world!$/
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'lengthEquals',
    //             converter: lengthEquals,
    //             from: 'string',
    //             to: 'number',
    //             value1: "Hello",
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'lengthGreaterThan',
    //             converter: lengthGreaterThan,
    //             from: 'string',
    //             to: 'number',
    //             value1: "Hello, world!",
    //             value2: 5
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'lengthLessThan',
    //             converter: lengthLessThan,
    //             from: 'string',
    //             to: 'number',
    //             value1: "Hi",
    //             value2: 5
    //         },

    //         // Date and Time Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'before',
    //             converter: before,
    //             from: 'Date',
    //             to: 'Date',
    //             value1: new Date('2020-01-01'),
    //             value2: new Date('2020-01-02')
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'after',
    //             converter: after,
    //             from: 'Date',
    //             to: 'Date',
    //             value1: new Date('2020-01-02'),
    //             value2: new Date('2020-01-01')
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'betweenDates',
    //             converter: betweenDates,
    //             from: 'Date',
    //             to: 'Date[]',
    //             value1: new Date('2020-01-02'),
    //             value2: [new Date('2020-01-01'), new Date('2020-01-03')]
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'sameDay',
    //             converter: sameDay,
    //             from: 'Date',
    //             to: 'Date',
    //             value1: new Date('2020-01-01'),
    //             value2: new Date('2020-01-01')
    //         },

    //         // JSON and Object Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'keyExists',
    //             converter: keyExists,
    //             from: 'object',
    //             to: 'string',
    //             value1: { hello: "world" },
    //             value2: "hello"
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'keyDoesNotExist',
    //             converter: keyDoesNotExist,
    //             from: 'object',
    //             to: 'string',
    //             value1: { hello: "world" },
    //             value2: "world"
    //         },

    //         // Network and URL Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'validURL',
    //             converter: validURL,
    //             from: 'string',
    //             to: 'boolean',
    //             value1: "https://www.example.com",
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'validEmail',
    //             converter: validEmail,
    //             from: 'string',
    //             to: 'boolean',
    //             value1: "email@example.com",
    //             value2: undefined // This value is not used for this check
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'domainMatches',
    //             converter: domainMatches,
    //             from: 'stringA',
    //             to: 'stringB',
    //             value1: "https://www.example.com",
    //             value2: "www.example.com"
    //         },

    //         // File and Path Conditions

    //         // Advanced Logical Conditions
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'xor',
    //             converter: xor,
    //             from: 'checkBoolean',
    //             to: 'boolean',
    //             value1: true,
    //             value2: false
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'nand',
    //             converter: nand,
    //             from: 'checkBoolean',
    //             to: 'boolean',
    //             value1: true,
    //             value2: false
    //         },
    //         {
    //             type: 'check',
    //             readOnly: false,
    //             title: 'nor',
    //             converter: nor,
    //             from: 'checkBoolean',
    //             to: 'boolean',
    //             value1: false,
    //             value2: false
    //         },
    //     ],
    // },
];
