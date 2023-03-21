import { useMediaQuery } from "react-responsive";
import "./App.css";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <div className="App">
      {isMobile && <Mobile />}
      {!isMobile && <Home />}
    </div>
  );
}

export default App;
