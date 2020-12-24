import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import ListOfAllPlanet from './Components/Home/ListOfAllPlanet/ListOfAllPlanet';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FavoritesList from './Components/Home/FavoritesList/FavoritesList';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [ planet, setPlanet] = useState({
    name: '',
  });
  return (
    <UserContext.Provider value={[planet, setPlanet]}>
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={ListOfAllPlanet}/>
            <Route exact path="/listOfAllPlanet" component={ListOfAllPlanet}/>
            <Route exact path="/favoritesList" component={FavoritesList}/>
           
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
   
  );
}

export default App;
