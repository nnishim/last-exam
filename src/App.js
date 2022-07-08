import "./App.css";
import { WrapperSC } from "./uikit/WrapperSC";
import Info from "./components/Info/Info";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <WrapperSC>
        <Info />
        <Cards/>
      </WrapperSC>
    </>
  );
}

export default App;
