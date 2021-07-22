import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange= {handleChange} {...otherProps}/>
        {
            label ? //if the label exists
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
            {label /*label is displayed*/} 
            </label>)
            : null //otherwise null
        }

    </div>

);

export default FormInput;