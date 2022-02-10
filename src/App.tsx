import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ArrayFunctions from "./Functions/Array";

function App() {
  const nums = [1, 1, 2, 2, 3, 3, 4];
  const result = ArrayFunctions.removeDuplicatedValues([...nums]);

  const prices = [1,2,3,4,5];
  const profit = ArrayFunctions.getHigherProfit([...prices]);

  const arrayToRotate = [1,2,3, 4, 5, 6]
  const arrayRotated = ArrayFunctions.rotateArrayByKSolution2([...arrayToRotate], 3)
  
  return (
    <div className="App">
      <div>
        <p>Array 1 - Remove Duplicates from Sorted Array</p>
        <p>Parameter: {nums.join(", ")}</p>
        <p>Result: {result.join(", ")}</p>
      </div>
      <div>
        <p>Array 2 - Get higher profit</p>
        <p>Parameter: {prices.join(", ")}</p>
        <p>Result: {profit}</p>
      </div>
      <div>
        <p>Array 3 - Rotate</p>
        <p>Parameter: {arrayToRotate.join(", ")}</p>
        <p>Result: {arrayRotated.join(', ')}</p>
      </div>
    </div>
    
  );
}

export default App
