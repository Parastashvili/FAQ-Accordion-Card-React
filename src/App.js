import "./App.css";
import AccordionCard from "./components/AccordionCard";
import logo from "./images/illustration-box-desktop.svg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <AccordionCard />
    </div>
  );
}

export default App;
