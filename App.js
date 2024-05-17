import React from 'react';
import './App.css';
import { useState } from "react";

function CalcButton({ backgroundColor, label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick} style={{ background: backgroundColor }}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState('0');
  const [n1, setN1] = useState(null);
  const [n2, setN2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = (e) => {
    setDisp('0');
    setN1(null);
    setN2(null);
    setOp(null);
  }

  const equalClickHandler = (e) => {
    if (n1 !== null && op !== null && n2 !== null) {
      let result;
      switch (op) {
        case "ADD":
          result = parseFloat(n1) + parseFloat(n2);
          break;
        case "SUB":
          result = parseFloat(n1) - parseFloat(n2);
          break;
        case "DIV":
          result = parseFloat(n1) / parseFloat(n2);
          break;
        case "MUL":
          result = parseFloat(n1) * parseFloat(n2);
          break;
        case "EXP":
          result = Math.pow(parseFloat(n1), parseFloat(n2));
          break;
        case "MOD":
          result = parseFloat(n1) % parseFloat(n2);
          break;
        default:
          result = 'Error';
      }
      setDisp(result.toString());
      setN1(result.toString());
      setN2(null);
      setOp(null);
    }
  }

  const numberClickHandler = (e) => {
    const value = e.target.innerHTML;

    if (op === null) {
      if (n1 === null || n1 === '0') {
        setN1(value);
        setDisp(value);
      } else {
        setN1(n1 + value);
        setDisp(n1 + value);
      }
    } else {
      if (n2 === null || n2 === '0') {
        setN2(value);
        setDisp(value);
      } else {
        setN2(n2 + value);
        setDisp(n2 + value);
      }
    }
  }

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (n1 !== null) {
      if (n2 !== null) {
        equalClickHandler();
      }
      setOp(value);
      setDisp(value);
    }
  }

  const decimalClickHandler = (e) => {
    const value = e.target.innerHTML;

    if (op === null) {
      if (n1 === null) {
        setN1('0' + value);
        setDisp('0' + value);
      } else if (!n1.includes('.')) {
        setN1(n1 + value);
        setDisp(n1 + value);
      }
    } else {
      if (n2 === null) {
        setN2('0' + value);
        setDisp('0' + value);
      } else if (!n2.includes('.')) {
        setN2(n2 + value);
        setDisp(n2 + value);
      }
    }
  }

  const negClickHandler = (e) => {
    if (op === null) {
      if (n1 !== null) {
        setN1((-parseFloat(n1)).toString());
        setDisp((-parseFloat(n1)).toString());
      }
    } else {
      if (n2 !== null) {
        setN2((-parseFloat(n2)).toString());
        setDisp((-parseFloat(n2)).toString());
      }
    }
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>HAZEL JOYCE Y. SANGIL</h1>
        <h2>BSCPE-2A</h2>
      </div>
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"DIV"} onClick={opClickHandler} />
          <CalcButton label={7} onClick={numberClickHandler} />
          <CalcButton label={8} onClick={numberClickHandler} />
          <CalcButton label={9} onClick={numberClickHandler} />
          <CalcButton label={"MUL"} onClick={opClickHandler}  />
          <CalcButton label={4} onClick={numberClickHandler} />
          <CalcButton label={5} onClick={numberClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} />
          <CalcButton label={"ADD"} onClick={opClickHandler}  />
          <CalcButton label={1} onClick={numberClickHandler} />
          <CalcButton label={2} onClick={numberClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} />
          <CalcButton label={"SUB"} onClick={opClickHandler}  />
          <CalcButton label={"CLR"} onClick={clrClickHandler}  />
          <CalcButton label={0} onClick={numberClickHandler} />
          <CalcButton label={"."} onClick={decimalClickHandler} />
          <CalcButton label={"EXP"} onClick={opClickHandler}  />
          <CalcButton label={"MOD"} onClick={opClickHandler}  />
          <CalcButton label={"NEG"} onClick={negClickHandler}  />
          <CalcButton label={"EQ"} onClick={equalClickHandler}  />
        </div>
      </div>
    </div>
  );
}
