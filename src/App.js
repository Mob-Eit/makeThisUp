import React, { Component } from 'react';
import axios from 'axios';
import QueryForm from './Components/QueryForm/QueryForm';
import Results from './Components/ResultsFolder/Results';
import './globalStyles/App.scss';
import SwipeableTemporaryDrawer from './Components/Drawer/Drawer.js';
import firebase from 'firebase';

class App extends Component{
  constructor(){
    super();
    this.state = {
      apiData:[],
      favedItems:[],

    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref()

    dbRef.on('value', (response) => {
      const pulledFaves = [];

      const data = response.val();

      for (let key in data) {
        pulledFaves.push(
          data[key].id
        );
        
      }

      this.setState({
        favedItems: pulledFaves
      });
    });
  }

  isLiked = (id) => {
    const clonedFavedItems = [...this.state.favedItems];
    clonedFavedItems.push(id);
    this.setState({
      favedItems:clonedFavedItems,
    })
  }

  isUnliked = (id) =>{
    const clonedFavedItems = [...this.state.favedItems];
    const filteredFavedItems = clonedFavedItems.filter( value => {
      return value !== id;
    });
    this.setState({
      favedItems:filteredFavedItems,
    });
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

  render(){
    
    return (
      <div className="App">
        <header>
          <div className="hamTopContainer">
            <h3><span>M</span>ake<span>A</span>pp</h3>
            <SwipeableTemporaryDrawer 
              favedItems={this.state.favedItems}
              isUnliked={this.isUnliked}
            />
          </div>
          <div className="titlePageContainer">
            <div className="headerContainer">
              <h1><span>M</span>ake<span>A</span>pp</h1>
            </div>
            <p className="titleP">Search for a product that best suits you. </p>
          </div>
        </header>
          <QueryForm 
            getData={this.getData}
          />
          <Results 
            data={this.state.apiData}
            isLiked={this.isLiked}
            favedItems={this.state.favedItems}
          />
        <footer>
          <p>developed by Paul Andrews,Roman Ivashkevych, Kristen Zemlak and  Nicole Lavergne</p>
        </footer>
      </div>
    );
  }
}

export default App;
