import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Screens/About/About";
import DetailsPage from "./Screens/DetailsPage/DetailsPage";
import Home from "./Screens/Home";
import Navlink from "./Screens/Navlink/Navlink";
import Tomar from "./Screens/Tomar/Tomar";
import MyContext from "./core/Context/UserContext";

function App() {
  const [user, setUser] = useState({ name: "", level: 0, score: 0 });
  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Navlink />
      <Switch>
        <Route path="/detailsPage" component={DetailsPage} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/" component={Tomar} exact />
      </Switch>
    </MyContext.Provider>
  );
}

export default App;
