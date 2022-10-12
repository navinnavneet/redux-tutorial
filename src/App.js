import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Counter from "./counter/Counter";
// import { Box} from "@chakra-ui/react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default App;
