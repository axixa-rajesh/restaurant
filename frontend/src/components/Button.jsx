import React from 'react';

const Button = ({ variant = 'primary', type = 'button', disabled = false, onClick, children }) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;