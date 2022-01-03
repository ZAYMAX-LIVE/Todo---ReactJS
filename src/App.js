import './App.css';
import Lists from './components/Lists';
import React from 'react';

function App() {
  function project(){
    let todoForm = document.querySelector('.todo-form');
    todoForm.classList.add('active');
    let block = document.querySelector('.App');
          block.classList.add('active');
}
  return (
    <div className="App">
      <div className='container'>
        <h1>Список задач</h1>
        <button className='but-pro' onClick={project}>+</button>
      </div>
      <Lists/>
    </div>
  );
}

export default App;
