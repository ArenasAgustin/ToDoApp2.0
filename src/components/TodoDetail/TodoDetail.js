import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeTodo, toInProgress, toDone } from '../../actions/index';
import { useParams } from "react-router-dom";
import './TodoDetail.css'

export function TodoDetail({todoList, removeTodo, toInProgress, toDone}){
	const [todoDetail, setTodoDetail] = useState();
	const {id} = useParams();

  useEffect(() => {
    let detailItem = todoList.find(todo => todo.id.toString() === id);
    setTodoDetail(detailItem)
  }, {});

	return(
		<div className='divDetail'>
			<div className='divText'>
        <label className='detalle'>ToDo: </label>
        <span className='textos'>{todoDetail?.title}</span>
      </div>

      <div className='divText'>
        <label className='detalle'>Description:</label>
        <span className='textos'>{todoDetail?.description}</span>
      </div>

      <div className='divText'>
        <label className='detalle'>Place:</label>
        <span className='textos'>{todoDetail?.place}</span>
      </div>

      <div className='divText'>
        <label className='detalle'>Date:</label>
        <span className='textos'>{todoDetail?.date}</span>
      </div>

			<div className='btns'>
				<button onClick={() => toDone(todoDetail.id)} className='detalleBtn'>DONE</button>
				<button onClick={() => toInProgress(todoDetail.id)} className='detalleBtn'>IN PROGRESS</button>
				<button onClick={() => removeTodo(todoDetail.id)} className='detalleBtn'>DELETE</button>
			</div>
		</div>
	)
}

function mapStateToProps(state){
  return {
    todoList: state
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodo(id)),
        toInProgress: (id) => dispatch(toInProgress(id)),
        toDone: (id) => dispatch(toDone(id)),
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail)