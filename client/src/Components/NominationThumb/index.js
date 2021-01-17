import React from "react";
import "./styles.css";

class NominationThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {nom, onClickHandler} = this.props;
      return (
        <div>
          {nom.Title} ({nom.Year}) <button className="button" onClick={(e) => onClickHandler(nom)}>Remove </button>
        </div>
      );  
    }
    
}

export default NominationThumb;
