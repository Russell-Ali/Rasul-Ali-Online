import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CircleWrapper from "../Components/Contents/Circle/CircleWrapper";
import About from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./Root.module.css";
import Footer from "../Components/Footer/Footer";
import { Scrollbars } from "react-custom-scrollbars-2";
import Three from "../Components/About/Three/Three";
const Root = () => {
  return (
    <Scrollbars
      autoHeight
      autoHeightMin="100vh"
      autoHide
      autoHideTimeout={1000}
    >
      <div className={styles.canvas}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={CircleWrapper} exact />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/" component={Footer} exact />
        </Router>
      </div>
    </Scrollbars>
  );
};
/*
        <Three /> 

*/
export default Root;
