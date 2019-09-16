import React, {Component} from 'react';
import firebase from "../FirebaseFolder/firebase"
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import './_removeButton.scss';

class RemoveButton extends Component {
    constructor() {
        super();
    }


    removeFirebase = (itemId) => {
        const dbRef = firebase.database().ref();
        const {favedItems, id} = this.props;
        dbRef.child(itemId).remove();
        favedItems.forEach(item => {
            if (item === id ){
                this.props.isUnliked(id);
            }
        })
    }


    render(props) {
        return(
            <button className="removeButton" onClick={()=> this.removeFirebase(this.props.item)}><RemoveCircleOutline></RemoveCircleOutline></button>
        )
    }
}

export default RemoveButton;