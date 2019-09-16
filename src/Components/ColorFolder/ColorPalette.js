import React, { Component } from 'react';
import styled from 'styled-components';
import './ColorPalette.scss';

class ColorPalette extends Component{

    constructor(){
        super();
        this.state = {
            height: '25px'
        }
    }
    // This one here removes duplicates from the color data that STUPID API provides.

    render(){
        const colorArray = this.props.colorArray;
            const convertedArray = [];
    
            // this one here flattens the objects in color data;
            colorArray.forEach(colorItem => {
                if (!(/^[a-zA-Z]/.test(colorItem.hex_value))){
                    if (/,/.test(colorItem.hex_value)){
                        const subArray = colorItem.hex_value.split(',');
                        subArray.forEach( color =>{
                            convertedArray.push(color);
                        });
                    } else {
                        convertedArray.push(colorItem.hex_value);
                    }
                }
            });

        const reducedArray = convertedArray.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, []);

        return(
            <ul>
                {reducedArray.map(color => {
                    const ColorBox = styled.div`
                        background:${color};
                        width:25px;
                        height:25px;
                        border:1px solid black;
                        border-radius:50%;
                    `
                    return(
                        <li>
                            <ColorBox className="colorBox"> </ColorBox>
                        </li>
                    );
                })}
                
            </ul>
        )
    }

}

export default ColorPalette;