import { getEntry, getEntries } from './../user';
import { userListMock } from './../mock';

describe('src/util/user', () => {
    it('should handle "getEntry"', () => {
        expect(getEntry(userList, 1)).toMatchObject(
            expect.objectContaining({ id: 1 })
        );
        expect(getEntry(userList, 3)).toMatchObject(
            expect.objectContaining({ id: 3 })
        );
        expect(getEntry(userList, 7)).toBeUndefined();
    });

    it('should handle "getEntries"', () => {
        expect(getEntries(userList, [1, 3])).toEqual([
            expect.objectContaining({ id: 1 }),
            expect.objectContaining({ id: 3 }),
        ]);
        expect(getEntries(userList, [])).toEqual([]);
        expect(getEntries(userList, [7, 10, 1])).toEqual([
            expect.objectContaining({ id: 1 }),
        ]);
    });
});
