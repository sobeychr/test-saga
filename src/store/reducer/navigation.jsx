import NAV_PAGE from 'Store/type';

const initialState = {
    page: 'home',
};

const navigation = (state=initialState, action) => {
    const { type } = action;
    const { payload: page } = action

    if(type === NAV_PAGE) {
        return {
            ...state,
            page,
        };
    }

    else {
        return state;
    }
};

export default navigation;
