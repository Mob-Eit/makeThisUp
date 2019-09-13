import React, { Component } from 'react';
import RangeSlider from './Slider.js'
// import { array } from '../../../../../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types/index.js';

class QueryForm extends Component{
    constructor(){
        super();
        this.state = {
            type: '',
            maxPrice: '',
            minPrice: '',
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
        }

    }


    render(){

        return(
            <div>
                <form action="">

                    {this.state.attr ? <label htmlFor="type">please select one category</label>:true}
                <select name="type" id='type' onChange={this.handleChange}>
                    <option disabled selected value>Select your shit</option>
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

                    <div className="slider">
                        <RangeSlider getMinMax={this.getMinMax} />
                    </div>

                    {/* <div  className="slidecontainer">
                        maxshit
                        <input id="maxPrice" onChange={this.handleChange} type="range" min="1" max="100"  class="slider" ></input>
                    </div>

                    <div className="slidecontainer">
                        minshit
                        <input id="minPrice" onChange={this.handleChange} type="range" min="1" max="100"  class="slider"></input>
                    </div> */}
                    <button onClick={this.handleSubmit}>fire</button>
                </form>
            </div>
        )
    }
}

export default QueryForm;

