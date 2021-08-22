// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = ({ title, id=todoId, status="Todo", date, place, description }) => {
  return {type: "AddTodo", 
          payload: {
            title: title, 
            id: id, 
            status: status,
            description: description,
            place: place,
            date: date,
          }
  }
};

export const removeTodo = (payload) => {
  return {type: "RemoveTodo", payload}
};

export const toInProgress = (payload) => {
  return {type: "ToInProgress", payload}
};

export const toDone = (payload) => {
  return {type: "ToDone", payload}
};
