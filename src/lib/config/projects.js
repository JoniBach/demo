import convert from "./convert";
import transform from "./transform";

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

]