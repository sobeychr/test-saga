import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'Component/button';
import { isNew, start } from 'Store/action/chess';

const Popup = () => {
    const isNewGame = useSelector(isNew);

    const dispatch = useDispatch();
    const onClick = useCallback(() => dispatch(start), [dispatch]);

    return (
        <div className={`chessPopup ${isNewGame ? 'show' : 'hidden'}`}>
            <Button label="start new game" onClick={onClick} />
        </div>
    );
};

export default Popup;
