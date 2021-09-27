import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Items from "./Component/items/Items";
import Users from "./Component/users/Users";
import Price from "./Component/Price";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            Route
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/items" component={Items} />
            <Route path="/Prices" component={Price} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;