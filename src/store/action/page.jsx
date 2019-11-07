import homeData from 'Data/home.txt';
import {
    PAGE_END,
    PAGE_FETCH,
    PAGE_NAVIGATE,
} from 'Store/type';

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
const navigate = page => ({
    type: PAGE_NAVIGATE,
    payload: page,
});

const getData = page => state => state.page.data[page];
const getNavigation = state => state.page.current;

const isLoading = state => !!state.page.loading;


export {
    end,
    fetch,

    getData,
    getNavigation,
    
    isLoading,
    navigate,
};
