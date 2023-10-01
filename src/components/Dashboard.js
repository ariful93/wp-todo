import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import AddList from './AddList';

const Dashboard = () => {
    const lists = useSelector((state) => state.listReducer.lists)
    // const dispatch = useDispatch();

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

    const [characters, updateCharacters] = useState(data);

    const handleOnDragEnd = (result) => {
        if ( !result.destination ) return;
        const items = Array.from(characters);
        const [recordItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, recordItem);

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

    return (
        <div className='dashboard'>

            <AddList />
            
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='characters'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {lists.map(({id, name}, index) => {
                                return(
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div className="card" 
                                                {...provided.draggableProps} 
                                                {...provided.dragHandleProps} 
                                                ref={provided.innerRef} 
                                                key={id}
                                            >
                                                <p>{list.data}</p>
                                                {/* <div className='listCardWrapper'>
                                                    <div className='listCardItem'>List</div>
                                                    <div className='listCardItem'>List 2</div>
                                                </div> */}
                                                {/* {listCard} */}
                                                <h5><AiOutlinePlus />Add card</h5>

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
     );
}

export default Dashboard;