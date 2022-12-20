import React from 'react';
import Toggle from 'react-toggle';
import './ToggleOpt.css';

function ToggleOpt(props) {
    return (
        <div className='option-cont'>
            <div>{props.optionName}</div>
            <label>
                <Toggle
                    defaultChecked='true'
                    icons={false}
                    // onChange={this.handleTofuChange}
                />
            </label>
        </div>
    );
}

export default ToggleOpt;
