import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, isNew } from 'Store/action/chess';

const Popup = () => {
    const isNewGame = useSelector(isNew);

    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(init), [dispatch]);

    return (
        <div className={`chessPopup ${isNewGame ? 'show' : 'hidden'}`}>
            <button onClick={onClick}>start new game</button>
        </div>
    );
};

export default Popup;
