import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Parts } from "features/Parts";
import { useParts } from "features/Parts/model/useParts";
import { Backdrop, CircularProgress } from "@material-ui/core";

const App = () => {
  return (
    <>
      <>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Parts} />
          </Switch>
        </Router>
      </>
    </>
  );
};

export default App;
