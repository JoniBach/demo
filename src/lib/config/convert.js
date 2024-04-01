import {
    atmospheresToPascals,
    binaryToDecimal,
    binaryToHexadecimal,
    binaryToString,
    btusToJoules,
    caloriesToJoules,
    celsiusToKelvin,
    complementaryHsl,
    compressString,
    csvToJson,
    cubicFeetToLiters,
    dateToDayOfWeek,
    dateToISOString,
    dateToLocalString,
    dateToTimestamp,
    decimalToBinary,
    decimalToHexadecimal,
    decimalToOctal,
    decompressToString,
    fahrenheitToKelvin,
    feetToMeters,
    gallonsToLiters,
    hexToHsl,
    hexToString,
    hexadecimalToBinary,
    hexadecimalToDecimal,
    horsepowerToWatts,
    hslToHex,
    hslToRgb,
    hslaToString,
    inchesToMeters,
    isoStringToDate,
    isoStringToTimestamp,
    joulesToBtus,
    joulesToCalories,
    jsonStringToObject,
    jsonToCsv,
    jsonToXml,
    jsonToYaml,
    kelvinToCelsius,
    kelvinToFahrenheit,
    kilogramsToOunces,
    kilogramsToPounds,
    litersToCubicFeet,
    litersToGallons,
    markdownToHtml,
    metersToFeet,
    metersToInches,
    metersToMiles,
    milesToMeters,
    objectToJsonString,
    octalToDecimal,
    ouncesToKilograms,
    pascalsToAtmospheres,
    pascalsToPsi,
    poundsToKilograms,
    psiToPascals,
    rgbToHsl,
    rgbaToString,
    stringToBinary,
    stringToHex,
    timestampToDate,
    timestampToISOString,
    urlToDecode,
    urlToEncode,
    wattsToHorsepower,
    webBase64ToString,
    webStringToBase64,
    xmlToJson,
    yamlToJson
} from '@jonibach/convert';

export default [
    {
        title: 'SI Units',
        items: [
            {
                title: 'inchesToMeters', //
                demo: 'convert', //
                type: { from: 'number', to: 'number' }, //
                testFunction: inchesToMeters, //
                params: [1],
                inputLabel: 'inches',
                outputLabel: 'meters',
                description: 'Converts inches to meters.'
            },
            {
                title: 'metersToInches',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: metersToInches,
                params: [1],
                inputLabel: 'meters',
                outputLabel: 'inches',
                description: 'Converts meters to inches.'
            },
            {
                title: 'feetToMeters',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: feetToMeters,
                params: [1],
                inputLabel: 'feet',
                outputLabel: 'meters',
                description: 'Converts feet to meters.'
            },
            {
                title: 'metersToFeet',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: metersToFeet,
                params: [1],
                inputLabel: 'meters',
                outputLabel: 'feet',
                description: 'Converts meters to feet.'
            },
            {
                title: 'milesToMeters',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: milesToMeters,
                params: [1],
                inputLabel: 'miles',
                outputLabel: 'meters',
                description: 'Converts miles to meters.'
            },
            {
                title: 'metersToMiles',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: metersToMiles,
                params: [1],
                inputLabel: 'meters',
                outputLabel: 'miles',
                description: 'Converts meters to miles.'
            },
            {
                title: 'poundsToKilograms',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: poundsToKilograms,
                params: [1],
                inputLabel: 'pounds',
                outputLabel: 'kilograms',
                description: 'Converts pounds to kilograms.'
            },
            {
                title: 'kilogramsToPounds',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: kilogramsToPounds,
                params: [1],
                inputLabel: 'kilograms',
                outputLabel: 'pounds',
                description: 'Converts kilograms to pounds.'
            },
            {
                title: 'ouncesToKilograms',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: ouncesToKilograms,
                params: [1],
                inputLabel: 'ounces',
                outputLabel: 'kilograms',
                description: 'Converts ounces to kilograms.'
            },
            {
                title: 'kilogramsToOunces',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: kilogramsToOunces,
                params: [1],
                inputLabel: 'kilograms',
                outputLabel: 'ounces',
                description: 'Converts kilograms to ounces.'
            },
            {
                title: 'gallonsToLiters',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: gallonsToLiters,
                params: [1],
                inputLabel: 'gallons (US)',
                outputLabel: 'liters',
                description: 'Converts US gallons to liters.'
            },
            {
                title: 'litersToGallons',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: litersToGallons,
                params: [1],
                inputLabel: 'liters',
                outputLabel: 'gallons',
                description: 'Converts liters to US gallons.'
            },
            {
                title: 'cubicFeetToLiters',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: cubicFeetToLiters,
                params: [1],
                inputLabel: 'cubicFeet',
                outputLabel: 'liters',
                description: 'Converts cubic feet to liters.'
            },
            {
                title: 'litersToCubicFeet',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: litersToCubicFeet,
                params: [1],
                inputLabel: 'liters',
                outputLabel: 'cubicFeet',
                description: 'Converts liters to cubic feet.'
            },
            {
                title: 'fahrenheitToKelvin',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: fahrenheitToKelvin,
                params: [32],
                inputLabel: 'fahrenheit',
                outputLabel: 'kelvin',
                description: 'Converts Fahrenheit to Kelvin.'
            },
            {
                title: 'kelvinToFahrenheit',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: kelvinToFahrenheit,
                params: [273.15],
                inputLabel: 'kelvin',
                outputLabel: 'fahrenheit',
                description: 'Converts Kelvin to Fahrenheit.'
            },
            {
                title: 'celsiusToKelvin',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: celsiusToKelvin,
                params: [0],
                inputLabel: 'celsius',
                outputLabel: 'kelvin',
                description: 'Converts Celsius to Kelvin.'
            },
            {
                title: 'kelvinToCelsius',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: kelvinToCelsius,
                params: [273.15],
                inputLabel: 'kelvin',
                outputLabel: 'celsius',
                description: 'Converts Kelvin to Celsius.'
            },
            {
                title: 'caloriesToJoules',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: caloriesToJoules,
                params: [1],
                inputLabel: 'calories',
                outputLabel: 'joules',
                description: 'Converts calories to joules.'
            },
            {
                title: 'joulesToCalories',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: joulesToCalories,
                params: [1],
                inputLabel: 'joules',
                outputLabel: 'calories',
                description: 'Converts joules to calories.'
            },
            {
                title: 'btusToJoules',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: btusToJoules,
                params: [1],
                inputLabel: 'btu',
                outputLabel: 'joules',
                description: 'Converts BTUs to joules.'
            },
            {
                title: 'joulesToBtus',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: joulesToBtus,
                params: [1],
                inputLabel: 'joules',
                outputLabel: 'btu',
                description: 'Converts joules to BTUs.'
            },
            {
                title: 'psiToPascals',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: psiToPascals,
                params: [1],
                inputLabel: 'psi',
                outputLabel: 'pascals',
                description: 'Converts PSI to Pascals.'
            },
            {
                title: 'pascalsToPsi',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: pascalsToPsi,
                params: [1],
                inputLabel: 'pascals',
                outputLabel: 'psi',
                description: 'Converts Pascals to PSI.'
            },
            {
                title: 'atmospheresToPascals',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: atmospheresToPascals,
                params: [1],
                inputLabel: 'atmospheres',
                outputLabel: 'pascals',
                description: 'Converts atmospheres to Pascals.'
            },
            {
                title: 'pascalsToAtmospheres',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: pascalsToAtmospheres,
                params: [1],
                inputLabel: 'pascals',
                outputLabel: 'atmospheres',
                description: 'Converts Pascals to atmospheres.'
            },
            {
                title: 'horsepowerToWatts',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: horsepowerToWatts,
                params: [1],
                inputLabel: 'horsepower',
                outputLabel: 'watts',
                description: 'Converts horsepower to watts.'
            },
            {
                title: 'wattsToHorsepower',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: wattsToHorsepower,
                params: [1],
                inputLabel: 'watts',
                outputLabel: 'horsepower',
                description: 'Converts watts to horsepower.'
            }
        ]
    },
    {
        title: 'Strings',
        items: [
            {
                title: 'urlToEncode',
                description: 'Converts a URL string to an encoded URL string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: urlToEncode,
                params: ['https://example.com/?search=query'],
                inputLabel: 'urlString',
                outputLabel: 'encodedUrltring'
            },
            {
                title: 'urlToDecode',
                description: 'Converts an encoded URL string to a URL string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: urlToDecode,
                params: ['https%3A%2F%2Fexample.com%2F%3Fsearch%3Dquery'],
                inputLabel: 'encodedUrltring',
                outputLabel: 'URL string'
            },

            {
                title: 'stringToHex',
                description: 'Converts a string to a hexadecimal string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: stringToHex,
                params: ['example'],
                inputLabel: 'string',
                outputLabel: 'hexadecimal'
            },
            {
                title: 'hexToString',
                description: 'Converts a hexadecimal string to a string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: hexToString,
                params: ['6578616d706c65'],
                inputLabel: 'hexadecimal',
                outputLabel: 'string'
            },
            {
                title: 'stringToBinary',
                description: 'Converts a string to a binary string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: stringToBinary,
                params: ['example'],
                inputLabel: 'string',
                outputLabel: 'binary'
            },
            {
                title: 'binaryToString',
                description: 'Converts a binary string to a string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: binaryToString,
                params: ['01100101 01111000 01100001 01101101 01110000 01101100 01100101'],
                inputLabel: 'binary',
                outputLabel: 'string'
            },
            {
                title: 'webStringToBase64',
                description: 'Converts a string to a base64 string using the Web API.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: webStringToBase64,
                params: ['example string'],
                inputLabel: 'string',
                outputLabel: 'base64'
            },
            {
                title: 'webBase64ToString',
                description: 'Converts a base64 string to a string using the Web API.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: webBase64ToString,
                params: ['ZXhhbXBsZSBzdHJpbmc='],
                inputLabel: 'base64',
                outputLabel: 'string'
            }
        ]

        // {
        //     title: 'nodeStringToBase64',
        //     function:nodeStringToBase64,
        //     params: ['example string'], //     from: 'string',
        //     to: 'Base64 (Node.js)'
        // },
        // {
        //     title: 'nodeBase64ToString',
        //     function:nodeBase64ToString,
        //     params: ['ZXhhbXBsZSBzdHJpbmc='], //     from: 'Base64 (Node.js)',
        //     to: 'string'
        // },
        // {
        //     title: 'stringToArrayBuffer',
        //     function:stringToArrayBuffer,
        //     params: ['example'], //     from: 'string',
        //     to: 'ArrayBuffer'
        // },
        // {
        //     title: 'arrayBufferToString',
        //     function:arrayBufferToString,
        //     params: ['', // Default value would be an ArrayBuffer, which is tricky to represent here], //     from: 'ArrayBuffer',
        //     to: 'string'
        // },
    },
    {
        title: 'Numeric',
        items: [
            {
                title: 'binaryToDecimal',
                description: 'Converts a binary string to a decimal number.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: binaryToDecimal,
                params: ['1010'],
                inputLabel: 'binaryString',
                outputLabel: 'decimalNumber'
            },
            {
                title: 'decimalToBinary',
                description: 'Converts a decimal number to a binary string.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: decimalToBinary,
                params: [10],
                inputLabel: 'decimalNumber',
                outputLabel: 'binaryString'
            },
            {
                title: 'hexadecimalToDecimal',
                description: 'Converts a hexadecimal string to a decimal number.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: hexadecimalToDecimal,
                params: ['A'],
                inputLabel: 'hexadecimalString',
                outputLabel: 'decimalNumber'
            },
            {
                title: 'decimalToHexadecimal',
                description: 'Converts a decimal number to a hexadecimal string.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: decimalToHexadecimal,
                params: [10],
                inputLabel: 'decimalNumber',
                outputLabel: 'hexadecimalString'
            },
            {
                title: 'binaryToHexadecimal',
                description: 'Converts a binary string to a hexadecimal string.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: binaryToHexadecimal,
                params: ['1010'],
                inputLabel: 'binaryString',
                outputLabel: 'hexadecimalString'
            },
            {
                title: 'hexadecimalToBinary',
                description: 'Converts a hexadecimal string to a binary string.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: hexadecimalToBinary,
                params: ['A'],
                inputLabel: 'hexadecimalString',
                outputLabel: 'binaryString'
            },
            {
                title: 'decimalToOctal',
                description: 'Converts a decimal number to an octal string.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: decimalToOctal,
                params: [10],
                inputLabel: 'decimal number',
                outputLabel: 'octalString'
            },
            {
                title: 'octalToDecimal',
                description: 'Converts an octal string to a decimal number.',
                demo: 'convert',
                type: { from: 'number', to: 'number' },
                testFunction: octalToDecimal,
                params: ['12'],
                inputLabel: 'octalString',
                outputLabel: 'decimalNumber'
            }
        ]
    },
    {
        title: 'Date',
        items: [
            {
                readOnly: true,
                description: 'Converts a date object to a Unix timestamp.',
                title: 'dateToTimestamp',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: dateToTimestamp,
                params: [new Date()],
                inputLabel: 'dateObject',
                outputLabel: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'timestampToDate',

                description: 'Converts a Unix timestamp to a date object.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: timestampToDate,
                params: [Date.now()],
                inputLabel: 'unixTimestamp',
                outputLabel: 'dateObject'
            },
            {
                readOnly: true,
                title: 'dateToISOString',

                description: 'Converts a date object to an ISO 8601 string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: dateToISOString,
                params: [new Date()],
                inputLabel: 'dateObject',
                outputLabel: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToDate',
                description: 'Converts an ISO 8601 string to a date object.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: isoStringToDate,
                params: [new Date().toISOString()],
                inputLabel: 'iso8601string',
                outputLabel: 'dateObject'
            },
            {
                readOnly: true,
                title: 'timestampToISOString',
                description: 'Converts a Unix timestamp to an ISO 8601 string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: timestampToISOString,
                params: [Date.now()],
                inputLabel: 'unixTimestamp',
                outputLabel: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToTimestamp',
                description: 'Converts an ISO 8601 string to a Unix timestamp.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: isoStringToTimestamp,
                params: [new Date().toISOString()],
                inputLabel: 'iso8601string',
                outputLabel: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'dateToLocalString',
                description: 'Converts a date object to a localized date and time string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: dateToLocalString,
                params: [new Date(), 'locale: string, options?: Intl.DateTimeFormatOptions'],
                inputLabel: 'dateObject',
                outputLabel: 'localizedStringRepresentation'
            },
            {
                readOnly: true,
                title: 'dateToDayOfWeek',
                description: 'Converts a date object to the day of the week.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: dateToDayOfWeek,
                params: [new Date(), 'locale: string = "en-US"'],

                inputLabel: 'dateObject',
                outputLabel: 'dayOfTheWeek'
            }
        ]
    },
    {
        title: 'Color',
        items: [
            // {
            //     title: 'rgbToHex',
            //     function:rgbToHex,
            //     params: [{ r: 255, g: 255, b: 255 }, // White color], //     from: 'RGB',
            //     to: 'Hex'
            // },
            // {
            //     title: 'hexToRgb',
            //     function:hexToRgb,
            //     params: ['#ffffff', // White color], //     from: 'Hex',
            //     to: 'RGB'
            // },
            {
                readOnly: true,
                title: 'rgbToHsl',
                description: 'Converts an RGB color to an HSL color.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: rgbToHsl,
                params: [{ r: 255, g: 255, b: 255 }],
                inputLabel: 'RGB',
                outputLabel: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToRgb',
                description: 'Converts an HSL color to an RGB color.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: hslToRgb,
                params: [{ h: 0, s: 0, l: 100 }],
                inputLabel: 'HSL',
                outputLabel: 'RGB'
            },
            {
                readOnly: true,
                title: 'hexToHsl',
                description: 'Converts a hex color to an HSL color.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: hexToHsl,
                params: ['#ffffff'],
                inputLabel: 'Hex',
                outputLabel: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToHex',
                description: 'Converts an HSL color to a hex color.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: hslToHex,
                params: [{ h: 0, s: 0, l: 100 }],
                inputLabel: 'HSL',
                outputLabel: 'Hex'
            },
            {
                readOnly: true,
                title: 'rgbaToString',
                description: 'Converts an RGBA color to a CSS string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: rgbaToString,
                params: [{ r: 255, g: 255, b: 255, a: 1 }],
                inputLabel: 'RGBA',
                outputLabel: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'hslaToString',
                description: 'Converts an HSLA color to a CSS string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: hslaToString,
                params: [{ h: 0, s: 0, l: 100, a: 1 }],
                inputLabel: 'HSLA',
                outputLabel: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'complementaryHsl',
                description: 'Calculates the complementary HSL color.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: complementaryHsl,
                params: [{ h: 0, s: 100, l: 50 }],
                inputLabel: 'HSL',
                outputLabel: 'ComplementaryHSL'
            }
        ]
    },

    {
        title: 'Format',
        items: [
            {
                readOnly: true,
                title: 'jsonStringToObject',
                description: 'Converts a JSON string to an object.',
                demo: 'convert',
                type: { from: 'string', to: 'object' },
                testFunction: jsonStringToObject,
                params: ['{"name: "John", "age: 30}'],
                inputLabel: 'jsonString',
                outputLabel: 'object'
            },
            {
                readOnly: true,
                title: 'objectToJsonString',
                description: 'Converts an object to a JSON string.',
                demo: 'convert',
                type: { from: 'object', to: 'string' },
                testFunction: objectToJsonString,
                params: [{ name: 'John', age: 30 }],
                inputLabel: 'object',
                outputLabel: 'jsonString'
            },
            {
                readOnly: true,
                title: 'yamlToJson',
                description: 'Converts a YAML string to a JSON object.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: yamlToJson,
                params: ['name: John\nage: 30'],
                inputLabel: 'yamlString',
                outputLabel: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToYaml',
                description: 'Converts a JSON object to a YAML string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: jsonToYaml,
                params: [{ name: 'John', age: 30 }],
                inputLabel: 'jsonObject',
                outputLabel: 'yamlString'
            },
            {
                readOnly: true,
                title: 'csvToJson',
                description: 'Converts a CSV string to a JSON object.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: csvToJson,
                params: ['name,age\nJohn,30'],
                inputLabel: 'csvString',
                outputLabel: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToCsv',
                description: 'Converts a JSON object to a CSV string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: jsonToCsv,
                params: [[{ name: 'John', age: 30 }]],
                inputLabel: 'jsonObject',
                outputLabel: 'csvString'
            },
            {
                readOnly: true,
                title: 'xmlToJson',

                description: 'Converts an XML string to a JSON object.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: xmlToJson,
                params: ['<person><name>John</name><age>30</age></person>'],
                inputLabel: 'XML string',
                outputLabel: 'jsonObject',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'jsonToXml',
                description: 'Converts a JSON object to an XML string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: jsonToXml,
                params: [{ person: { name: 'John', age: 30 } }],
                inputLabel: 'jsonObject',
                outputLabel: 'xmlString'
            },
            {
                readOnly: true,
                title: 'markdownToHtml',
                description: 'Converts a markdown string to an HTML string.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: markdownToHtml,
                params: ['# Hello World'],
                inputLabel: 'Markdown text',
                outputLabel: 'HTML',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'compressString',

                description: 'Compresses a string using the DEFLATE algorithm.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: compressString,
                params: ['Hello World'],
                inputLabel: 'string',
                outputLabel: 'uint8Array'
            },
            {
                readOnly: true,
                title: 'decompressToString',
                description: 'Decompresses a Uint8Array to a string using the DEFLATE algorithm.',
                demo: 'convert',
                type: { from: 'string', to: 'string' },
                testFunction: decompressToString,
                params: [new Uint8Array()],
                inputLabel: 'Uint8Array',
                outputLabel: 'string'
            }
        ]
    }
];
