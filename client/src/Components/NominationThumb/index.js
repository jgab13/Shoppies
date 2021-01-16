import React from "react";
import Button from "react-bootstrap/Button";

class NominationThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {nom, onClickHandler} = this.props;
      return (
        <div>
          {nom.Title} ({nom.Year}) <Button onClick={(e) => onClickHandler(nom)}>Remove </Button>
        </div>
      );  
    }
    
}

export default NominationThumb;
