import MockDate from 'MockDate';
import { getDate, getDateTime, getTime } from './../date';

describe('src/util/date', () => {
    MockDate.set('2019-02-15 17:59:45');
    const date = new Date();

    it('should handle "getDate"', () => {
        expect(getDate(date)).toEqual('2019-02-15');
    });

    it('should handle "getDateTime"', () => {
        expect(getDateTime(date)).toEqual('2019-02-15 17:59:45');
    });

    it('should handle "getTime"', () => {
        expect(getTime(date)).toEqual('17:59:45');
    });
});
