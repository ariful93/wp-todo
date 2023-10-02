import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { AiFillCalendar, AiFillDelete, AiOutlineCheckSquare, AiOutlineLink, AiOutlineUserAdd } from 'react-icons/ai'
import { BiMove, BiTime } from 'react-icons/bi'
import { BsFillBookmarkFill, BsFillCursorFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addSubTask, addTaskDesc } from '../actions'

function CardModal({value}) {
    const [descFieldValue, setdescFieldValue] = useState(false)
    const [taskFieldValue, setTaskFieldValue] = useState(false)
    const [isActive, setIsActive] = useState([]);
    const [taskInput, setTaskInput] = useState()
    const [isProgress, setIsProgress] = useState(0)
    const tasks = useSelector((state) => state.subTaskReducer.tasks)
    const taskdesc = useSelector((state) => state.taskDescReducer.taskdesc)
    const dispatch = useDispatch();

    const showDescInputField = () => {
        setdescFieldValue(true)
    }

    const showTaskInputField = () => {
        setTaskFieldValue(true)
    }

    const cancleDescField = (e) => {
        if (e.target !== e.currentTarget) {
            return
        }
        setdescFieldValue(false)
    }

    const cancleTaskField = (e) => {
        if (e.target !== e.currentTarget) {
            return
        }
        setTaskFieldValue(false)
    }

    const completeTask = (index) => {
        setIsActive([...isActive, index])

        const getItem = tasks.length;
        const resultItem = 100 / getItem
        setIsProgress(resultItem)

  
    }

    const handleChangeSubTask = (e) => {
        setTaskInput(e.target.value)
    }

    const addHandleSubTask = () => {
        if ( taskInput.trim() !== '' ) {
            dispatch(addSubTask(taskInput))
            setTaskInput('')

        }
    }

    const inputArr = [
        {
          id: new Date().getTime().toString(),
          value: ""
        }
    ];

    const [taskInputDesc, setDescInput] = useState(inputArr)

    const handleChangeTaskDesc = (e) => {
        setDescInput(e.target.value)
    }

    const addkDesc = () => {
        if ( taskInputDesc.trim() !== '' ) {
            dispatch(addTaskDesc(taskInputDesc))
            setTaskInput('')

        }
    }

    const [listCharacters, updateListCharacters] = useState(tasks);

    const handleListCardOnDragEnd = (result) => {
        if ( !result.destination ) return;
        const items = Array.from(listCharacters);
        const [recordItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, recordItem);

        updateListCharacters(items);
    }

  return (
    <div className='cardModalWrapper'>
        <div className='cardModal-inner'>
            <div className='name-field'>
                <h4>Amazing idea 7</h4>
            </div>
            <div className='description'>
                <h3><FaBars />Description</h3>
                <div>
                    <p>{taskdesc}</p>
                </div>
                {
                    descFieldValue ? (
                       <>
                         <input 
                            type='text' 
                            placeholder='Enter description...'
                        />
                        <button className='save-btn'>Save</button>
                        <button className='cancle-btn' onClick={cancleDescField}>Cancel</button>
                       </>
                    ) : (
                        <button className='add-btn' onClick={showDescInputField}>Add description</button>
                    )
                }
                
            </div>
            <div className='tasks'>
                <h3><AiOutlineCheckSquare />Tasks</h3>
                <div className='sub-tasks'>
                    {
                        tasks.length > 0 && (
                            <div className='task-progress' data-percent={`${isProgress}`}>
                                <div className='progress_bar' style={{width: `${isProgress}%`}}></div>
                            </div>
                        )
                    }

                    <DragDropContext onDragEnd={handleListCardOnDragEnd}>
                        <Droppable 
                            droppableId='characters' 
                            direction="vertical"
                        >
                            {(provided) => (
                                <div 
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {tasks?.map((task, index) => {
                                        return (
                                            <Draggable
                                                key={task.id} 
                                                draggableId={`list:${task.id}`} 
                                                index={index}
                                            >
                                               {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef} 
                                                    key={task.id}
                                                >
                                                    <div data-id={task.id} className={`sub-task`} key={task.id} index={index}>
                                                        <span  onClick={() => completeTask(index)} className={isActive.includes( index ) ? 'active' : ''}>
                                                            <input readOnly type='checkbox' />
                                                        </span>
                                                        <span className={isActive.includes( index ) ? 'active task-name' : 'task-name'}>{task.data}</span>
                                                    </div>
                                                </div>
                                               )}
                                                
                                            </Draggable>
                                            
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>

                    </DragDropContext>
                    
                    

                </div>
                {
                    taskFieldValue ? (
                        <>
                            <input 
                                type='text' 
                                placeholder='Enter task name...'
                                value={taskInput}
                                onChange={handleChangeSubTask}
                            />
                            <button className='save-btn' onClick={addHandleSubTask}>Save</button>
                            <button className='cancle-btn' onClick={cancleTaskField}>Cancel</button>
                        </>
                    ) : (
                        <button className='add-btn' onClick={showTaskInputField}>Add another task</button>
                    )
                }
                
            </div>
        </div>
        <div className='sidebar'>
            <h4>ADD TO CARD</h4>
            <div className='card-actions'>
                <div className='card-modal-action'>
                    <AiOutlineUserAdd />
                    Members
                </div>
                <div className='card-modal-action'>
                    <BsFillBookmarkFill />
                    Members
                </div>
                <div className='card-modal-action'>
                    <AiFillCalendar />
                    Due Date
                </div>
                <div className='card-modal-action'>
                    <BiTime />
                    Stopwatch
                </div>
                <div className='card-modal-action'>
                    <AiOutlineLink />
                    Attachment
                </div>
            </div>

            <h4>Actions</h4>
            <div className='card-actions'>
                <div className='card-modal-action'>
                    <BsFillCursorFill />
                    Subscribe
                </div>
                <div className='card-modal-action'>
                    <BiMove />
                    Move
                </div>
                <div className='card-modal-action'>
                    <AiFillDelete />
                    Delete
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardModal
