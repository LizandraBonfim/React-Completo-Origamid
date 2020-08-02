import React from 'react';
import './style.css';
import Error from './Error';

function Input({ label, type, name, value, onChange, error, onBlur }) {
    return (
        <div className="wrapper">
            <label className="label" htmlFor={name}>
                {label}

                <input
                    className="input"
                    type={type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    onBlur={onBlur}
                />
            </label>

            <Error error={error} />


        </div>
    )
}

export default Input
