import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import TodoCard from './TodoCard';

const cards = [
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

// const [listCharacters, updateListCharacters] = useState(todos);

// const handleListCardOnDragEnd = (result) => {

//     if ( !result.destination ) return;
//     const items = Array.from(listCharacters);
//     const [recordItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, recordItem);

//     updateListCharacters(items);
// }

function Column({
    id,
    todos,
    index
}) {
  return (
    
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <Droppable droppableId={index.toString()} type='card'>
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`cardwrapper ${snapshot.isDraggingOver ? "test" : "done"}`}
                        >
                            <div className='card'>
                                <div><p>{todos}</p></div>

                                <div className='listCardWrapper'>
                                    {cards?.map((card, index)=> (
                                        <Draggable
                                            key={card.id}
                                            draggableId={card.id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <TodoCard 
                                                    card={card.name}
                                                    index={index}
                                                    id={id}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                    <div>
                                        <h5 ><AiOutlinePlus />Add card</h5>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )}
                </Droppable>

            </div>
        )}
    </Draggable>

  )
}

export default Column
