import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import HomeScreen from "./screen/HomeScreen";
import Hero from "./component/layout/Hero";
import Header from "./component/navigation/Header";
import './style/components.css';

const App = () => {

  return (
    <Provider store={store}>
        <Hero header={<Header />}>
          <HomeScreen />
        </Hero>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));