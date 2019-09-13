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
                this.setState({
                    pressed:true,
                })
            }else{
                this.setState({
                    pressed:false,
                })
            }
        })
    }

    componentDidUpdate(prevProps){
        console.log('i updated');
        if (prevProps.favedItems !== this.props.favedItems ){
            this.props.favedItems.forEach(item => {
                console.log(item)
                if (item === this.props.data.id){
                    this.setState({
                        pressed:true,
                    })
                }else{
                    this.setState({
                        pressed:false,
                    })
                }
            })
        }
    }


    // seeRemove() => {
    //  if remove button is clicked, enable heart button again
    // }

    render(props) { 
        return (
            <div>
                {this.state.pressed?<button disabled onClick={this.likeFirebase}>like me!</button>:<button onClick={this.likeFirebase}>like me!</button>}
                {/* // <button onClick={this.likeFirebase}>like me!</button> */}
                
            </div>
         );
    }
}
 
export default LikeButton;