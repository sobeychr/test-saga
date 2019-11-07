import { DATA_END, DATA_FETCH } from 'Store/type';

const initialState = {
    loading: false,
    data: {},
};

const data = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === DATA_END) {
        const { content, page } = payload;
        return {
            ...state,
            loading: false,
            data: {
                ...state.data,
                [page]: content,
            },
        };
    }
    else if(type === DATA_FETCH) {
        return {
            ...state,
            loading: payload,
        };
    }
    else {
        return state;
    }
};

export default data;
