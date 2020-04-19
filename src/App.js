import React from "react";
import { AppThemeProvider } from "./theme/index"

import Layout from "./Layout/Layout";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <AppThemeProvider>
        <Layout />
    </AppThemeProvider>
  
  );
}

export default App;
