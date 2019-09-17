import React, { Component } from 'react';
import './Pages.scss';

class Pages extends Component{
    render(props){
        return(
            <div className="pages">
            {this.props.matrix.map((page, index) => {
                return <button onClick={() => {this.props.getPageNumber(index)}} key={index+1}>{index+1}</button>
            })}
            </div>
        )
    }
}

export default Pages;
