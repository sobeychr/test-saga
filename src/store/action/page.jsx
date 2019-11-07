import homeData from 'Data/home.txt';
import { PAGE_END, PAGE_FETCH } from 'Store/type';

const end = (page, text) => ({
    type: PAGE_END,
    payload: {
        page,
        text,
    },
});

const fetch = page => ({
    type: PAGE_FETCH,
    payload: page,
});

const getPage = page => state => state.page.data[page];

const isLoading = state => !!state.page.loading;

export {
    end,
    fetch,

    getPage,
    isLoading,
};
