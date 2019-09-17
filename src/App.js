import React, { Component } from 'react';
import axios from 'axios';
import QueryForm from './Components/QueryForm/QueryForm';
import Results from './Components/ResultsFolder/Results';
import './Components/globalStyles/App.scss';
import SwipeableTemporaryDrawer from './Components/Drawer/Drawer.js';
import firebase from 'firebase';
import Spinner from 'react-spinner-material';
import { StickyContainer, Sticky } from 'react-sticky';
import Swal from 'sweetalert2'


class App extends Component{
  constructor(){
    super();
    this.state = {
      apiData:[],
      favedItems:[],
      loading: false
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

  changeLoadingState = () => {
    this.setState({
      loading: true
    })
  }
  
  getData = (params) =>{
    const MAKEUP_API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json';
    axios.get(MAKEUP_API_URL, params)
    .then( res =>{
        const apiData = res.data;
        this.setState({
          apiData,
          loading: false
        });
        if (!res.data.length) {
          Swal.fire({
            text:'No item found, please update price range!',
            confirmButtonColor:'#6056f9',
          })
        }
    })
  }

  render(){
    
    return (
      <div className="App">
          <div className="hamTopContainer">
            <h3><span>M</span>ake<span>A</span>pp</h3>
            <SwipeableTemporaryDrawer 
              favedItems={this.state.favedItems}
              isUnliked={this.isUnliked}
              />
          </div>
          <StickyContainer>
            <div className="titlePageContainer">
              <div className="titleSubtitleContainer">
                <div className="headerContainer">
                  <h1><span>M</span>ake<span>A</span>pp</h1>
                </div>{/* headerContainer */}
                <p className="titleP">Search for a product that best suits you. </p>
              </div>{/* titleSubtitleContainer */}
              <div className="adjustZ">
                <Sticky topOffset={500}>
                  {({ style, isSticky }) =>
                    <div style={{...style, marginTop: isSticky ? '40px' : '0px'}}>
                      <div className="queryFormContainer">
                            <QueryForm 
                            getData={this.getData}
                            changeLoadingState={this.changeLoadingState}
                            />
                      </div>{/* queryFormContainer */}
                    </div>
                  }
                </Sticky>
              </div>
            </div>{/* titlePageContainer */}
            
            { this.state.loading === true ?
            <div className="loadingState">
              <Spinner
              size={50}
              spinnerColor={"#cfff31"}
              spinnerWidth={5}
              visible={true}
              />
            </div> :
            <Results 
              data={this.state.apiData}
              isLiked={this.isLiked}
              favedItems={this.state.favedItems}
              />
            }
          </StickyContainer>
        <footer>
          <p>developed by Paul Andrews,Roman Ivashkevych, Kristen Zemlak and  Nicole Lavergne</p>
        </footer>
      </div>
    );
  }
}

export default App;
