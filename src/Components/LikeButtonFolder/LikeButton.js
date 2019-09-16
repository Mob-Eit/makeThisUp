import React, { Component } from 'react';
import firebase from "../FirebaseFolder/firebase";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './LikeButton.scss';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pressed:false,
        }
    }

    likeFirebase = () => {
        
        console.log("clicking like");
        const dbRef= firebase.database().ref();
        const data = this.props.data

        dbRef.push({
            image: data.image_link, 
            name:data.name,
            price:data.price,
            id:data.id,

        })

        this.props.isLiked(data.id);
    
        this.setState({
            pressed:true
        })

    }
    componentDidMount(){
        this.props.favedItems.forEach(item => {
            if (item === this.props.data.id){
                console.log('is pressed');
                this.setState({
                    pressed:true,
                })
            }else{
                this.setState({
                    // pressed:false,
                })
            }
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.favedItems !== this.props.favedItems ){
            this.props.favedItems.forEach(item => {
                if (item === this.props.data.id){
                    console.log('is pressed');
                    this.setState({
                        pressed:true,
                    })
                }else{
                    this.setState({
                        // pressed:false,
                    })
                }
            })
        }
    }

    render() { 
        return (
            <div className="likeButtonContainer">
                {this.state.pressed?<button className="liked" disabled><Favorite></Favorite></button>:<button className="like" onClick={this.likeFirebase}><FavoriteBorder></FavoriteBorder></button>}
            </div>
        );
    }
}
 
export default LikeButton;