import React from 'react';
import { addTodo } from '../../actions/index.js'
import { connect } from 'react-redux';
import './AddTodo.css'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  const [input, setInput] = React.useState({
    title: '',
    description: '',
    place: '',
    date: '',
  })

  const handleSubmit = function(event) {
    event.preventDefault();
    props.addTodo(input);
  }

  const handleInputChange = function(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  return (
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <div className='divInput'>
        <label className='titulo'>Title</label>
        <input 
          name="title" 
          onChange={handleInputChange} 
          value={input.title}
          className='input'>
        </input>
      </div>

      <div className='divInput'>
        <label className='titulo'>Description</label>
        <textarea 
          name="description" 
          onChange={handleInputChange} 
          value={input.description}
          className='input'>
        </textarea>
      </div>

      <div className='divInput'>
        <label className='titulo'>Place</label>
        <input 
          name="place" 
          onChange={handleInputChange} 
          value={input.place}
          className='input'>
        </input>
      </div>

      <div className='divInput'>
        <label className='titulo'>Date</label>
        <input 
          name="date" 
          onChange={handleInputChange} 
          value={input.date}
          className='input'>
        </input>
      </div>

      <button type="submit" className='btn'>Add</button>
    </form>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    addTodo: tarea => dispatch(addTodo(tarea))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo); 