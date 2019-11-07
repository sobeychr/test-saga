import { get } from 'lodash';
import { INIT_APP, NAV_PAGE } from 'Store/type';

import pages from 'Data/pages';

const initialState = {
    page: get(pages, '0.page'),
};

const navigation = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === NAV_PAGE) {
        return {
            ...state,
            page: payload,
        };
    }

    else {
        return state;
    }
};

export default navigation;
