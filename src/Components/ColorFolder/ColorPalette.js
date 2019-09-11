import React from 'react';
import styled from 'styled-components';


function ColorPalette (props) {
    const colorArray = props.colorArray;

    // const validHex = new RegExp('/^#/');    
    return(
        <ul>
            {colorArray.map(colorItem => {
                const ColorBox = styled.div`
                    background:${colorItem.hex_value};
                    width:30px;
                    height:30px;
                    border:1px solid black;
                `
                if (!(/^[a-zA-Z]/.test(colorItem.hex_value))){
                    return(
                        <li>
                            <p>{colorItem.colour_name}</p>
                            <ColorBox> </ColorBox>
                        </li>
                    );
                }
            })}

        </ul>
    )
}

export default ColorPalette;