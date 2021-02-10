import React ,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import './Todo.css'

function Todo(props) {

    const [line , setCutLine] = useState(false)
    return (
        <div className = "listItem">
         <li onClick = {()=>{setCutLine(true)}} style={{textDecoration : line ? 'line-through' : 'none' , } }
         onDoubleClick ={()=>{setCutLine(false)}}> {props.text}  </li> 
           <DeleteIcon className="btnList" onClick={()=>{props.onSelect(props.id)}} />
        </div>
    )
}

export default Todo;
