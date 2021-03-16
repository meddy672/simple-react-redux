import React from 'react';

import './CounterLabel.css'

function CounterLabel(props) {
    return (
        <div className='CounterLabel'>
            {props.value}
        </div>
    )
}

export default CounterLabel;