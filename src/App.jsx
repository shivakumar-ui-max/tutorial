import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1 className="text-2xl font-bold text-center"> hello world</h1>
         <h2>hii how are you</h2>
      </>
   );
}

export default App;
