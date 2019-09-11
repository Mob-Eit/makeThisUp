import React, {Component} from 'react';
import firebase from "../FirebaseFolder/firebase"

class RemoveButton extends Component {
    constructor() {
        super();
    }


    removeFirebase = (itemId) => {
        const dbRef = firebase.database().ref();

        dbRef.child(itemId).remove();
    }


    render(props) {
        return(
            <button onClick={()=> this.removeFirebase(this.props.item)}>Remove me!</button>
        )
    }
}

export default RemoveButton;