import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // callfunction with data
    renderCards = (array) => {
        array.map(element => {
            return(
            <SingleProductCard
            productImage={element.image_link}
            productName={element.name}
            productPrice={element.price}
            productColourArray={element.product_colors}
            />
            )
        })
    }


    render() { 
        return (
            <div className="resultsContainer">
                <SingleProductCard/>
            </div>
            );
    }
}
 
export default Results;