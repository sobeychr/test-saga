import { addOnce, compileCondition, removeEntry } from './../array';

describe('src/util/array', () => {
    it('should handle "addOnce"', () => {
        let arr = [];
        expect(arr).toEqual([]);

        arr = [];
        arr = addOnce(arr, 1);
        expect(arr).toEqual([1]);

        arr = [];
        arr = addOnce(arr, 1);
        arr = addOnce(arr, 2);
        arr = addOnce(arr, 1);
        expect(arr).toEqual([1, 2]);
    });
});
