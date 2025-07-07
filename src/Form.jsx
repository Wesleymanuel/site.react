import { useState } from 'react';

function Form(props) {

  const [text , setText] = useState("");

     function mostrarItem(e){
    let t = e.target.value;
    setText(t);
   }

   function addItem(event) {
    event.preventDefault();
      if(text){
      props.onAddItem(text)
      //setItems([... items ,text])
      setText("");
      }
    }


  return(
    <form>
      <input type="text" onChange={mostrarItem} value={text}/>
      <button onClick={addItem}>add</button>
    </form>
  )
}

export default Form;