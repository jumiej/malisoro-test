import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import AppConatiner from "./components/appContainer";

function App() {
  return (
    <Router>
      <AppConatiner />
    </Router>
  );
}

export default App;
