import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicsofMotion from "./BasicsofMotion";
import Gestures from "./Gestures";
import Aniamtioncontrol from "./Aniamtioncontrol";
import Viewbasedanimation from "./Viewbasedanimation";
import Scrollbasedanimation from "./Scrollbasedanimation";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BasicsofMotion/> */}
      {/* <Gestures/> */}

      {/* <Aniamtioncontrol/> */}
      {/* <Viewbasedanimation /> */}
      <Scrollbasedanimation/>
    </>
  );
}

export default App;
