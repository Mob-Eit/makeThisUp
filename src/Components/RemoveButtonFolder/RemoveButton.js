import React from 'react';
import firebase from "../FirebaseFolder/firebase"
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import './_removeButton.scss';


function RemoveButton (props) {

    // this updates firebase database based on what the user "likes" and allows user to re-like item after unliking
    const removeFirebase = (itemId) => {
        const dbRef = firebase.database().ref();
        const {favedItems, id} = props;
        dbRef.child(itemId).remove();
        favedItems.forEach(item => {
            if (item === id ){
                props.isUnliked(id);
            }
        })
    }

    return(
        <button className="removeButton" onClick={()=> removeFirebase(props.item)}>
            <RemoveCircleOutline>
            </RemoveCircleOutline>
        </button>
    )
    
}

export default RemoveButton;