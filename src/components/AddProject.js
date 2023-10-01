import { Modal } from 'antd';
import React, { useState } from 'react';
// import { AiFillDelete, AiOutlineEllipsis, AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { GrFormEdit } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToDo } from '../actions/index';
import AddProjectModal from './AddProjectModal';

function AddProject() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputVlue, setInputValue] = useState('');
    const items = useSelector((state) => state.todoReducers.items)
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
       
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAddProject = () => {
        if ( inputVlue.trim() !== '' ) {
            dispatch(addToDo(inputVlue))
            setInputValue('')
            setIsModalOpen(false);

        }
        
    }

    const handleChangeProject = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <>
        {
          items.map((item) => {
            return (
                <Link to={`/${item.id}`} className='project-item' key={item.id}>
                    <h3>{item.data}</h3>
                </Link>
            )
          })
        }

        <div className='createProject'>
            <div className='add-project' onClick={showModal}>
                <AiOutlinePlusCircle />
                <span>Create project</span>
            </div>
            <Modal footer={null} title="Enter project title" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <AddProjectModal onClick={handleAddProject} onChange={handleChangeProject} inputVlue={inputVlue} />

            </Modal>
        </div>
       
    </>
  )
}

export default AddProject
