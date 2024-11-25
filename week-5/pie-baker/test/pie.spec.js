/**
 * Author: Sara George
 * Date:  11/23/2024
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

describe('bakePie function', () => {
    test('should bake a pie with all essential ingredients', () => {
        const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
        expect(result).toBe('You have successfully baked a ${pieType} pie!');
    });

    test('should bake a pie with additional ingredients', () => {
        const result = bakePie('cherry', ['flour', 'sugar', 'butter', 'cherries', 'vanilla']);
        expect(result).toEqual('You have successfully baked a ${pieType} pie!');
    });

    test('should call process.exit when an essential ingredient is missing', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        bakePie('blueberry', ['flour', 'sugar']);
        expect(mockExit).toHaveBeenCalledWith(1);
        mockExit.mockRestore();
    });
});