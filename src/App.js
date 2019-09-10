import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  
  getData = (params) =>{
    const MAKEUP_API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
    const apiParams = {params:{
      product_type: 'blush',
      price_greater_than: '50',
      price_greater_than: '50',

    }}
    axios.get(MAKEUP_API_URL, apiParams)
    .then( res =>{
      console.log(res);
    })
  }

  componentDidMount(){
    this.getData();
  }
  render(){
    
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
