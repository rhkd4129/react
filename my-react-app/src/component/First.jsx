import React from 'react';

const FirstComponent = () => {
    const fontColor = {color:"red"}
    const text = "hi";
    return (
        <div style={fontColor}>
            First jsx {text}
        </div>
    );
};

export default FirstComponent;
