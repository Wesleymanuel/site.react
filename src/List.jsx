function List(props) {
    

    return(
      <ul>
       {props.items.map( itens => <li>{itens}</li> )} 
      </ul>
    )






}

export default List;