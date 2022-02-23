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
  const arrayRotated = [...arrayToRotate]
  ArrayFunctions.rotateArrayByKSolution2(arrayRotated, 3)

  const arrayDuplciated = [1,2,3,3,4,5,6]
  var containsDuplicate = !ArrayFunctions.containsDuplicate2(arrayDuplciated)

  const arrayToFindSingleNumber = [2,2,1]
  var singleNumber = ArrayFunctions.findSingleNumber(arrayToFindSingleNumber)

  const intersectoin1 = [4,9,5,5]
  const intersectoin2 = [9,4,9,8,4, 5]
  var resultIntersection = ArrayFunctions.intersectionTwoArrays2(intersectoin1, intersectoin2)
  
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
      <div>
        <p>Array 4 - Contains Duplicate</p>
        <p>Parameter: {arrayDuplciated.join(", ")}</p>
        <p>Result: {containsDuplicate.toString()}</p>
      </div>
      <div>
        <p>Array 5 - Find Single Number</p>
        <p>Parameter: {arrayToFindSingleNumber.join(", ")} </p>
        <p>Result: {singleNumber}</p>
      </div>
      <div>
        <p>Array 6 - Intersection of Two Arrays II</p>
        <p>Parameter: {intersectoin1.join(", ")} </p>
        <p>Parameter: {intersectoin2.join(", ")} </p>
        <p>Result: {resultIntersection.join(", ")}</p>
      </div>
    </div>
    
  );
}

export default App
