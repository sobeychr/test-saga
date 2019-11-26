import React from 'react';
import { useSelector } from 'react-redux';

import { isNew } from 'Store/action/chess';

const Popup = () => {
    const isNewGame = useSelector(isNew);

    const onClick = e => {

    };

    return (
        <div className={`chessPopup ${isNewGame ? 'show' : 'hidden'}`}>
            <button onClick={onClick}>
                start new game
            </button>
        </div>
    );
};

export default Popup;
