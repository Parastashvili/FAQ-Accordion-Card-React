import "./App.css";
import AccordionCard from "./components/AccordionCard";
import logo from "./images/illustration-woman-online-mobile.svg";
import logoPattern from "./images/bg-pattern-mobile.svg";

function App() {
  return (
    <div className="App">
      <div>
        <img className="logo" src={logo} alt="logo" />
        <img className="logoPattern" src={logoPattern} alt="logo" />
      </div>
      <AccordionCard />
    </div>
  );
}

export default App;
