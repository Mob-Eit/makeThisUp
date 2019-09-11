import React, {Component} from 'react'
import firebase from "../FirebaseFolder/firebase";

class FavouritesList extends Component {
    constructor() {
        super();
        this.state {
            storedFavourites: []
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <section className="favouritesContainer">
                {/* map over the array and create the uls in its return */}
                <ul className="favouritesList">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        )
    }
}

export default FavouritesList