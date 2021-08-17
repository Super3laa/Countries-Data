import React, { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { lightTheme, darkTheme } from "./assets/styles/themes";
import Routes from './Routes/index'
function App() {
  const [choosenTheme,setTheme] = useState(lightTheme);
  function toggleTheme (){
    setTheme(choosenTheme===lightTheme ? darkTheme : lightTheme)
  }
  return (
    <ThemeProvider theme={choosenTheme}>
      <>
        <GlobalStyles />
          <div className="App">
          <Routes theme={{toggleTheme:toggleTheme,theme:choosenTheme}}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
