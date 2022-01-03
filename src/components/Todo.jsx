import React from 'react'

function Todo({todos, removeTask}) {
    
    return todos.map((todo) => (
        <div className='todo' draggable="true" key={todo.id}>
            <div className='todo-info'>
                <p>{todo.name}</p>
                <p>{todo.text}</p>
            </div>
            <button onClick={()=>removeTask(todo.id)}>X</button>
        </div>
    ));
}

export default Todo
