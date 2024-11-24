import React from "react";

//import Scss
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./assets/scss/themes.scss";
import "./assets/scss/style.css";

//imoprt Route
import Route from "./Routes";

// Fake Backend
import fakeBackend from "./helpers/fakeBackend";

// Activating fake backend
fakeBackend();

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
