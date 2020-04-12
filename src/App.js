import React from "react";
import { AppThemeProvider } from "./theme/index"

import Layout from "./Layout/Layout";

function App() {
  return (
    <AppThemeProvider>
        <Layout />
    </AppThemeProvider>
  
  );
}

export default App;
