import { useState } from 'react'
import './App.css'


const App =() => {
const [counter, setCounter] = useState(15)

const userName = "Sakib Al hasan"
//let counter = 20


/**
 * This function is used to add the value to the counter.
 * It is called when the user clicks on the add button.
 *
 * @param {void} None
 * @return {void} None
 */
const addValue = () => {

  // Call the setCounter function to update the counter value.
  // Use the prevCounter parameter to get the previous value.
  // Add 1 to the previous value and update the counter.

  // Call the setCounter function three more times to update the counter.

  // Log the counter value to the console.

 setCounter((prevCounter) => prevCounter + 1)
 setCounter((prevCounter) => prevCounter + 1)
 setCounter((prevCounter) => prevCounter + 1)
 setCounter((prevCounter) => prevCounter + 1)

  console.log(counter)
}


const removeValue = () => {
  setCounter((prevCounter) => prevCounter - 1)
  setCounter((prevCounter) => prevCounter - 1)
  setCounter((prevCounter) => prevCounter - 1)
  setCounter((prevCounter) => prevCounter - 1)
  console.log(counter)
}

  return (
    <>
     <h1>Hello {userName} {counter}</h1>
     <h2>Counter value: {counter} </h2>
     <button onClick={addValue}>Add value</button> {' '}
     <button onClick={removeValue}>Remove value</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
