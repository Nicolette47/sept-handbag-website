import React from 'react';

function Button (props) {
console.log(props);
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            disabled={props.ondisabled}
        >
            {props.buttontext}
        </button>

    );
}


export default Button;
