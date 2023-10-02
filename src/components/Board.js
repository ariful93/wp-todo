import { Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../actions';
import AddList from './AddList';
import CardModal from './CardModal';

const Dashboard = () => {
    const lists = useSelector((state) => state.listReducer.lists);
    const cards = useSelector((state) => state.cardReducer.cards);
    const [isCardFormModalOpen, setIsCardFormModalOpen] = useState(false);
    const [inputCardVlue, setInputCardValue] = useState('');
    const [isCardModal, setIsCardModal] = useState(false)
    const dispatch = useDispatch();

    const myRef = useRef(null)

    const cardModalOpen = () => {
        setIsCardModal(true)
    }

    const cardModalOk = () => {
        setIsCardModal(false)
    }

    const cardModalCancel = () => {
        setIsCardModal(false)
    }


    const showCardModalForm = () => {
        setIsCardFormModalOpen(true);
    };

    const handleCardOk = () => {
        setIsCardFormModalOpen(false);
       
    };

    const handleCardCancel = () => {
        setIsCardFormModalOpen(false);
    };

    const handleAddCards = (event) => {
        if ( inputCardVlue.trim() !== '' ) {
            dispatch(addCard(inputCardVlue))
            setInputCardValue('')
            setIsCardFormModalOpen(false);

            
        }
        // console.log(event.currentTarget.id);
        console.log(myRef.current.id)
        
    }

    const handleChangeCards = (event) => {
        setInputCardValue(event.target.value)
    }

    const data = [
        {
            id: 'list-1',
            name: 'List 1'
        },
        {
            id: 'list-2',
            name: 'List 2'
        },
        {
            id: 'list-3',
            name: 'List 3'
        }
    ]

    const [characters, updateCharacters] = useState(lists);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(characters);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    };

    const handleOnDragEnd = (result) => {
        if ( !result.destination ) return;

        const items = reorder(
            state.items,
            result.source.index,
            result.destination.index
        );
        updateCharacters(items);
    }


    const [listCharacters, updateListCharacters] = useState(data);

    const handleListCardOnDragEnd = (result) => {
        if ( !result.destination ) return;
        const items = Array.from(listCharacters);
        const [recordItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, recordItem);

        updateListCharacters(items);
    }

    const CardList = ({droppableId}) => {
        return (
            <>
                {/* <DragDropContext 
                    onDragEnd={handleListCardOnDragEnd}
                >
                    <Droppable 
                        droppableId={`list:${droppableId}`}
                    >
                        {({ innerRef, droppableProps, placeholder }) => (
                            <div 
                                {...droppableProps} 
                                ref={innerRef}
                            >
                                {cards.map((card, index) => {
                                    return(
                                        <Draggable 
                                            key={card.id} 
                                            draggableId={`card:${card.id}`}
                                            index={index}
                                        >
                                            {({ innerRef, draggableProps, dragHandleProps }) => (
                                                <div
                                                    {...draggableProps}
                                                    {...dragHandleProps}
                                                    ref={innerRef} 
                                                    key={card.id}
                                                >
                                                    <div 
                                                        className='listCardItem' 
                                                        
                                                    >
                                                        {card.data}
                                                    </div>

                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {placeholder}
                            </div>
                        )}
                        
                    </Droppable>
                </DragDropContext> */}

                <Draggable
                    draggableId={droppableId}
                >
                    {({innerRef, draggableProps, dragHandleProps}) => (
                        <div
                            {...draggableProps}
                            {...dragHandleProps}
                            ref={innerRef} 
                        >
                            <Droppable droppableId='10' type='card'>

                                {({innerRef, droppableProps, placeholder}) => (
                                    <div
                                        {...droppableProps}
                                        ref={innerRef} 
                                    >
                                        <div className='card-list'>
                                            {cards.map((card, index) => {
                                                return(
                                                    <Draggable 
                                                        key={card.id} 
                                                        draggableId={`card:${card.id}`}
                                                        index={index}
                                                    >
                                                        {({ innerRef, draggableProps, dragHandleProps }) => (
                                                            <div
                                                                {...draggableProps}
                                                                {...dragHandleProps}
                                                                ref={innerRef} 
                                                                key={card.id}
                                                            >
                                                                <div 
                                                                    className='listCardItem'
                                                                    onClick={cardModalOpen}
                                                                    
                                                                >
                                                                    {card.data}
                                                                </div>

                                                                <Modal 
                                                                    footer={null} 
                                                                    title="" 
                                                                    open={isCardModal} 
                                                                    onOk={cardModalOk} 
                                                                    onCancel={cardModalCancel}
                                                                    width={800}
                                                                >
                                                                    <CardModal />
                                                                </Modal>
                                                                

                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                            {placeholder}
                                        </div>
                                    </div>
                                )}
                            </Droppable>

                        </div>
                    )}
                </Draggable>
            </>
        );
    };


    return (
        <div className='dashboard'>

            <AddList />
            
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable 
                    droppableId='characters' 
                    direction="horizontal"
                >
                    {({ innerRef, droppableProps, placeholder }) => (
                        <div {...droppableProps} ref={innerRef}>
                            {lists.map((list, index) => {
                                return(
                                    <Draggable 
                                        key={list.id} 
                                        draggableId={`list:${list.id}`} 
                                        index={index}
                                    >
                                        {({ innerRef, draggableProps, dragHandleProps }) => (
                                            <div className="card" 
                                                {...draggableProps}
                                                ref={innerRef}
                                                key={list.id}
                                            >
                                                <Droppable 
                                                    droppableId={list.id}
                                                >
                                                    {({innerRef, droppableProps }) => (
                                                        <div
                                                            {...droppableProps}
                                                            ref={innerRef}
                                                            key={list.id}
                                                        >
                                                            <div {...dragHandleProps}><p>{list.data}</p></div>
                                               
                                                            <div className='listCardWrapper'>
                                                                <CardList droppableId={list.id} />
                                                            </div>

                                                            <h5 ref={myRef} id={`id:${list.id}`} onClick={showCardModalForm}><AiOutlinePlus />Add card</h5>

                                                            <Modal 
                                                                footer={null} 
                                                                title="Add Card" 
                                                                open={isCardFormModalOpen} 
                                                                onOk={handleCardOk} 
                                                                onCancel={handleCardCancel}
                                                            >
                                                                <div className='add-list-form'>
                                                                    <input 
                                                                        type="text"
                                                                        placeholder='Enter card title...'
                                                                        value={inputCardVlue}
                                                                        onChange={handleChangeCards}
                                                                    />
                                                                    <button 
                                                                        
                                                                        onClick={handleAddCards}
                                                                    >
                                                                        Add card
                                                                    </button>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                    )}

                                                </Droppable>
                                                
                                               

                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {placeholder}
                        </div>
                    )}
                    
                </Droppable>
            </DragDropContext>

            
        </div>
     );
}

export default Dashboard;