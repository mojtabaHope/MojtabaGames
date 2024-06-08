import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Screens/About/About";
import DetailsPage from "./Screens/DetailsPage/DetailsPage";
import Home from "./Screens/Home";
import Navlink from "./Screens/Navlink/Navlink";
import { Tomar } from "./Screens/Tomar/Tomar";

function App() {
  // const [initilals, setinitilals] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(currentProvince);
  // }, [currentProvince]);

  return (
    <>
      <Navlink />
      <Switch>
        <Route path="/detailsPage" component={DetailsPage} exact />
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
      </Switch>
      {/* <Tomar /> */}
    </>
  );
}

export default App;
