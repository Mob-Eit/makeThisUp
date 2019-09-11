import React from 'react';


function ColorPalette (props) {
    const colorArray = props.colorArray

    return(
        colorArray.map(colorItem => {
            return(
                <div>
                    <p>{colorItem.colour_name}</p>
                </div>
            )
        })
    )
}

export default ColorPalette;