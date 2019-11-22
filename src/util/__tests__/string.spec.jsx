import { fill } from './../string';

describe('src/util/fill', () => {
    it('should handle "fill"', () => {
        expect(fill('test', '-', 2, true)).toEqual('test');
        expect(fill('test', '-', 8, true)).toEqual('test----');
        expect(fill('test', '-', 2, false)).toEqual('test');
        expect(fill('test', '-', 8, false)).toEqual('----test');
    });
});
