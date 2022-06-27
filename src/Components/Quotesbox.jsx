import React from 'react';
import quotes from "../quotes.json"

const QuoteBox = ({ phraseRandom }) => {


    return (
        <div>
            <div>
                <p id='text' >{quotes[phraseRandom].quote} </p>
                <h3 id='author'>{quotes[phraseRandom].author} </h3>
            </div>
        </div>
    );
};

export default QuoteBox;