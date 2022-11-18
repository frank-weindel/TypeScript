//// [declarationEmitMappedTypePropertyFromNumericStringKey.ts]
export const f = (<T>(arg: {[K in keyof T]: T[K] | string}) => arg)({'0': 0}); // Original prop uses string syntax

//// [declarationEmitMappedTypePropertyFromNumericStringKey.js]
"use strict";
exports.__esModule = true;
exports.f = void 0;
exports.f = (function (arg) { return arg; })({ '0': 0 }); // Original prop uses string syntax


//// [declarationEmitMappedTypePropertyFromNumericStringKey.d.ts]
export declare const f: {
    '0': string | number;
};
