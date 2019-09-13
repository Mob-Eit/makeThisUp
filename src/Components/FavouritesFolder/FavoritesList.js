import React, {Component} from 'react'
import firebase from "../FirebaseFolder/firebase";
import RemoveButton from '../RemoveButtonFolder/RemoveButton';

class FavouritesList extends Component {
    constructor() {
        super();
        this.state = {
            storedFavourites: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const pulledItems = [];

            const data = response.val();

            console.log(data);

            for (let key in data) {
                pulledItems.push({
                    itemDetails: data[key], id: key
                });
            }

            this.setState({
                storedFavourites: pulledItems
            })            
        })
    }

    render() {
        return(
            <section className="favouritesContainer">
                {/* map over the array and create the uls in its return */}
                {this.state.storedFavourites.map((item) => {
                    return(
                        <ul className="favouritesList">
                            <li><img src={item.itemDetails.image} alt="Product Image"/></li>
                            <li>{item.itemDetails.name}</li>
                            <li>{item.itemDetails.price}</li>
                            <RemoveButton 
                                item={item.id}
                                favedItems={this.props.favedItems}
                                id={item.itemDetails.id}
                                isUnliked={this.props.isUnliked}
                            />
                        </ul>
                    )
                })}
            </section>
        )
    }
}

export default FavouritesList