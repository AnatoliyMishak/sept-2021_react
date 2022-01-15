import React from 'react';

const My = (props) => {
    let children = props.children;
    return (
        <div>
            {children[0].name}
            {children[1]}
        </div>
    );
};

export default My;