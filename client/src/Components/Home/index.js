import React from "react";
import "./styles.css";

import { Redirect, withRouter } from 'react-router-dom';
import Search from "./../Search";
import SearchResults from "./../SearchResults";
import Nominations from "./../Nominations";
import Banner from "./../Banner";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFlag: false,
      searchTerm: "",
      searchResult: [],
      nominations: []
    }
    
  }

  setNomination = (nom, event) => {
    console.log("This is the nomination value = or at least it should be")
    console.log(nom)
    console.log(event)
    let newNom = this.state.nominations
    newNom.push(nom)
    this.setState({
      nominations: newNom
    })
  }

  removeNomination = (nom, event) => {
    console.log("In order to remove nominations")
    console.log(nom)
    console.log(event)
    let noms = this.state.nominations
    const index = noms.indexOf(nom);
    noms.splice(index, 1)

    this.setState({
      nominations: noms
    })
  }

  setSearchTerm = async (event) => {
    event.preventDefault()
    const value = event.target.value
    console.log(this.state.searchTerm)
    const request = new Request("http://www.omdbapi.com/?s=" + value + "&type=movie&apikey=30851f8", {
        method: "GET"
    });
    const response = await fetch(request)
    const result = await response.json()
    console.log(result)
  
    if (result.Response === "True"){
      const searchResult = [];
      for (let i =0; i < 5; i++){
        if (result.Search[i] !== undefined){
          searchResult.push(result.Search[i]);  
        }
        
      }
      console.log(searchResult)
      this.setState({
        searchTerm: value,
        searchFlag: true,
        searchResult: searchResult
      })
      console.log(this.state.searchFlag)
      console.log(this.state.searchResult)
    } else {
      //Error handling
      if (result.Response === "False"){
        this.setState({
          searchTerm: "",
          searchFlag: false,
          searchResult: []
        })
        //Banner that says movie not found!
      } else{
        this.setState({
          searchTerm: "",
          searchFlag: false,
          searchResult: []
        })
        //Banner that says too many results
      }
    }

  }


  render() {
      const banner = this.state.nominations.length === 5 ? <Banner/> : null;
      return (
        <div className="home">
          {banner}
          
          <h1>The Shoppies</h1>
          <div className="searchHeader"><Search onChangeHandler={this.setSearchTerm}/></div>
          <div className="leftPane"><SearchResults onClickHandler={this.setNomination} searchFlag={this.state.searchFlag} searchTerm={this.state.searchTerm} searchResult={this.state.searchResult} noms={this.state.nominations}/></div>
          <div className="rightPane"><Nominations noms={this.state.nominations} onClickHandler={this.removeNomination}/></div>
        </div>
      );  
    }
    
}

export default withRouter(Home);
