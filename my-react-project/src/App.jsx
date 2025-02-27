import './App.css'
import Profile from './Profile/Profile';
import { useState } from 'react';


function App() {

  let [counter, setCounter] = useState(0);
  let [text, setText] = useState("")

  const handleClick = () => {
    setCounter(counter + 1);
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const Users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
    },
    {
      "id": 2,
      "name": "",
      "username": "",
      "email": "",
      "phone": "",
      "website": "",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info",
    },
  ]

  // const handleClick = (something) => {
  //   console.log(`Button Clicked`);


  // }
  return (
    <>
      {/* <h2>Users Details  </h2>
      <Profile users={Users} />
      <button onClick={() => handleClick("First Button Clicked.")}>First Button</button>
      <button onClick={() => handleClick("Second Button Clicked.")}>Second Button</button> */}
      {/* <div>Counter Value : {counter}</div>
      <button onClick={handleClick}>Increment</button><br/> */}
      <input value={text} onChange={handleChange} />
      <div>Text value : {text}</div>

    </>
  )
}

export default App
