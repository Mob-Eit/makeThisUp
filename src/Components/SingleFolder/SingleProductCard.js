import React, { Component } from 'react';
import ColorPalette from '../ColorFolder/ColorPalette';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

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
                                <ColorPalette colorArray={data.product_colors}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default SingleProductCard;