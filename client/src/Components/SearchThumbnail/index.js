import React from "react";
import "./styles.css";

class SearchThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  checkMovie = (movie, noms) => {
    if (noms.length > 4){
      return true;
    }
    for (let i = 0; i < noms.length; i++){
      if (noms[i].imdbID === movie.imdbID){
        return true;
      } 
      
    }
    return false;
  }


  render() {
    const {search, noms, onClickHandler} = this.props;
    const flag = noms === null ? true: this.checkMovie(search, noms);
    const nomButton = noms === null ? <button className="button" onClick={(e) => onClickHandler(search)}>Nominate</button> : (flag ? <button className="button" disabled>Nominate</button> : <button className="button" onClick={(e) => onClickHandler(search)}>Nominate</button>); 
      return (
        <div>
          <li className="list"><img className="thumb" src={search.Poster}/><br/><div className="detail">{search.Title} ({search.Year})</div><br/> {nomButton}</li>
        </div>
      );  
    }
    
}

export default SearchThumbnail;
