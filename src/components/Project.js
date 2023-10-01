import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import SingleProject from './SingleProject';

function Project() {

  return (
    
    <Provider store={ store }>
        <SingleProject />
    </Provider>
  )
}

export default Project
