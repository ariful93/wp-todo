import Layout from 'antd/es/layout/layout';
import React from 'react';
import {
    createHashRouter,
    createRoutesFromElements, Route,
    RouterProvider
} from 'react-router-dom';
import Project from './components/Project';
import ProjectDashboard from './components/ProjectDashboard';
// import Dashboard from './components/Dashboard';


const App = () => {
    let routes = [
        { path: '/', component: ProjectDashboard },
        { path: '/:id', component: Project },
        // { path: '*', component: NotFound },
    ];

    const router = createHashRouter(
        createRoutesFromElements(
          <>
            { routes &&
              routes.map( ( route, index ) => (
                <Route
                  key={ index }
                  path={ route.path }
                  element={ <route.component /> }
                />
              ) ) }
          </>
        )
      );

    return (
        <Layout>
            <RouterProvider router={ router } />
        </Layout>
     );
}

export default App; 