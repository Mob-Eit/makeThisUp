import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
    // width: 300
    },
});

function valuetext(value) {
    return `${value}°C`;
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
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
        />
        </div>
    );
}