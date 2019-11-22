import { getEntry, getEntries } from './../user';

describe('src/util/user', () => {
    const userList = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 4, name: 'test4' },
        { id: 5, name: 'test5' },
    ];

    it('should handle "getEntry"', () => {
        expect(getEntry(userList, 1)).toEqual({ id: 1, name: 'test1' });
        expect(getEntry(userList, 3)).toEqual({ id: 3, name: 'test3' });
        expect(getEntry(userList, 7)).toBeUndefined();
    });

    it('should handle "getEntries"', () => {
        expect(getEntries(userList, [1, 3])).toEqual([
            { id: 1, name: 'test1' },
            { id: 3, name: 'test3' },
        ]);
        expect(getEntries(userList, [])).toEqual([]);
        expect(getEntries(userList, [7, 10, 1])).toEqual([
            { id: 1, name: 'test1' },
        ]);
    });
});
