import React from "react";
import "./styles.css";
import {BsSearch} from "react-icons/bs"; 

/* Component for the Home page */
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      searchTerm: this.props.searchTerm,
      searchResults: this.props.searchResults
    }
  }

  

  render() {
    const {onChangeHandler} = this.props
      return (
        <div className="Search">
            <div id="movieTitle">Movie Title</div>
            <input type="search" onChange={onChangeHandler} id="movieInput" placeholder="Enter movie title"/>
        </div>
      );  
    }
    
}

export default Search;
