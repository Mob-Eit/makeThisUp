import React, { Component } from 'react';
import SingleProductCard from '../SingleFolder/SingleProductCard';
import './Results.scss';
import Pages from '../Pages/Pages';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twoDArray : [],
            currentPage: 0,
        }
    }

    componentDidMount(){

        const dataClone = [...this.props.data];

        // this function converts a one dimensional array, into multiple arrays of a given length (5 product cards are shown)
        const listToMatrix = (list, elementsPerSubArray) => {
            let matrix = [], i, k;

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
            numberOfPages:matrix.length,
        })
    }

    getPageNumber = (pageNumber) =>{
        this.setState({
            currentPage:pageNumber,
        });
    }

    render() { 
        const newData = this.state.twoDArray[this.state.currentPage];
        return (
            this.state.twoDArray.length?
            <main>
                <Pages 
                    matrix={this.state.twoDArray}
                    currentPage={this.state.currentPage}
                    getPageNumber={this.getPageNumber}
                />
                <section className="resultsContainer">
                    {newData.map(element => {
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
            </main>
            :true
        );
    }
}
 
export default Results;