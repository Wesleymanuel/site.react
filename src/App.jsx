import { useState } from 'react';
import List from './List'
import Item  from './Objeto';
import './App.css'
import Form from './Form';

function App(){
  
  
  const [items , setItems] = useState([]);
 
  function onAddItem(text) {
    let it = new Item(text)

    setItems([...items, it])
  }

   

  return (
    
    <div>
    <Form onAddItem={onAddItem}></Form>
    <List items={items}></List>
      
    </div>
  )
}


export default App;
