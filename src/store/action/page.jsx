import { PAGE_END, PAGE_ERROR, PAGE_FETCH, PAGE_NAVIGATE } from 'Store/type';

const end = (page, content) => ({
    type: PAGE_END,
    payload: {
        content,
        page,
    },
});
const error = {
    type: PAGE_ERROR,
};
const fetch = page => ({
    type: PAGE_FETCH,
    payload: page,
});
const navigate = page => ({
    type: PAGE_NAVIGATE,
    payload: page,
});

const getData = page => state => state.page.data[page];
const getNavigation = state => state.page.current;

const isLoading = state => !!state.page.loading;

export { end, error, fetch, getData, getNavigation, isLoading, navigate };
