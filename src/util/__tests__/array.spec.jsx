import { addOnce, compileCondition, removeEntry } from './../array';

describe('src/util/array', () => {
    let arr;
    beforeEach(() => {
        arr = [];
    });

    it('should handle "addOnce"', () => {
        arr = addOnce(arr, 1);
        expect(arr).toEqual([1]);

        arr = [];
        arr = addOnce(arr, 1);
        arr = addOnce(arr, 2);
        arr = addOnce(arr, 1);
        expect(arr).toEqual([1, 2]);
    });

    it('should handle "compileCondition"', () => {
        arr = [[1, true]];
        expect(compileCondition(arr)).toEqual([1]);

        arr = [
            [1, true],
            [2, false],
            ['test', true],
        ];
        expect(compileCondition(arr)).toEqual([1, 'test']);

        const testString = 'abc';
        (arr = [
            ['value1', testString.length > 0],
            ['value2', testString.length > 50],
            ['value3', testString.includes('c')],
        ]),
            expect(compileCondition(arr)).toEqual(['value1', 'value3']);
    });
});
