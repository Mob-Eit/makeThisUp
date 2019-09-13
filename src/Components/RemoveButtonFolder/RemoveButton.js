import React, {Component} from 'react';
import firebase from "../FirebaseFolder/firebase"

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
            <button onClick={()=> this.removeFirebase(this.props.item)}>Remove me!</button>
        )
    }
}

export default RemoveButton;