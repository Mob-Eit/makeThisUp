import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {

    },
    slider:{
        color:'black',
        height: 0,
    }
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.getMinMax(newValue)
    };

    return (
        <div className={classes.root}>
        
        <Slider
            className={classes.slider}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
        />
        </div>
    );
}