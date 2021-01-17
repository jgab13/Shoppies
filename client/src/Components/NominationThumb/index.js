import React from "react";
import "./../SearchThumbnail/styles.css"

class NominationThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {nom, onClickHandler} = this.props;
      return (
        <div>
          <li className="list"><img className="thumb" src={nom.Poster}/><br/><div className="detail">{nom.Title} ({nom.Year}) </div><br/><button className="button" onClick={(e) => onClickHandler(nom)}>Remove </button></li>
        </div>
      );  
    }
    
}

export default NominationThumb;
