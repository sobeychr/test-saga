import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from 'Component/spinner';
import { isLoading } from 'Store/action/data';
import 'Scss/component/loading';

const Loading = () => {
    const show = useSelector(isLoading);

    return (
        <div id='loading' className={show ? 'show' : 'hidden'}>
            <div>
                <Spinner />
                <p className='text'>loading</p>
            </div>
        </div>
    );
};

export default Loading;
