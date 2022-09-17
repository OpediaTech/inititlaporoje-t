import "./App.css";
import Aim from "./Components/Aim";
import Focus from "./Components/Focus";
import Package from "./Components/Package";
import Layouts from "./Utils/Layouts";

function App() {
  return (
    <>
      <Layouts>
        <h1 className="container text-center">Hosting Conneccted updated</h1>
        <Focus />
        <Aim />
        <Package />
      </Layouts>
    </>
  );
}

export default App;
