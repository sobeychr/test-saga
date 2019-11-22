import { zeroFill } from './../number';

describe('src/util/number', () => {
    it('should handle "zeroFill"', () => {
        expect(zeroFill(1, 2)).toEqual('01');
        expect(zeroFill(123, 2)).toEqual('123');

        // TODO: Fix decimal filling
        expect(zeroFill(0.5, 2)).toEqual('0.5');
    });
});
