import React from "react";
import "./styles.css";

class SearchThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  checkMovie = (movie, noms) => {
    console.log(movie)
    console.log(noms)
    if (noms.length > 4){
      return true;
    }
    for (let i = 0; i < noms.length; i++){
      console.log(noms[i].imdbID)
      console.log(movie.imdbID)
      if (noms[i].imdbID === movie.imdbID){
        console.log("got here")
        return true;
      } 
      
    }
    return false;
  }


  render() {
    const {search, noms, onClickHandler} = this.props;
    console.log(search)
    console.log(noms)
    const flag = noms === null ? true: this.checkMovie(search, noms);
    console.log(flag)
    const nomButton = noms === null ? <button className="button" onClick={(e) => onClickHandler(search)}>Nominate</button> : (flag ? <button className="button" disabled>Nominate</button> : <button className="button" onClick={(e) => onClickHandler(search)}>Nominate</button>); 
      return (
        <div>
          <li>{search.Title} ({search.Year}) {nomButton}</li>
        </div>
      );  
    }
    
}

export default SearchThumbnail;
