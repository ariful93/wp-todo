import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

function Task({droppableId}) {
  const cards = useSelector((state) => state.cardReducer.cards);
  // const dispatch = useDispatch();
  return (
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
                            <div className='test'>
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
                        </div>
                    )}
                </Droppable>

            </div>
        )}
    </Draggable>
  )
}

export default Task
