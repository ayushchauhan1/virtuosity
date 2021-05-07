import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/aboutus";
import Ourboard from "./components/ourboard";
import Services from "./components/services";
import Contacts from "./components/contactus";
import Footer from "./components/footer";
import OurClients from "./components/ourclients";
import Business from "./components/Business Setup Advisory";
import ScrollToTop from "./components/ScrollToTop/index";
import IndirectTax from "./components/indirect-tax";
import Noncore from "./components/noncore";
import DirectTax from "./components/directtax";
import LitigationSupport from "./components/LitigationSupport";
import GST from "./components/gst";
import CFA from "./components/corporatefinancialadvisory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTopI from "./MyHelpComponents/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTopI>
          <Header />
          <Switch>
            <Route exact={true} path="/" render={() => <Home />} />
            <Route exact={true} path="/aboutus" render={() => <About />} />
            <Route exact={true} path="/contactus" render={() => <Contacts />} />
            <Route exact={true} path="/services" render={() => <Services />} />
            <Route exact={true} path="/ourboard" render={() => <Ourboard />} />
            <Route exact={true} path="/indirect_tax" render={() => <IndirectTax />} />
            <Route exact={true} path="/non_core_process_outsourching" render={() => <Noncore />} />
            <Route exact={true} path="/direct_tax" render={() => <DirectTax />} />
            <Route exact={true} path="/litigation_support" render={() => <LitigationSupport />} />
            <Route exact={true} path="/gst" render={() => <GST />} />
            <Route exact={true} path="/corporate_financial_advisory" render={() => <CFA />} />
            <Route
              exact={true}
              path="/business_setup_advisory"
              render={() => <Business />}
            />
            <Route
              exact={true}
              path="/ourclients"
              render={() => <OurClients />}
            />
          </Switch>
        </ScrollToTopI>
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
