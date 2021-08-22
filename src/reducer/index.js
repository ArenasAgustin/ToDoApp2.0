const initialState = [];
let stateAux = []; 

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, {type, payload}) => {
  switch(type) {
    case "AddTodo":
      payload.id = state.length + 1;
      return state = [...state, ...[payload]]

    case "RemoveTodo":
      return state = state.filter(todo => todo.id !== payload)
      
    case "ToInProgress":
      stateAux = state;
      for(let i = 0; i < stateAux.length; i++){
        if(stateAux[i].id === payload) stateAux[i].status = 'InProgress';
      }
      return state = stateAux;
      
    case "ToDone":
      stateAux = state;
      for(let i = 0; i < stateAux.length; i++){
        if(stateAux[i].id === payload) stateAux[i].status = 'Done';
      }
      return state = stateAux;
      
    default:
      return state
  }
}

export default todos;
