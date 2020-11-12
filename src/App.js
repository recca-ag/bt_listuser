import logo from "./logo.svg";
import "./App.css";
//Bộ định tuyến routerdom
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { routesHome } from "./routes";
import HomeTemPlate from "./template/HomeTemplate";
function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemPlate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
        {/* <Route exact={false} path="/auth" component={Auth} /> */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
