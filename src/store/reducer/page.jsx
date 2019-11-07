import {
    PAGE_END,
    PAGE_FETCH,
    PAGE_NAVIGATE,
} from 'Store/type';

const initialState = {
    current: '',
    loading: false,
    data: {},
};

const page = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === PAGE_END) {
        const { content, page } = payload;
        return {
            ...state,
            loading: false,
            page: {
                ...state.data,
                [page]: content,
            },
        };
    }
    else if(type === PAGE_FETCH) {
        return {
            ...state,
            loading: payload,
        };
    }
    else if(type === PAGE_NAVIGATE) {
        return {
            ...state,
            current: payload,
        };
    }
    else {
        return state;
    }
};

export default page;
