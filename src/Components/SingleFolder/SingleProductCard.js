import React, { Component } from 'react';
import ColorPalette from '../ColorFolder/ColorPalette';
import LikeButton from '../LikeButtonFolder/LikeButton';
import './_singleProductCard.scss';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const {data} = this.props

        return (
                <div className="singleContainer">
                    <ul>
                        {/* we need to add a key for each li */}
                        <li>
                            <LikeButton 
                                data={data}
                                isLiked={this.props.isLiked}
                                favedItems={this.props.favedItems}
                            />
                            <img src={data.image_link} alt=""/>
                            <h2>{data.name}</h2>
                            <h3>${data.price}</h3>
                            <div className="colorPalette">
                                <ColorPalette colorArray={data.product_colors}/>
                            </div>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default SingleProductCard;