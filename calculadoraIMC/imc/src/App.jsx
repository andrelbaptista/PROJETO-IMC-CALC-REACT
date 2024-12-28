import { useState } from "react";
import { data } from "./data/data";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    if (!weight || !height) return;
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");
    const imcResult = (weightFloat / (heightFloat* heightFloat)).toFixed(1);
    setImc(imcResult);

  }
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return <div className="container">{!imc ? <ImcCalc  calcImc={calcImc}/> : <ImcTable />}</div>;
}

export default App;
