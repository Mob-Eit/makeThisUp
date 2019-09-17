import React, { Component } from 'react';
import './Pages.scss';

class Pages extends Component{
    render(){
        return(
            <div className="pages">
            {this.props.matrix.map((page, index) => {

                // ternary operator below checks what current page user is on, button changes background to indicate what page 
                return <button className={this.props.currentPage===index?'pressed':'pageButton'} onClick={() => {this.props.getPageNumber(index)}} key={index+1}>{index+1}</button>

            })}
            </div>
        )
    }
}

export default Pages;
