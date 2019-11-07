import homeData from 'Data/home.txt';
import { DATA_END, DATA_FETCH } from 'Store/type';

const isLoading = state => !!state.data.loading;

const getHomeData = state => state.data.data.home;

const loadHome = ({
    type: DATA_FETCH,
    payload: 'home',
});

const loadHomeEnd = ({
    type: DATA_END,
    payload: {
        page: 'home',
        content: homeData,
    },
});

export {
    getHomeData,
    isLoading,
    loadHome,
    loadHomeEnd,
};
