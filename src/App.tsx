import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Parts } from "features/Parts";
import { LogInForm } from "components/LogInForm";
import { SignUpForm } from "components/SignUpForm";
import { CheckOut } from "components/CheckOut";
import { PartDescription } from "components/PartDescription";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/description/:id" component={PartDescription} />
          <Route exact path="/" component={Parts} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route exact path="/checkout" component={CheckOut} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

// поиск, infinity scroll
// убрать ts-ignore
