import React, {useState} from 'react'

function Form(props) {
    const [input, setInput] = useState('');
    const [name, setName] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleChangeName = e =>{
        setName(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.random(),
            text: input,
            name: name
        });
        setInput('');
        setName('');
    };
    function remPro(){
        let todoForm = document.querySelector('.todo-form');
          todoForm.classList.remove('active');
          let block = document.querySelector('.App');
          block.classList.remove('active');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={name}
                onChange={handleChangeName}
            />
            <input
                type="text"
                value={input}
                name="text"
                className='todo-input'
                onChange={handleChange}
            />
            <button className='todo-button' onClick={remPro}>Add</button>
        </form>
    )
}

export default Form
