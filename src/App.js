import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Parts } from "features/Parts";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Parts} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

// фильтрация и сортировка, поиск, авторизация, корзина, check-out (заплатить), страница товара, картинка товара
// убрать ts-ignore
