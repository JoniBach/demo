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
                title: 'inchesToMeters',
                testFunction: inchesToMeters,
                defaultValue: 1,
                from: 'inches',
                to: 'meters',
                description: 'Converts inches to meters.'
            },
            {
                title: 'metersToInches',
                testFunction: metersToInches,
                defaultValue: 1,
                from: 'meters',
                to: 'inches',
                description: 'Converts meters to inches.'
            },
            {
                title: 'feetToMeters',
                testFunction: feetToMeters,
                defaultValue: 1,
                from: 'feet',
                to: 'meters',
                description: 'Converts feet to meters.'
            },
            {
                title: 'metersToFeet',
                testFunction: metersToFeet,
                defaultValue: 1,
                from: 'meters',
                to: 'feet',
                description: 'Converts meters to feet.'
            },
            {
                title: 'milesToMeters',
                testFunction: milesToMeters,
                defaultValue: 1,
                from: 'miles',
                to: 'meters',
                description: 'Converts miles to meters.'
            },
            {
                title: 'metersToMiles',
                testFunction: metersToMiles,
                defaultValue: 1,
                from: 'meters',
                to: 'miles',
                description: 'Converts meters to miles.'
            },
            {
                title: 'poundsToKilograms',
                testFunction: poundsToKilograms,
                defaultValue: 1,
                from: 'pounds',
                to: 'kilograms',
                description: 'Converts pounds to kilograms.'
            },
            {
                title: 'kilogramsToPounds',
                testFunction: kilogramsToPounds,
                defaultValue: 1,
                from: 'kilograms',
                to: 'pounds',
                description: 'Converts kilograms to pounds.'
            },
            {
                title: 'ouncesToKilograms',
                testFunction: ouncesToKilograms,
                defaultValue: 1,
                from: 'ounces',
                to: 'kilograms',
                description: 'Converts ounces to kilograms.'
            },
            {
                title: 'kilogramsToOunces',
                testFunction: kilogramsToOunces,
                defaultValue: 1,
                from: 'kilograms',
                to: 'ounces',
                description: 'Converts kilograms to ounces.'
            },
            {
                title: 'gallonsToLiters',
                testFunction: gallonsToLiters,
                defaultValue: 1,
                from: 'gallons (US)',
                to: 'liters',
                description: 'Converts US gallons to liters.'
            },
            {
                title: 'litersToGallons',
                testFunction: litersToGallons,
                defaultValue: 1,
                from: 'liters',
                to: 'gallons',
                description: 'Converts liters to US gallons.'
            },
            {
                title: 'cubicFeetToLiters',
                testFunction: cubicFeetToLiters,
                defaultValue: 1,
                from: 'cubicFeet',
                to: 'liters',
                description: 'Converts cubic feet to liters.'
            },
            {
                title: 'litersToCubicFeet',
                testFunction: litersToCubicFeet,
                defaultValue: 1,
                from: 'liters',
                to: 'cubicFeet',
                description: 'Converts liters to cubic feet.'
            },
            {
                title: 'fahrenheitToKelvin',
                testFunction: fahrenheitToKelvin,
                defaultValue: 32,
                from: 'fahrenheit',
                to: 'kelvin',
                description: 'Converts Fahrenheit to Kelvin.'
            },
            {
                title: 'kelvinToFahrenheit',
                testFunction: kelvinToFahrenheit,
                defaultValue: 273.15,
                from: 'kelvin',
                to: 'fahrenheit',
                description: 'Converts Kelvin to Fahrenheit.'
            },
            {
                title: 'celsiusToKelvin',
                testFunction: celsiusToKelvin,
                defaultValue: 0,
                from: 'celsius',
                to: 'kelvin',
                description: 'Converts Celsius to Kelvin.'
            },
            {
                title: 'kelvinToCelsius',
                testFunction: kelvinToCelsius,
                defaultValue: 273.15,
                from: 'kelvin',
                to: 'celsius',
                description: 'Converts Kelvin to Celsius.'
            },
            {
                title: 'caloriesToJoules',
                testFunction: caloriesToJoules,
                defaultValue: 1,
                from: 'calories',
                to: 'joules',
                description: 'Converts calories to joules.'
            },
            {
                title: 'joulesToCalories',
                testFunction: joulesToCalories,
                defaultValue: 1,
                from: 'joules',
                to: 'calories',
                description: 'Converts joules to calories.'
            },
            {
                title: 'btusToJoules',
                testFunction: btusToJoules,
                defaultValue: 1,
                from: 'btu',
                to: 'joules',
                description: 'Converts BTUs to joules.'
            },
            {
                title: 'joulesToBtus',
                testFunction: joulesToBtus,
                defaultValue: 1,
                from: 'joules',
                to: 'btu',
                description: 'Converts joules to BTUs.'
            },
            {
                title: 'psiToPascals',
                testFunction: psiToPascals,
                defaultValue: 1,
                from: 'psi',
                to: 'pascals',
                description: 'Converts PSI to Pascals.'
            },
            {
                title: 'pascalsToPsi',
                testFunction: pascalsToPsi,
                defaultValue: 1,
                from: 'pascals',
                to: 'psi',
                description: 'Converts Pascals to PSI.'
            },
            {
                title: 'atmospheresToPascals',
                testFunction: atmospheresToPascals,
                defaultValue: 1,
                from: 'atmospheres',
                to: 'pascals',
                description: 'Converts atmospheres to Pascals.'
            },
            {
                title: 'pascalsToAtmospheres',
                testFunction: pascalsToAtmospheres,
                defaultValue: 1,
                from: 'pascals',
                to: 'atmospheres',
                description: 'Converts Pascals to atmospheres.'
            },
            {
                title: 'horsepowerToWatts',
                testFunction: horsepowerToWatts,
                defaultValue: 1,
                from: 'horsepower',
                to: 'watts',
                description: 'Converts horsepower to watts.'
            },
            {
                title: 'wattsToHorsepower',
                testFunction: wattsToHorsepower,
                defaultValue: 1,
                from: 'watts',
                to: 'horsepower',
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
                testFunction: urlToEncode,
                defaultValue: 'https://example.com/?search=query',
                from: 'urlString',
                to: 'encodedUrltring'
            },
            {
                title: 'urlToDecode',
                description: 'Converts an encoded URL string to a URL string.',
                testFunction: urlToDecode,
                defaultValue: 'https%3A%2F%2Fexample.com%2F%3Fsearch%3Dquery',
                from: 'encodedUrltring',
                to: 'URL string'
            },

            {
                title: 'stringToHex',
                description: 'Converts a string to a hexadecimal string.',
                testFunction: stringToHex,
                defaultValue: 'example',
                from: 'string',
                to: 'hexadecimal'
            },
            {
                title: 'hexToString',
                description: 'Converts a hexadecimal string to a string.',
                testFunction: hexToString,
                defaultValue: '6578616d706c65',
                from: 'hexadecimal',
                to: 'string'
            },
            {
                title: 'stringToBinary',
                description: 'Converts a string to a binary string.',
                testFunction: stringToBinary,
                defaultValue: 'example',
                from: 'string',
                to: 'binary'
            },
            {
                title: 'binaryToString',
                description: 'Converts a binary string to a string.',
                testFunction: binaryToString,
                defaultValue: '01100101 01111000 01100001 01101101 01110000 01101100 01100101',
                from: 'binary',
                to: 'string'
            },
            {
                title: 'webStringToBase64',
                description: 'Converts a string to a base64 string using the Web API.',
                testFunction: webStringToBase64,
                defaultValue: 'example string',
                from: 'string',
                to: 'base64'
            },
            {
                title: 'webBase64ToString',
                description: 'Converts a base64 string to a string using the Web API.',
                testFunction: webBase64ToString,
                defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
                from: 'base64',
                to: 'string'
            }
        ]

        // {
        //     title: 'nodeStringToBase64',
        //     function:nodeStringToBase64,
        //     defaultValue: 'example string',
        //     from: 'string',
        //     to: 'Base64 (Node.js)'
        // },
        // {
        //     title: 'nodeBase64ToString',
        //     function:nodeBase64ToString,
        //     defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
        //     from: 'Base64 (Node.js)',
        //     to: 'string'
        // },
        // {
        //     title: 'stringToArrayBuffer',
        //     function:stringToArrayBuffer,
        //     defaultValue: 'example',
        //     from: 'string',
        //     to: 'ArrayBuffer'
        // },
        // {
        //     title: 'arrayBufferToString',
        //     function:arrayBufferToString,
        //     defaultValue: '', // Default value would be an ArrayBuffer, which is tricky to represent here
        //     from: 'ArrayBuffer',
        //     to: 'string'
        // },
    },
    {
        title: 'Numeric',
        items: [
            {
                title: 'binaryToDecimal',
                description: 'Converts a binary string to a decimal number.',
                testFunction: binaryToDecimal,
                defaultValue: '1010', // Example binary string
                from: 'binaryString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToBinary',
                description: 'Converts a decimal number to a binary string.',
                testFunction: decimalToBinary,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'binaryString'
            },
            {
                title: 'hexadecimalToDecimal',
                description: 'Converts a hexadecimal string to a decimal number.',
                testFunction: hexadecimalToDecimal,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToHexadecimal',
                description: 'Converts a decimal number to a hexadecimal string.',
                testFunction: decimalToHexadecimal,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'hexadecimalString'
            },
            {
                title: 'binaryToHexadecimal',
                description: 'Converts a binary string to a hexadecimal string.',
                testFunction: binaryToHexadecimal,
                defaultValue: '1010', // Example binary string
                from: 'binaryString',
                to: 'hexadecimalString'
            },
            {
                title: 'hexadecimalToBinary',
                description: 'Converts a hexadecimal string to a binary string.',
                testFunction: hexadecimalToBinary,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'binaryString'
            },
            {
                title: 'decimalToOctal',
                description: 'Converts a decimal number to an octal string.',
                testFunction: decimalToOctal,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'octalString'
            },
            {
                title: 'octalToDecimal',
                description: 'Converts an octal string to a decimal number.',
                testFunction: octalToDecimal,
                defaultValue: '12', // Example octalString
                from: 'octalString',
                to: 'decimalNumber'
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
                testFunction: dateToTimestamp,
                defaultValue: new Date(), // Current date and time
                from: 'dateObject',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'timestampToDate',

                description: 'Converts a Unix timestamp to a date object.',
                testFunction: timestampToDate,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'dateToISOString',

                description: 'Converts a date object to an ISO 8601 string.',
                testFunction: dateToISOString,
                defaultValue: new Date(), // Current date and time
                from: 'dateObject',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToDate',
                description: 'Converts an ISO 8601 string to a date object.',
                testFunction: isoStringToDate,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'timestampToISOString',
                description: 'Converts a Unix timestamp to an ISO 8601 string.',
                testFunction: timestampToISOString,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToTimestamp',
                description: 'Converts an ISO 8601 string to a Unix timestamp.',
                testFunction: isoStringToTimestamp,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'dateToLocalString',
                description: 'Converts a date object to a localized date and time string.',
                testFunction: dateToLocalString,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string, options?: Intl.DateTimeFormatOptions',
                from: 'dateObject',
                to: 'localizedStringRepresentation'
            },
            {
                readOnly: true,
                title: 'dateToDayOfWeek',
                description: 'Converts a date object to the day of the week.',
                testFunction: dateToDayOfWeek,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string = "en-US"',
                from: 'dateObject',
                to: 'dayOfTheWeek'
            }
        ]
    },
    {
        title: 'Color',
        items: [
            // {
            //     title: 'rgbToHex',
            //     function:rgbToHex,
            //     defaultValue: { r: 255, g: 255, b: 255 }, // White color
            //     from: 'RGB',
            //     to: 'Hex'
            // },
            // {
            //     title: 'hexToRgb',
            //     function:hexToRgb,
            //     defaultValue: '#ffffff', // White color
            //     from: 'Hex',
            //     to: 'RGB'
            // },
            {
                readOnly: true,
                title: 'rgbToHsl',
                description: 'Converts an RGB color to an HSL color.',
                testFunction: rgbToHsl,
                defaultValue: { r: 255, g: 255, b: 255 }, // White color
                from: 'RGB',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToRgb',
                description: 'Converts an HSL color to an RGB color.',
                testFunction: hslToRgb,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'RGB'
            },
            {
                readOnly: true,
                title: 'hexToHsl',
                description: 'Converts a hex color to an HSL color.',
                testFunction: hexToHsl,
                defaultValue: '#ffffff', // White color
                from: 'Hex',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToHex',
                description: 'Converts an HSL color to a hex color.',
                testFunction: hslToHex,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'Hex'
            },
            {
                readOnly: true,
                title: 'rgbaToString',
                description: 'Converts an RGBA color to a CSS string.',
                testFunction: rgbaToString,
                defaultValue: { r: 255, g: 255, b: 255, a: 1 }, // White color with full opacity
                from: 'RGBA',
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'hslaToString',
                description: 'Converts an HSLA color to a CSS string.',
                testFunction: hslaToString,
                defaultValue: { h: 0, s: 0, l: 100, a: 1 }, // White color with full opacity
                from: 'HSLA',
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'complementaryHsl',
                description: 'Calculates the complementary HSL color.',
                testFunction: complementaryHsl,
                defaultValue: { h: 0, s: 100, l: 50 }, // Red color
                from: 'HSL',
                to: 'ComplementaryHSL'
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
                testFunction: jsonStringToObject,
                defaultValue: '{"name: "John", "age: 30}',
                from: 'jsonString',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToJsonString',
                description: 'Converts an object to a JSON string.',
                testFunction: objectToJsonString,
                defaultValue: { name: 'John', age: 30 },
                from: 'object',
                to: 'jsonString'
            },
            {
                readOnly: true,
                title: 'yamlToJson',
                description: 'Converts a YAML string to a JSON object.',
                testFunction: yamlToJson,
                defaultValue: 'name: John\nage: 30',
                from: 'yamlString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToYaml',
                description: 'Converts a JSON object to a YAML string.',
                testFunction: jsonToYaml,
                defaultValue: { name: 'John', age: 30 },
                from: 'jsonObject',
                to: 'yamlString'
            },
            {
                readOnly: true,
                title: 'csvToJson',
                description: 'Converts a CSV string to a JSON object.',
                testFunction: csvToJson,
                defaultValue: 'name,age\nJohn,30',
                from: 'csvString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToCsv',
                description: 'Converts a JSON object to a CSV string.',
                testFunction: jsonToCsv,
                defaultValue: [{ name: 'John', age: 30 }],
                from: 'jsonObject',
                to: 'csvString'
            },
            {
                readOnly: true,
                title: 'xmlToJson',

                description: 'Converts an XML string to a JSON object.',
                testFunction: xmlToJson,
                defaultValue: '<person><name>John</name><age>30</age></person>',
                from: 'XML string',
                to: 'jsonObject',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'jsonToXml',
                description: 'Converts a JSON object to an XML string.',
                testFunction: jsonToXml,
                defaultValue: { person: { name: 'John', age: 30 } },
                from: 'jsonObject',
                to: 'xmlString'
            },
            {
                readOnly: true,
                title: 'markdownToHtml',
                description: 'Converts a markdown string to an HTML string.',
                testFunction: markdownToHtml,
                defaultValue: '# Hello World',
                from: 'Markdown text',
                to: 'HTML',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'compressString',

                description: 'Compresses a string using the DEFLATE algorithm.',
                testFunction: compressString,
                defaultValue: 'Hello World',
                from: 'string',
                to: 'uint8Array'
            },
            {
                readOnly: true,
                title: 'decompressToString',
                description: 'Decompresses a Uint8Array to a string using the DEFLATE algorithm.',
                testFunction: decompressToString,
                defaultValue: new Uint8Array(), // Placeholder for demonstration
                from: 'Uint8Array',
                to: 'string'
            }
        ]
    }
];
