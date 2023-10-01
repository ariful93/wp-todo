import { Modal } from 'antd';
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addList } from '../actions';

function AddList() {
    const [isListModalOpen, setIsListModalOpen] = useState(false);
    const [inputVlue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const showModal = () => {
        setIsListModalOpen(true);
    };

    const handleOk = () => {
        setIsListModalOpen(false);
       
    };

    const handleCancel = () => {
        setIsListModalOpen(false);
    };

    const handleAddProject = () => {
        if ( inputVlue.trim() !== '' ) {
            dispatch(addList(inputVlue))
            setInputValue('')
            setIsListModalOpen(false);

        }
        
    }

    const handleChangeProject = (event) => {
        setInputValue(event.target.value)
    }
    
  return (
    <>
        <h3 className='add-list'>
            <span onClick={showModal}>Add list <AiOutlinePlusCircle /></span>
        </h3>
        
        <Modal footer={null} title="Add List" className='slkdf' open={isListModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='add-list-form'>
                <input 
                    type="text"
                    placeholder='Enter list title...'
                    value={inputVlue}
                    onChange={handleChangeProject}
                />
                <button onClick={handleAddProject}>Create list</button>
            </div>
        </Modal>
    </>
  )
}

export default AddList
