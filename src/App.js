import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import './App.css'
import Todo from './Todo'

function App() {

  const [addTodo, setAddTodo] = useState('')
  const [addItem, setAddItem] = useState([])

  const addTodoClick = () => {
    setAddItem((prevalue) => {
      return [...prevalue, addTodo]
    })

    setAddTodo('')
  }
const deleteItems = (id)=>{
setAddItem((prevalue) =>{
  return prevalue.filter((arryItem , index)=>{
    return index !== id
  })
})
}

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="input">
          <input type='text' placeholder="add ToDo" value={addTodo} onChange={(event) => {
            setAddTodo(event.target.value)
          }}></input>
        </div>
        <AddIcon className="add-button" onClick={addTodoClick}
        />

      </div>
      <ul>
        {addItem.map((val , index) => {
          return <Todo text ={val} id = {index} onSelect = {deleteItems}/>
        })}
      </ul>
    </div>
  )
}

export default App

