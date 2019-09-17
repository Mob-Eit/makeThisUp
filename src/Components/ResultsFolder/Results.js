import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';
import './Results.scss';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneDArray:[],
            twoDArray:[],
        }
    }

    componentDidMount(){
        const dataClone = [...this.props.data];

        const listToMatrix = (list, elementsPerSubArray) => {
            var matrix = [], i, k;

            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }

                matrix[k].push(list[i]);
            }

            return matrix;
        }

        const matrix = listToMatrix(dataClone, 5);
        this.setState({
            twoDArray:matrix,
        })
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