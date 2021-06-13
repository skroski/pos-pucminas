export const TodoListItem = (props) => {
    return(
        <li key={props.item.name}>
            <input 
            type="checkbox" 
            checked={props.item.isCompleted} 
            onChange={(event) => props.onTaskChanged(event, props.item)}/>
            {props.item.name}
        </li>
    )
}