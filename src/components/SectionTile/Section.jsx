import React from 'react';


function Section(props) {
    console.log(props);
    return (
        <section>
            {props.children}
        </section>

    );
}

export default Section;