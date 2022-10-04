import React from "react";

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

  return <div>App component</div>;
}

export default App;
