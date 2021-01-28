import React, {useState} from 'react';

const InputField = ({
    className,
    type,
    value,
    placeholder,
    onChange,
    errorMassage
}) =>{

    return(
        <div>
            <input
                className={className}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <span className="errorText">{errorMassage}</span>
        </div>
    );
};

export default InputField;