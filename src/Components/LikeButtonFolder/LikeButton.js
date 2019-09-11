import React, { Component } from 'react';
import firebase from "../FirebaseFolder/firebase";


class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pressed:false
         }
    }

    likeFirebase = () => {
        
        console.log("clicking like");
        const dbRef= firebase.database().ref();
        const data = this.props.data

        dbRef.push({
            image: data.image_link, 
            name:data.name,
            price:data.price
        })
    
        this.setState({
            pressed:true
        })

    }
    render() { 
        return ( 
            <button onClick={this.likeFirebase}>like me!</button>
         );
    }
}
 
export default LikeButton;