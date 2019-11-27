import React from 'react';

import 'Scss/component/button';

const Button = ({
    className,
    disabled,
    label,
    onClick,
}) => <button className={className} disabled={disabled} onClick={onClick}>{label}</button>;

export default Button;
