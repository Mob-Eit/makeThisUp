import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import FavouritesList from '../FavouritesFolder/FavoritesList';

const useStyles = makeStyles({
list: {
    width: 250,
},
fullList: {
    width: 'auto',
},
});

export default function SwipeableTemporaryDrawer(props) {
const classes = useStyles();
const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
});

const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }

    setState({ ...state, [side]: open });
};

const sideList = side => (
    <div
    className={classes.list}
    role="presentation"
    // THIS SHIT HERE IS TO OPEN AND CLOSE THE DRAWER
    // onClick={toggleDrawer(side, false)}
    onKeyDown={toggleDrawer(side, false)}
    >
        <FavouritesList
            favedItems={props.favedItems}
            isUnliked={props.isUnliked}
        />
    </div>
);

return (
    <div>
    <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
    <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
    >
        {sideList('right')}
    </SwipeableDrawer>
    </div>
);
}