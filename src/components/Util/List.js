import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import './List.css';

const Local_Storage_Key = 'react-app-acciojob-todos';


function List() {
    //JSON.stringify(todos) converts the array to a string


    //All todos
    const [todos, setTodos] = useState([

    ]);
    //To get the data from local storage
    useEffect(() => {
        console.log('parsing')
        const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));//converts the string in array and stored it in storedtodos 
        if (storedTodos) setTodos(storedTodos)

    }, []);

    //To store the data in local storage
    useEffect(() => {
        if (todos.length > 0)
            localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))

    }, [todos])

    //delete items in the list
    function deleteItem(id) {
        setTodos(todos.filter((todo) => todo.id != id))

    }


    //normal variable
    //todo input
    const [todoInput, setTodoInput] = useState('')

    const handleInput = (e) => {
        setTodoInput(e.target.value)
    }
    //math.random is library to generate random number

    const handleSubmit = (e) => {
        if (todoInput == '') {
            return;
        }

        setTodos([{ id: Math.random() * 1000000, text: todoInput, isCompleted: false }, ...todos]);
        setTodoInput('');
    }


    return (
        <div class='list-container'>
            {/* Todo Form */}
            <div className='todo-input-form'>
                <input type="text" placeholder='Add a todo' onChange={handleInput} value={todoInput}></input>
                <button onClick={handleSubmit}>Add a Todo
                </button>
            </div>
            {
                todos.map(
                    todo =>
                        <ListItem text={todo.text} id={todo.id} deleteItem={deleteItem} />
                )
            }

        </div>
    )
}

export default List