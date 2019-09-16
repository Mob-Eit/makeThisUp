import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';
import './Results.scss';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {data} = this.props
        return (
            <section className="resultsContainer">
                {data.map(element => {
                    return(
                        <SingleProductCard
                            key={element.id} 
                            data={element}
                            isLiked={this.props.isLiked}
                            favedItems={this.props.favedItems}
                        />
                    )
                })}
            </section>
        );
    }
}
 
export default Results;