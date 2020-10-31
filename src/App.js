import React from "react";
import "./styles.css";

export default function App() {
//remove the item from the array at any place
let array= [1,3,4,5,6,7,8];

  return (
    <div className="App">
      <h1>Delete element from the array at any given position</h1>
       <h3>Array elements:{JSON.stringify(array)}</h3>
<h4>Remove element 4</h4>
<h3>array.filter(element=>element!=5</h3>
<h3>Final array is :: [{ array.filter(element=>element!=5).join(',')}]</h3>
<h3>Updating an array element 3</h3>
<h3>Final array is : {array.map(element=>element===3?20:element).join(',')}</h3>
    </div>
  );
}
