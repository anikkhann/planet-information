import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import ListOfAllPlanet from './Components/Home/ListOfAllPlanet/ListOfAllPlanet';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FavoritesList from './Components/Home/FavoritesList/FavoritesList';
import { createContext, useEffect, useState } from 'react';
import NoMatch from './Components/Home/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  //load data from api and set into planet
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://assignment-machstatz.herokuapp.com/planet')
      .then(res => res.json())
      .then(data => setPlanet(data))
  }, [])

  return (
    <UserContext.Provider value={[planet, setPlanet]}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ListOfAllPlanet} />
            <Route exact path="/listOfAllPlanet" component={ListOfAllPlanet} />
            <Route exact path="/favoritesList" component={FavoritesList} />
            <Route exact path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>

  );
}

export default App;