import React, { Component } from 'react';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
    // call data!
        const{productImage, productName, productPrice, productColourArray} = this.props.data;

        return (
            <section className="singleProductSection">
                <div className="singleContainer">
                   <ul>
                       <li>
                           <img src={productImage} alt=""/>
                           <h2>{productName}</h2>
                           <h3>{productPrice}</h3>
                           <div className="colorPalette">
                                <p>{productColourArray}</p>
                           </div>
                       </li>
                       
                   </ul>
                </div>
            </section>
        );
    }
}

export default SingleProductCard;