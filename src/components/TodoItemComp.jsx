
const TodoItemComp = (props) => {
    const {todoitem, dispatch} = props
    return ( 
        <li className={todoitem.done ? 'done' : undefined}>
            {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) */}
            <input type="checkbox" style={{marginRight : "0.5em"}}
                checked={ todoitem.done } 
                onClick={ ()=>{ dispatch({type:"checkedlist", id : todoitem.id}) } } readOnly/>
                {todoitem.todo}
            <button style={{border : "1px solid black", marginLeft : "1vw",
                            borderRadius : "5px", padding : "0em 0.3em"}}
                            onClick={ ()=>{dispatch({type:"deletelist", id :todoitem.id})}}>X</button>
        </li>
    );
}

export default TodoItemComp;