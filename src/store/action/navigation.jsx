import { NAV_PAGE } from 'Store/type';

const getPage = state => state.navigation.page;

const setPage = page => ({
    type: NAV_PAGE,
    payload: page,
});

export {
    getPage,
    setPage,
};
