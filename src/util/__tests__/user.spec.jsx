import { getEntry, getEntries } from './../user';
import { userListMock } from 'Util/mock';

describe('src/util/user', () => {
    it('should handle "getEntry"', () => {
        expect(getEntry(userListMock, 1)).toMatchObject(
            expect.objectContaining({ id: 1 }),
        );
        expect(getEntry(userListMock, 3)).toMatchObject(
            expect.objectContaining({ id: 3 }),
        );
        expect(getEntry(userListMock, 7)).toBeUndefined();
    });

    it('should handle "getEntries"', () => {
        expect(getEntries(userListMock, [1, 3])).toEqual([
            expect.objectContaining({ id: 1 }),
            expect.objectContaining({ id: 3 }),
        ]);
        expect(getEntries(userListMock, [])).toEqual([]);
        expect(getEntries(userListMock, [7, 10, 1])).toEqual([
            expect.objectContaining({ id: 1 }),
        ]);
    });
});
