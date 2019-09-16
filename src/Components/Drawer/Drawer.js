import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import FavouritesList from '../FavouritesFolder/FavoritesList';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
list: {
    width: 300,
},
fullList: {
    width: 'auto',
},
listIcon: {
    color: 'white',
    border: '1px solid transparent',
    transition: 'border .3s',
    '&:hover':{
        border: '1px solid white',
    }
},

});

export default function SwipeableTemporaryDrawer(props) {
const classes = useStyles();
const [state, setState] = React.useState({
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
    // THIS HERE IS TO OPEN AND CLOSE THE DRAWER
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
  
    <Button className="drawerButton" onClick={toggleDrawer('right', true)}><ListIcon className={classes.listIcon}></ListIcon></Button>
 
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