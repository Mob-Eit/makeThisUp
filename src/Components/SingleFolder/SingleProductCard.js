import React, { Component } from 'react';
import ColorPalette from '../ColorFolder/ColorPalette';
import LikeButton from '../LikeButtonFolder/LikeButton';

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
                        {/* we need to add a key for each li */}
                        <li>
                            <img src={data.image_link} alt=""/>
                            <h2>{data.name}</h2>
                            <h3>{data.price}</h3>
                            <div className="colorPalette">
                                <ColorPalette colorArray={data.product_colors}/>
                            </div>
                            <LikeButton data={data}/>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default SingleProductCard;