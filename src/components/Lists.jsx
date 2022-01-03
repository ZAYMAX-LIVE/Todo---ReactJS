import React, { useState, useEffect } from 'react'
import 'react-dom'
import Form from './Form'
import Todo from './Todo'


function Lists() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo =>{
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
    }
    
    const removeTask = (id) =>{
      const removeArr = [...todos].filter((todo)=>todo.id != id);
        setTodos(removeArr);
    }
    
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
    },[])
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    /*function click(){
        let drag = document.querySelectorAll('.todo');
        let todo = document.querySelectorAll('.drag');
        let draggetItem = null;
        for(let i=0; i<drag.length; i++){
          const iner = drag[i];
          iner.addEventListener('dragstart', function(){
            draggetItem = iner;
            setTimeout(function(){
                draggetItem.style.display = 'none';
            }, 0);
          });
          iner.addEventListener('dragend', function(){
            setTimeout(function(){
                draggetItem.style.display = 'block';
            }, 0);
          });
          for(let j=0; j<todo.length; j++){
            const list = todo[j];
            list.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            list.addEventListener('dragenter', function(e){
                e.preventDefault();
            })
            list.addEventListener('drop', function(e){
                this.append(draggetItem);
            })
          }
        }
      }*/
      
    
    return (
        <div className='block-todo' /*onMouseDown={click}*/>
            <Form onSubmit={addTodo}/>
            <div className='todos'>
                <div className='drag'>
                    <Todo todos={todos} removeTask={removeTask}/>
                </div>
            </div>
        </div>
    )
}

export default Lists
