import React from "react";
import { ThemeProvider } from "styled-components";
import Child1 from "../child1/child1";
import { AppReset } from "./app.styles";

function App() {
  
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/users'
        );
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        console.log(data);
        
      } catch (error) {
        console.log("Network Error:", error);
      }
    })();
  }, []);

  const theme = {
    colors: {
      main: '#fff',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <AppReset />
      <Child1 />
    </ThemeProvider>
  );
}

export default App;
