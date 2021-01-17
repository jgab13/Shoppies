import React from "react";
import "./styles.css";
import Form from "react-bootstrap/Form"; 
import SearchThumbnail from "./../SearchThumbnail";


/* Component for the Home page */
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const {searchFlag, searchResult, searchTerm, noms, onClickHandler} = this.props;

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
