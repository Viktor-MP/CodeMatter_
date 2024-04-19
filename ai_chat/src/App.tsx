import React, { useState } from "react";
import "./App.css";
import PersonalMap from "./Components/PersonalMap/PersonalMap";
import PersonalChat from "./Components/PersonalChat/PersonalChat";
import { Sling as Hamburger } from "hamburger-react";


function App() {

  // let state = window.innerWidth < 1100 ? true : false;
    const [burger, setBurger] = useState<boolean>(false);

    // console.log(burger)
  return (
    <div className="App">

      
      <PersonalMap  className="personalMap_ person" burgerState={burger}/>
      <Hamburger
                toggled={burger}
                toggle={setBurger}
                direction="left"
                duration={0.3}
                color="#1cea1c"
                easing="ease-in"
            />
      <PersonalChat  className="personalChat_"/>

    </div>
  );
}

export default App;
