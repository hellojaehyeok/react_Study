import React, {useState} from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMassage
}) =>{



    return(
        <>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <span className="errorText">{errorMassage}</span>
        </>
    );
};

export default InputField;