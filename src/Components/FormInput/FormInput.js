import React from 'react';
import '/home/michael/crwn-clothing/src/Components/FormInput/FormInputStyles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="form-group">
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
}

export default FormInput;