import NavComp from "./components/navbar/NavComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <NavComp />
      <Home />
    </div>
  );
}

export default App;
