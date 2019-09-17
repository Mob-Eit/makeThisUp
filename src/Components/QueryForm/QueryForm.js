import React, { Component } from 'react';
import RangeSlider from './Slider.js'
import './QueryForm.scss';

class QueryForm extends Component{
    constructor(){
        super();
        this.state = {
            type: '',
            minPrice: '20',
            maxPrice: '37',
            attr:false,
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    getMinMax = (array) => {
        this.setState({
            minPrice: array[0],
            maxPrice: array[1]
        });
    }

    // error handling for form
    handleSubmit = (event) =>{
        event.preventDefault();

        if(!this.state.type){
            

            this.setState({
                attr:true
            })

        }else{
            const params = {params:{
                product_type:this.state.type,
                price_greater_than:this.state.minPrice,
                price_less_than:this.state.maxPrice,
            }};
            this.props.getData(params);
            
            this.setState({
                attr:false
            })

            this.props.changeLoadingState();
        }

    }

    render(){

        return(
            <div className="formContainer wrapper">
                <form action="">
                    <div className="filterContainer">

                        <div className="categoryFilter">
                            <h2>Category</h2>
                            <select name="type" id='type'defaultValue="Choose One" onChange={this.handleChange}>
                                <option disabled value="Choose One">Choose one</option>
                                <option value="blush">Blush</option>
                                <option value="bronzer">Bronzer</option>
                                <option value="eyebrow">Eyebrow</option>
                                <option value="eyeliner">Eyeliner</option>
                                <option value="eyeshadow">Eyeshadow</option>
                                <option value="foundation">Foundation</option>
                                <option value="lip_liner">Lip Liner</option>
                                <option value="lipstick">Lipstick</option>
                                <option value="mascara">Mascara</option>
                                <option value="nail_polish">Nail Polish</option>
                                </select>
                        </div>{/* categoryFilter */}

                        <div className="priceFilter">
                            <h2>Price: $ {this.state.minPrice} - {this.state.maxPrice}</h2>
                            <div className="slider">
                                <RangeSlider getMinMax={this.getMinMax} />
                            </div>{/* slider */}
                        </div>{/* priceFilter */}

                    </div>{/* filterContainer*/}
                    

                    <div className="buttonArea">
                        <button onClick={this.handleSubmit} className="searchButton">search</button>
                        {this.state.attr ? <label htmlFor="type" className="filterErrorMessage">Please select a category!</label>:true}
                    </div>

                </form>
            </div>/* formContainer wrapper */
        )
    }
}

export default QueryForm;