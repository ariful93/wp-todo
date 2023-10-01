import React from 'react';

function AddProjectModal({onClick, onChange, inputVlue}) {

  return (
    <div className='projectModal'>
        <div className='add-project-modal'>
            <input 
                type="text"
                placeholder='Enter project title here...'
                value={inputVlue}
                onChange={onChange}
            />
            <button onClick={onClick}>Create project</button>
        </div>
       
    </div>
  )
}

export default AddProjectModal
