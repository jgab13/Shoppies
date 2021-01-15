import React from "react";
import "./styles.css";
import NominationThumb from "./../NominationThumb";

/* Component for the Home page */
class Nominations extends React.Component {
constructor(props) {
    super(props);
  }
  

  render() {
    const {noms, onClickHandler} = this.props
    console.log(noms)
    const results = noms === null ? null : <ul>
            {noms.map(result => (
              <li><NominationThumb nom={result} onClickHandler={onClickHandler}/></li>
              )
            )}</ul>;
      return (
        <div className="nominations">
          <h2>Nominations</h2>
          {results}
        </div>
      );  
    }
    
}
export default Nominations;
