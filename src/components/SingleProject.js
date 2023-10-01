import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { editProject } from '../actions';
import Board from './Board';

function SingleProject() {
    const items = useSelector((state) => state.todoReducers.items)
    const [item, setItem] = useState(items)
    const [showInput, setIsInput] = useState(false)
    const [editProjectTitle, setEditProjectTitle] = useState('');
    const dispatch = useDispatch();

    const location = useLocation();

    const getLocation = location.pathname

    const projectId = getLocation.replace(/^\/|\/$/g, '');    

    useEffect(() => {
      let newItem = items.find((item) => item.id === projectId);
      setItem(newItem)
      
    }, []);

    const showInputField = () => {
      setIsInput(true)
    }

    const hideInputField = (event) => {
      if ( event.keyCode === 13) {
        dispatch(editProject(editProjectTitle))
        setIsInput(false)
        setEditProjectTitle('')
        console.log(editProject(editProjectTitle))

      }
    }

    const handleEditProjTitle = (event) => {
      setEditProjectTitle(event.target.value)
    }

  return (
    <div className='project-board' onClick={
      (e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        setIsInput(false)
    }}>
      <h3 className='project-title'>
        <Link to="/?page=wp-todo"><AiOutlineArrowLeft /></Link>
        {
          showInput ? (
            <input 
              type="text"
              defaultValue={item.data}
              onKeyDown={hideInputField}
              onChange={handleEditProjTitle}
            />
              
            
          ) : (
            item?.data && (
              <span
                onClick={showInputField}
              >
                {item?.data}
                <AiFillEdit />
              </span>
            )
          )
        }
      </h3>
      <Board />
    </div>
  )
}

export default SingleProject
