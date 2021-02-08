"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_memoize_1 = __importDefault(require("p-memoize"));
const got_1 = __importDefault(require("got"));
/** Async request to rest api */
const getData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const raw_data = yield got_1.default('https://jsonplaceholder.typicode.com/todos/1');
        const data = raw_data.body;
        return data;
    });
};
/** Memoization Function */
const memoizeNow = p_memoize_1.default(getData, {
    maxAge: 1000 * 60,
    cacheKey: JSON.stringify
});
let createProm = () => __awaiter(void 0, void 0, void 0, function* () {
    console.time('getData');
    yield getData();
    console.timeEnd('getData');
    console.log('-------Break-------');
    console.time('memoizeNow');
    yield memoizeNow();
    console.timeEnd('memoizeNow');
    console.log('-------Break-------');
    console.time('memoizeNow');
    yield memoizeNow();
    console.timeEnd('memoizeNow');
    console.log('-------Break-------');
    console.time('memoizeNow');
    yield memoizeNow();
    console.timeEnd('memoizeNow');
    console.log('-------Break-------');
    console.time('memoizeNow');
    yield memoizeNow();
    console.timeEnd('memoizeNow');
    p_memoize_1.default.clear(memoizeNow);
    console.log('-------Break-------');
    console.time('memoizeNow');
    yield memoizeNow();
    console.timeEnd('memoizeNow');
    console.log('-------End-------');
});
createProm();
