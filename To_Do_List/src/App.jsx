import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState("");
  const [isToDo, setToDo] = useState([])


  const handleChange = (e) => {
    setValue(e.target.value);

  }
  const handleClick = () => {
    if (value) {
      
      setToDo([...isToDo, value])
      setValue("")
    }


  }
  return (
    <>
      <h3>To Do List</h3>
      <input placeholder='Enter To Do' value={value} onChange={handleChange} type='text'></input>
      <button onClick={handleClick}>Add</button>
      <ul>
        {isToDo.map((v, index) => (
          <li key={index}>
            {v}
          </li>))}
      </ul>
    </>
  )
}

export default App
