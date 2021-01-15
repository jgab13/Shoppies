import logo from './logo.svg';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
// import './App.css';

class App extends React.Component {
	render() {
	  return (
	    <BrowserRouter>
            <Switch>
              <Route exact path='/' render={(props) => 
                              (<Home appState={this.state} {...props}/>)}/>
              <Route render={() => <div>404 Not found!</div>}/>
            </Switch>
          </BrowserRouter>
	  );
	}
}

export default App;
