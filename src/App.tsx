import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Home } from "./Home";
import { isBigState, resizeState } from "./utils/atom";

function App() {
  const [screen, setScreen] = useState(window.outerWidth);
  const setSize = useSetRecoilState(resizeState);
  const setBig = useSetRecoilState(isBigState);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (screen >= 980) {
      setSize("Web");
    } else if (screen <= 700 && screen > 560) {
      setSize("Mobile");
    } else if (screen <= 560) {
      setSize("Small");
    } else {
      setSize("Mid");
    }
    if (screen > 560) {
      setBig("Big");
    } else {
      setBig("Small");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return <Home />;
}

export default App;
