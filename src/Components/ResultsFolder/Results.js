import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // callfunction with data
    // renderCards = (array) => {
    //     array.map(element => {
    //         console.log(`mapped array`);
    //         return(
    //         <SingleProductCard
    //         productImage={element.image_link}
    //         productName={element.name}
    //         productPrice={element.price}
    //         productColourArray={element.product_colors}
    //         />
    //         )
    //     })
    // }

    render() { 
        const {data} = this.props
        return (
            <div className="resultsContainer">
                {/* {this.renderCards(this.props.data)} */}
                {data.map(element => {
                    return(
                        <SingleProductCard 
                            data={element}
                        />
                    )
                })}
            </div>
        );
    }
}
 
export default Results;