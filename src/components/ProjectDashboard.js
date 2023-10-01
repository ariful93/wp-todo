import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import AddProject from './AddProject'

function ProjectDashboard() {
  return (
    <Provider store={ store }>
        <h2 className='app-title'>Todo App</h2>
        <hr />
        <div className='project-wrap'>
            <AddProject />
        </div>
    </Provider>
  )
}

export default ProjectDashboard
