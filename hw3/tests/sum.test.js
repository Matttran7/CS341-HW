/**
Author: Matthew Tran

Last Modified: Feb 8 2023*/

const sum = require('../public/javascripts/sum.js');
 test('adds 1 + 2 to equal 3', () => {
 expect(sum(1, 2)).toBe(3);
 }); 