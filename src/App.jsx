import { useState } from 'react';
import List from './List'
import './App.css'
import Form from './Form';

function App(){
  
  
  const [items , setItems] = useState([]);
 
  function onAddItem(item) {
    setItems([...items, item])
  }

   

  return (
    
    <div>
    <Form onAddItem={onAddItem}></Form>
    <List items={items}></List>
      
    </div>
  )
}


export default App;
