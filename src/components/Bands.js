import React from 'react';

const Bands = (props) => {
    const renderBands =  props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
    })

    console.log(props)
    debugger
    return (
        <div>
            {renderBands}
        </div>
    );
}

export default Bands;

