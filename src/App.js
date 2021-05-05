import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/aboutus";
import Ourboard from "./components/ourboard";
import Services from "./components/services";
import Contacts from "./components/contactus";
import Footer from "./components/footer";
import OurClients from "./components/ourclients";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/aboutus" render={() => <About />} />
          <Route exact={true} path="/contactus" render={() => <Contacts />} />
          <Route exact={true} path="/services" render={() => <Services />} />
          <Route exact={true} path="/ourboard" render={() => <Ourboard />} />
          <Route
            exact={true}
            path="/ourclients"
            render={() => <OurClients />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
