import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import QueryForm from './Components/QueryForm/QueryForm';

class App extends Component{
  constructor(){
    super();
    this.state = {
      apiData:[],

    }
  }
  
  getData = (params) =>{
    const MAKEUP_API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
    axios.get(MAKEUP_API_URL, params)
    .then( res =>{
      const apiData = res.data;
      this.setState({apiData});
    })
  }

  componentDidMount(){ 
  }

  render(){
    
    return (
      <div className="App">
        <QueryForm 
          getData={this.getData}
        />
      </div>
    );
  }
}

export default App;
