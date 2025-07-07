function List(props) {
    

    return(
      <ul>
       {props.items.map( itens => <li key={itens.id}>{itens.text}</li> )} 
       <button><img src="" alt="" /></button>
      </ul>
    )






}

export default List;