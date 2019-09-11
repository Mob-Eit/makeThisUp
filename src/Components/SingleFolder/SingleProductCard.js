import React, { Component } from 'react';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
        // const{productImage, productName, productPrice, productColourArray} = this.props.data;
        // call data!

        const {data} = this.props

        return (
            <section className="singleProductSection">
                <div className="singleContainer">
                   <ul>
                       <li>
                           <img src={data.image_link} alt=""/>
                           <h2>{data.name}</h2>
                           <h3>{data.price}</h3>
                           <div className="colorPalette">
                                {/* <p>{data.product_colors}</p> */}
                           </div>
                       </li>
                       
                   </ul>
                </div>
            </section>
        );
    }
}

export default SingleProductCard;