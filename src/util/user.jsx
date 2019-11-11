const getEntry = (userList, userId) => userList.find(entry => entry.id === userId);
const getEntries = (userList, userIds) => userList.filter(entry => userIds.includes(entry.id));

export {
    getEntry,
    getEntries,
};
