"use strict";
/**
 *
 * @param a : Can be string or number but should be according to b
 *
 * @param b  : Can be number of string but should be according to a
 
    The arguments should either both be numbers or both be strings
    Using the & operator it states that either 1 should be true at a time.
    Logically, the OR operator should have been used by the compiler.
    But they decided to go with the & operator for the types
 */
const func = (a, b) => {
    console.log(a, b);
};
func(1, 12); // Correct
func('Tejas', 'Joshi'); // Correct
// func(1,'Tejas') // Incorrect
