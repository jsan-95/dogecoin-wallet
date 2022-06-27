import React from 'react';


const Hero = (props) => {
    const { header, children } = props;

    return (
        <div className="hero is-fullheight">

            <div className="hero-head">
                {header}
            </div>

            <div className="hero-body">
                {children}
            </div>
            
        </div>
    );
};

export default Hero;
