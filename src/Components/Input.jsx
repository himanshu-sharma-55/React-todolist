import { useState } from "react";
import React from "react-dom"
import InputForm from './InputForm';
import Item from './Item';
import "./styles.css"

import { useSelector, useDispatch } from 'react-redux';
// import ItemOperations from '../Reducers/ItemOperations';
import { addItem, removeItem } from '../Actions/index';

function Input() {

  const ItemState = useSelector( (state) => state.ItemOperations);
  const dispatch = useDispatch();

  const AddElement = (e, task) => {

    e.preventDefault();

    dispatch(addItem({
      id : ItemState.length + 1,
      task : task
    }))
  
  }

  const DeleteItem = (id) => {

    dispatch(removeItem(id))
  }

  return(
    <div className="input-container">

      <InputForm addNewElement={AddElement} />
        
      <div id="taskList">
        {ItemState.map( item => <Item key={item.id} itemId={item.id} task={item.task} onDelete={DeleteItem} /> )}
      </div>
    </div>
  );
}

export default Input;
