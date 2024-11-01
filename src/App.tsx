import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ScrollToTopButton,
  ScrollToTopOnRouteChange,
} from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  return (
    <section className={"rvs-main-content"}>
      <ScrollToTopOnRouteChange />
      <ScrollToTopButton />
    </section>
  );
};

export default App;
