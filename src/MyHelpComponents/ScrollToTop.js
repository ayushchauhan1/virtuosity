import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const BootstrappedLayout = () => {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    };
    return <Fragment>{BootstrappedLayout()}</Fragment>;
  }
}

export default withRouter(ScrollToTopRoute);
