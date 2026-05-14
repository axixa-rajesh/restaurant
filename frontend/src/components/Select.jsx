import React from 'react';

const Select = ({
    label = '',
    value = '',
    onChange,
    options = [],
    disabled = false,
    required = false
}) => {
    return (
        <div className="select-group">
            {label && <label className="select-label">{label}</label>}
            <select
                className="select"
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;