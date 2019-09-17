import React, { Component } from 'react';
import ColorPalette from '../ColorFolder/ColorPalette';
import LikeButton from '../LikeButtonFolder/LikeButton';
import './_singleProductCard.scss';
import he from 'he';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: '',
        }
    }

    addDefaultSrc(ev){
        ev.target.src = 'http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698951.png'
    }

    render() {

        const {data} = this.props

        return (
                <div className="singleContainer">
                    <ul>
                        {/* we need to add a key for each li */}
                        <li>
                            {/* <LikeButton 
                                data={data}
                                isLiked={this.props.isLiked}
                                favedItems={this.props.favedItems}
                            /> */}
                            <div className="imageContainer">
                                <img 
                                    src={data.image_link} 
                                    onError={this.addDefaultSrc}
                                    alt=""
                                />
                                <div className="likeButtonContainer">
                                    <LikeButton 
                                        data={data}
                                        isLiked={this.props.isLiked}
                                        favedItems={this.props.favedItems}
                                    />
                                </div>
                            </div>
                            <h2>{he.decode(data.name)}</h2>
                            <h3>{data.brand}</h3>
                            <h3>${Math.ceil(data.price)}</h3>
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