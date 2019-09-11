import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

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