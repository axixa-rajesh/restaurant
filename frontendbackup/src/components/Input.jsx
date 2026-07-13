import React from 'react';

const Input = ({type = 'text',label = '',placeholder = '',value = '',onChange,disabled = false,required = false}) => {
    return (
        <div className="input-group">
            {label && <label className="input-label">{label}</label>}
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
        </div>
    );
};

export default Input;