import React, {useState} from "react";
import Counter from './counter';
import './style.css';

function App() {
 //Using usestate hook to manage counter state
 const [count, setCount] = useState(0);

 //Event handlers to modify teh counter state
 const increment = () => {
    setCount(count + 5);
 };

 const decrement = () => {
  setCount(count - 1);
 }

 const reset = () => {
  setCount(0);
 }

 return(
      <div className="App">
          <h1 className="mainHeading">Simple Calculator</h1>
          {/* Passing Props to the counter component*/}
          <Counter count={count} increment={increment} decrement={decrement} reset={reset}/>
      </div>
 );
}

export default App;
