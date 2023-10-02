import React from 'react'

function TodoCard({
    card,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps
}) {
  return (
    <div 
        className='todo-card'
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
    >
      <h3 key={id}>{card}</h3>
    </div>
  )
}

export default TodoCard
