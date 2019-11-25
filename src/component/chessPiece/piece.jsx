import React from 'react';

import 'Scss/component/chessPiece';

const ChessPiece = ({color, type, letter, number}) => {
    return (
        <div className={`chessPiece type_${type} letter_${letter} number_${number}`}>
        </div>
    );
};

export default ChessPiece;
