import React from "react";
import "./styles.css";
import { Redirect, withRouter } from 'react-router-dom';
import Search from "./../Search";
import SearchResults from "./../SearchResults";
import Nominations from "./../Nominations";
import Banner from "./../Banner";
import Confetti from 'react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize';

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
    let newNom = this.state.nominations
    newNom.push(nom)
    this.setState({
      nominations: newNom
    })
  }

  removeNomination = (nom, event) => {
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
    const request = new Request("http://www.omdbapi.com/?s=" + value + "&type=movie&apikey=30851f8", {
        method: "GET"
    });
    const response = await fetch(request)
    const result = await response.json()
  
    if (result.Response === "True"){
      const searchResult = [];
      for (let i =0; i < 6; i++){
        if (result.Search[i] !== undefined){
          searchResult.push(result.Search[i]);  
        } else {
          break;
        }
      }
      this.setState({
        searchTerm: value,
        searchFlag: true,
        searchResult: searchResult
      })
    } else {
      if (result.Error === "Movie not found!"){
        this.setState({
          searchTerm: value,
          searchFlag: "notFound",
          searchResult: []
        })
      } else if (result.Error === "Too many results.") {
        this.setState({
          searchTerm: value,
          searchFlag: "tooMany",
          searchResult: []
        })
      } else {
        this.setState({
          searchFlag: false,
          searchResult: []
        })
      }         
    }

  }

  render() {
      // const { width, height } = useWindowSize()
      const banner = this.state.nominations.length === 5 ? <><Banner/><Confetti height={1800} numberOfPieces={1500} recycle={false}/></> : null;
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
