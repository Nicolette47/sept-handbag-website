import React from 'react';

//function Button (props) {
//    return (
//        <button
//            type={props.type}
//            onClick={props.onClick}
//            disabled={props.ondisabled}
//        >
//            {props.buttontext}
//        </button>
//    );
//}

//export default Button;

function Button ({type, onClick, ondisabled, buttontext}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={ondisabled}
        >
            {buttontext}
        </button>
    );
}

export default Button;
