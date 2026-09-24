import { useState } from "react"; 
import "./Calculator.css"; 
 
function Calculator() { 
  const [calc, setCalc] = useState({ 
    num: 0, 
    res: 0, 
    sign: "" 
  }); 
 
  const handleNumber = (value) => { 
    setCalc((prev) => ({ 
      ...prev, 
      num: prev.num === 0 
        ? Number(value) 
        : Number(String(prev.num) + value) 
    })); 
  }; 
 
  const handleOperator = (value) => { 
    setCalc((prev) => ({ 
      ...prev, 
      res: prev.num, 
      sign: value, 
      num: 0 
    })); 
  }; 
 
  const handleEqual = () => { 
    let result; 
 
    if (calc.sign === "+") { 
      result = calc.res + calc.num; 
    }  
    else if (calc.sign === "-") { 
      result = calc.res - calc.num; 
    }  
    else if (calc.sign === "*") { 
      result = calc.res * calc.num; 
    }  
    else if (calc.sign === "/") { 
      result = 
        calc.num !== 0 
          ? calc.res / calc.num 
          : "Error"; 
    }  
    else { 
      result = calc.num; 
    } 
 
    setCalc({ 
      num: result, 
      res: result, 
      sign: "" 
    }); 
  }; 
 
  const handleClear = () => { 
    setCalc({ 
      num: 0, 
      res: 0, 
      sign: "" 
    }); 
  }; 
 
  const handleDelete = () => { 
    setCalc((prev) => ({ 
      ...prev, 
      num: 
        String(prev.num).length > 1 
          ? Number(String(prev.num).slice(0, -1)) 
          : 0 
    })); 
  }; 
 
  return ( 
    <div className="calculator-container"> 
      <div className="calculator"> 
 
        <h2>My Calculator</h2> 
 
        <div className="screen"> 
          <p> 
            {calc.res !== 0 ? `${calc.res} ${calc.sign}` : ""} 
          </p> 
 
          <h1>{calc.num}</h1> 
        </div> 
 
        <div className="button-grid"> 
 
          <button className="clear-btn" onClick={handleClear}> 
            AC 
          </button> 
 
          <button className="delete-btn" onClick={handleDelete}> 
            DEL 
          </button> 
 
          <button 
            className="operator-btn" 
            onClick={() => handleOperator("/")} 
          > 
            ÷ 
          </button> 
 
          <button 
            className="operator-btn" 
            onClick={() => handleOperator("*")} 
          > 
            × 
          </button> 
 
          <button onClick={() => handleNumber("7")}>7</button> 
          <button onClick={() => handleNumber("8")}>8</button> 
          <button onClick={() => handleNumber("9")}>9</button> 
 
          <button 
            className="operator-btn" 
            onClick={() => handleOperator("-")} 
          > 
            − 
          </button> 
 
          <button onClick={() => handleNumber("4")}>4</button> 
          <button onClick={() => handleNumber("5")}>5</button> 
          <button onClick={() => handleNumber("6")}>6</button> 
 
          <button 
            className="operator-btn" 
            onClick={() => handleOperator("+")} 
          > 
            + 
          </button> 
 
          <button onClick={() => handleNumber("1")}>1</button> 
          <button onClick={() => handleNumber("2")}>2</button> 
          <button onClick={() => handleNumber("3")}>3</button> 
 
          <button 
            className="equal-btn" 
            onClick={handleEqual} 
          > 
            = 
          </button> 
 
          <button onClick={() => handleNumber("0")}> 
            0 
          </button> 
 
          <button onClick={() => handleNumber("00")}> 
            00 
          </button> 
 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Calculator; 