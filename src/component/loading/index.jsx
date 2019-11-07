import React from 'react';

import Spinner from 'Component/spinner';
import 'Scss/component/loading';

const Loading = ({show}) => (
    <div id='loading' className={show ? 'show' : 'hidden'}>
        <div>
            <Spinner />
            <p className='text'>loading</p>
        </div>
    </div>
);

export default Loading;
