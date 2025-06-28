import { useState } from 'react';
import './App.css'
function App(){

  const [text , setText] = useState("")
  const [item , setItem] = useState()

    function muadarItem(event) {
      let t = event.target.value;
      setText(t)
    }

    function add() {
      
    }


  return (
    <div>
        <h1>modificador</h1>
    <br />
        <input onChange={muadarItem} type="text" />
    <br />
        <button onClick={add}>mudar</button>
    <br />
      <ul>
        <li>{text}</li>
      </ul>


    </div>
  )


}


export default App;
