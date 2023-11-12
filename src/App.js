import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Parts } from "features/Parts";
import { LogInForm } from "components/LogInForm";
import { SignUpForm } from "components/SignUpForm";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Parts} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

// картинка товара, страница товара, поиск, авторизация, корзина, check-out (заплатить)
// убрать ts-ignore
 