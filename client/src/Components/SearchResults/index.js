import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form"; 
import SearchThumbnail from "./../SearchThumbnail";


/* Component for the Home page */
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   searchFlag: this.props.searchFlag,
    //   searchTerm: this.props.searchTerm,
    //   searchResult: this.props.searchResult,
    //   noms: this.props.noms
    // }
  }
  

  render() {
    const {searchFlag, searchResult, searchTerm, noms, onClickHandler} = this.props;
    console.log(searchFlag)
    console.log(searchResult)
    console.log(searchTerm)
    console.log(noms)

    const title = searchFlag !== null && searchFlag && searchTerm !== null? <h2>Results for "{searchTerm}"</h2> : <h2>Results will be shown here</h2>;
    const results = searchFlag !== null && searchFlag && searchTerm !== null ? <ul>
            {searchResult.map(result => (
              <li><SearchThumbnail search={result} noms={noms} onClickHandler={onClickHandler}/></li>
              )
            )}</ul> : null;
      if (searchFlag === null) {
        return (<div></div>);
      } else {
        return (
          <div className="searchResults">
            {title}
            {results}
          </div>);
      }  
    }
    
}

export default SearchResults;
