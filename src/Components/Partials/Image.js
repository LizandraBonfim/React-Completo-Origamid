import React from 'react';
import './style.css';

function Image({ alt, ...props }) {
    const [skeleton, setSkeleton] = React.useState(true);

    function handleLoad({ target }) {
        setSkeleton(false);
        target.style.opacity = 1;
    }

    return (
        <div className="wrapperSkeleto">
            {skeleton && <div className="skeleto"></div>}
            <img onLoad={handleLoad} className="imgSkeleto" alt={alt} {...props} />
        </div>
    )
}

export default Image
