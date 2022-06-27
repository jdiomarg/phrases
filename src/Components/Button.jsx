import React from 'react';

const Button = ({ togglePhrase, textColor }) => {


    return (
        <div id="container">
            <button style={{ backgroundColor: textColor }} onClick={togglePhrase}>New Quote</button>
        </div >
    );
};

export default Button;