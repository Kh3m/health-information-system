import React from "react";

// Third Party Components
import { BrowserRouter } from "react-router-dom";

// Custom components 
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>

  );
}

export default App;
