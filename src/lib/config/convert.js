
import {
    atmospheresToPascals,
    binaryToDecimal,
    binaryToHexadecimal,
    binaryToString,
    btusToJoules,
    caloriesToJoules,
    celsiusToKelvin, complementaryHsl, compressString, csvToJson, cubicFeetToLiters,
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
    yamlToJson,
} from '@jonibach/convert';

export default [
    {
        title: 'SI Units',
        items: [
            {
                title: 'inchesToMeters',
                converter: inchesToMeters,
                defaultValue: 1,
                from: 'inches',
                to: 'meters'
            },
            {
                title: 'metersToInches',
                converter: metersToInches,
                defaultValue: 1,
                from: 'meters',
                to: 'inches' // Corrected spelling mistake
            },
            {
                title: 'feetToMeters',
                converter: feetToMeters,
                defaultValue: 1,
                from: 'feet',
                to: 'meters'
            },
            {
                title: 'metersToFeet',
                converter: metersToFeet,
                defaultValue: 1,
                from: 'meters',
                to: 'feet'
            },
            {
                title: 'milesToMeters',
                converter: milesToMeters,
                defaultValue: 1,
                from: 'miles',
                to: 'meters'
            },
            {
                title: 'metersToMiles',
                converter: metersToMiles,
                defaultValue: 1,
                from: 'meters',
                to: 'miles'
            },
            {
                title: 'poundsToKilograms',
                converter: poundsToKilograms,
                defaultValue: 1,
                from: 'pounds',
                to: 'kilograms'
            },
            {
                title: 'kilogramsToPounds',
                converter: kilogramsToPounds,
                defaultValue: 1,
                from: 'kilograms',
                to: 'pounds'
            },
            {
                title: 'ouncesToKilograms',
                converter: ouncesToKilograms,
                defaultValue: 1,
                from: 'ounces',
                to: 'kilograms'
            },
            {
                title: 'kilogramsToOunces',
                converter: kilogramsToOunces,
                defaultValue: 1,
                from: 'kilograms',
                to: 'ounces'
            },
            {
                title: 'gallonsToLiters',
                converter: gallonsToLiters,
                defaultValue: 1,
                from: 'gallons (US)',
                to: 'liters'
            },
            {
                title: 'litersToGallons',
                converter: litersToGallons,
                defaultValue: 1,
                from: 'liters',
                to: 'gallons'
            },
            {
                title: 'cubicFeetToLiters',
                converter: cubicFeetToLiters,
                defaultValue: 1,
                from: 'cubicFeet',
                to: 'liters'
            },
            {
                title: 'litersToCubicFeet',
                converter: litersToCubicFeet,
                defaultValue: 1,
                from: 'liters',
                to: 'cubicFeet'
            },
            {
                title: 'fahrenheitToKelvin',
                converter: fahrenheitToKelvin,
                defaultValue: 32,
                // Freezing point of water in Fahrenheit
                from: 'fahrenheit',
                to: 'kelvin'
            },
            {
                title: 'kelvinToFahrenheit',
                converter: kelvinToFahrenheit,
                defaultValue: 273.15,
                // Freezing point of water in Kelvin
                from: 'kelvin',
                to: 'fahrenheit'
            },
            {
                title: 'celsiusToKelvin',
                converter: celsiusToKelvin,
                defaultValue: 0, // Freezing point of water in Celsius
                from: 'celsius',
                to: 'kelvin'
            },
            {
                title: 'kelvinToCelsius',
                converter: kelvinToCelsius,
                defaultValue: 273.15, // Freezing point of water in Kelvin
                from: 'kelvin',
                to: 'celsius'
            },
            {
                title: 'caloriesToJoules',
                converter: caloriesToJoules,
                defaultValue: 1,
                from: 'calories',
                to: 'joules'
            },
            {
                title: 'joulesToCalories',
                converter: joulesToCalories,
                defaultValue: 1,
                from: 'joules',
                to: 'calories'
            },
            {
                title: 'btusToJoules',
                converter: btusToJoules,
                defaultValue: 1,
                from: 'btu',
                to: 'joules'
            },
            {
                title: 'joulesToBtus',
                converter: joulesToBtus,
                defaultValue: 1,
                from: 'joules',
                to: 'btu'
            },
            {
                title: 'psiToPascals',
                converter: psiToPascals,
                defaultValue: 1,
                from: 'psi',
                to: 'pascals'
            },
            {
                title: 'pascalsToPsi',
                converter: pascalsToPsi,
                defaultValue: 1,
                from: 'pascals',
                to: 'psi'
            },
            {
                title: 'atmospheresToPascals',
                converter: atmospheresToPascals,
                defaultValue: 1,
                from: 'atmospheres',
                to: 'pascals'
            },
            {
                title: 'pascalsToAtmospheres',
                converter: pascalsToAtmospheres,
                defaultValue: 1,
                from: 'pascals',
                to: 'atmospheres'
            },
            {
                title: 'horsepowerToWatts',
                converter: horsepowerToWatts,
                defaultValue: 1,
                from: 'horsepower',
                to: 'watts'
            },
            {
                title: 'wattsToHorsepower',
                converter: wattsToHorsepower,
                defaultValue: 1,
                from: 'watts',
                to: 'horsepower'
            }
        ]
    },
    {
        title: 'Strings',
        items: [


            {
                title: 'urlToEncode',
                converter: urlToEncode,
                defaultValue: 'https://example.com/?search=query',
                from: 'urlString',
                to: 'encodedUrltring'
            },
            {
                title: 'urlToDecode',
                converter: urlToDecode,
                defaultValue: 'https%3A%2F%2Fexample.com%2F%3Fsearch%3Dquery',
                from: 'encodedUrltring',
                to: 'URL string'
            },

            {
                title: 'stringToHex',
                converter: stringToHex,
                defaultValue: 'example',
                from: 'string',
                to: 'hexadecimal'
            },
            {
                title: 'hexToString',
                converter: hexToString,
                defaultValue: '6578616d706c65',
                from: 'hexadecimal',
                to: 'string'
            },
            {
                title: 'stringToBinary',
                converter: stringToBinary,
                defaultValue: 'example',
                from: 'string',
                to: 'binary'
            },
            {
                title: 'binaryToString',
                converter: binaryToString,
                defaultValue: '01100101 01111000 01100001 01101101 01110000 01101100 01100101',
                from: 'binary',
                to: 'string'
            },
            {
                title: 'webStringToBase64',
                converter: webStringToBase64,
                defaultValue: 'example string',
                from: 'string',
                to: 'base64'
            },
            {
                title: 'webBase64ToString',
                converter: webBase64ToString,
                defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
                from: 'base64',
                to: 'string'
            },
        ]

        // {
        //     title: 'nodeStringToBase64',
        //     converter: nodeStringToBase64,
        //     defaultValue: 'example string',
        //     from: 'string',
        //     to: 'Base64 (Node.js)'
        // },
        // {
        //     title: 'nodeBase64ToString',
        //     converter: nodeBase64ToString,
        //     defaultValue: 'ZXhhbXBsZSBzdHJpbmc=',
        //     from: 'Base64 (Node.js)',
        //     to: 'string'
        // },
        // {
        //     title: 'stringToArrayBuffer',
        //     converter: stringToArrayBuffer,
        //     defaultValue: 'example',
        //     from: 'string',
        //     to: 'ArrayBuffer'
        // },
        // {
        //     title: 'arrayBufferToString',
        //     converter: arrayBufferToString,
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
                converter: binaryToDecimal,
                defaultValue: '1010', // Example binary string
                from: 'binaryString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToBinary',
                converter: decimalToBinary,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'binaryString'
            },
            {
                title: 'hexadecimalToDecimal',
                converter: hexadecimalToDecimal,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'decimalNumber'
            },
            {
                title: 'decimalToHexadecimal',
                converter: decimalToHexadecimal,
                defaultValue: 10, // Example decimal number
                from: 'decimalNumber',
                to: 'hexadecimalString'
            },
            {
                title: 'binaryToHexadecimal',
                converter: binaryToHexadecimal,
                defaultValue: '1010', // Example binary string
                from: 'binaryString',
                to: 'hexadecimalString'
            },
            {
                title: 'hexadecimalToBinary',
                converter: hexadecimalToBinary,
                defaultValue: 'A', // Example hexadecimal string
                from: 'hexadecimalString',
                to: 'binaryString'
            },
            {
                title: 'decimalToOctal',
                converter: decimalToOctal,
                defaultValue: 10, // Example decimal number
                from: 'decimal number',
                to: 'octalString'
            },
            {
                title: 'octalToDecimal',
                converter: octalToDecimal,
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
                title: 'dateToTimestamp',
                converter: dateToTimestamp,
                defaultValue: new Date(), // Current date and time
                from: 'dateObject',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'timestampToDate',
                converter: timestampToDate,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'dateToISOString',
                converter: dateToISOString,
                defaultValue: new Date(), // Current date and time
                from: 'dateObject',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToDate',
                converter: isoStringToDate,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'dateObject'
            },
            {
                readOnly: true,
                title: 'timestampToISOString',
                converter: timestampToISOString,
                defaultValue: Date.now(), // Current unixTimestamp
                from: 'unixTimestamp',
                to: 'iso8601string'
            },
            {
                readOnly: true,
                title: 'isoStringToTimestamp',
                converter: isoStringToTimestamp,
                defaultValue: new Date().toISOString(), // Current date and time in ISO 8601 format
                from: 'iso8601string',
                to: 'unixTimestamp'
            },
            {
                readOnly: true,
                title: 'dateToLocalString',
                converter: dateToLocalString,
                defaultValue: new Date(), // Current date and time
                additionalParams: 'locale: string, options?: Intl.DateTimeFormatOptions',
                from: 'dateObject',
                to: 'localizedStringRepresentation'
            },
            {
                readOnly: true,
                title: 'dateToDayOfWeek',
                converter: dateToDayOfWeek,
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
            //     converter: rgbToHex,
            //     defaultValue: { r: 255, g: 255, b: 255 }, // White color
            //     from: 'RGB',
            //     to: 'Hex'
            // },
            // {
            //     title: 'hexToRgb',
            //     converter: hexToRgb,
            //     defaultValue: '#ffffff', // White color
            //     from: 'Hex',
            //     to: 'RGB'
            // },
            {
                readOnly: true,
                title: 'rgbToHsl',
                converter: rgbToHsl,
                defaultValue: { r: 255, g: 255, b: 255 }, // White color
                from: 'RGB',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToRgb',
                converter: hslToRgb,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'RGB'
            },
            {
                readOnly: true,
                title: 'hexToHsl',
                converter: hexToHsl,
                defaultValue: '#ffffff', // White color
                from: 'Hex',
                to: 'HSL'
            },
            {
                readOnly: true,
                title: 'hslToHex',
                converter: hslToHex,
                defaultValue: { h: 0, s: 0, l: 100 }, // White color
                from: 'HSL',
                to: 'Hex'
            },
            {
                readOnly: true,
                title: 'rgbaToString',
                converter: rgbaToString,
                defaultValue: { r: 255, g: 255, b: 255, a: 1 }, // White color with full opacity
                from: 'RGBA',
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'hslaToString',
                converter: hslaToString,
                defaultValue: { h: 0, s: 0, l: 100, a: 1 }, // White color with full opacity
                from: 'HSLA',
                to: 'CSSstring'
            },
            {
                readOnly: true,
                title: 'complementaryHsl',
                converter: complementaryHsl,
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
                converter: jsonStringToObject,
                defaultValue: '{"name": "John", "age": 30}',
                from: 'jsonString',
                to: 'object'
            },
            {
                readOnly: true,
                title: 'objectToJsonString',
                converter: objectToJsonString,
                defaultValue: { name: "John", age: 30 },
                from: 'object',
                to: 'jsonString'
            },
            {
                readOnly: true,
                title: 'yamlToJson',
                converter: yamlToJson,
                defaultValue: 'name: John\nage: 30',
                from: 'yamlString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToYaml',
                converter: jsonToYaml,
                defaultValue: { name: "John", age: 30 },
                from: 'jsonObject',
                to: 'yamlString'
            },
            {
                readOnly: true,
                title: 'csvToJson',
                converter: csvToJson,
                defaultValue: 'name,age\nJohn,30',
                from: 'csvString',
                to: 'jsonObject'
            },
            {
                readOnly: true,
                title: 'jsonToCsv',
                converter: jsonToCsv,
                defaultValue: [{ name: "John", age: 30 }],
                from: 'jsonObject',
                to: 'csvString'
            },
            {
                readOnly: true,
                title: 'xmlToJson',
                converter: xmlToJson,
                defaultValue: '<person><name>John</name><age>30</age></person>',
                from: 'XML string',
                to: 'jsonObject',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'jsonToXml',
                converter: jsonToXml,
                defaultValue: { person: { name: "John", age: 30 } },
                from: 'jsonObject',
                to: 'xmlString'
            },
            {
                readOnly: true,
                title: 'markdownToHtml',
                converter: markdownToHtml,
                defaultValue: '# Hello World',
                from: 'Markdown text',
                to: 'HTML',
                isAsync: true // Indicate this operation is asynchronous
            },
            {
                readOnly: true,
                title: 'compressString',
                converter: compressString,
                defaultValue: 'Hello World',
                from: 'string',
                to: 'uint8Array'
            },
            {
                readOnly: true,
                title: 'decompressToString',
                converter: decompressToString,
                defaultValue: new Uint8Array(), // Placeholder for demonstration
                from: 'Uint8Array',
                to: 'string'
            },
        ]
    },


];