import React, { Component } from 'react';
import axios from 'axios';
import QueryForm from './Components/QueryForm/QueryForm';
import Results from './Components/ResultsFolder/Results';
import './App.css';
import FavouritesList from './Components/FavouritesFolder/FavoritesList';


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
      console.log(res);
        const apiData = res.data;
        this.setState({apiData});
        if (!res.data.length) {
          alert('check your price sliders')
        }
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
        <Results data={this.state.apiData}/>
        <FavouritesList />
      </div>
    );
  }
}

export default App;
