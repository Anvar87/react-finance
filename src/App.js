import React from 'react';
import './App.css';
import Login from './views/Login'
import Register from './views/Register'
import EmptyLayout from './layouts/empty-layout'
import MainLayout from './layouts/main-layout'
import {Redirect ,Switch, Route} from 'react-router-dom'

function App() {
  return (
    
      <div className="App">             

        <Switch>
          {/* <MainLayout>

          </MainLayout> */}
          <Route exact path='/' component={MainLayout} />
          <EmptyLayout>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/> 
          </EmptyLayout>                  
          <Redirect to='/'/>
          {/* <Route render={() => <h1>Page not found 404</h1>}></Route> */}
        </Switch>      
                
        {/* <RouteWithLayout layout={EmptyLayout} path='/login' component={Login}/>
        <RouteWithLayout layout={EmptyLayout} path='/register' component={Register}/>                 */}
      </div>  
  );
}

// function RouteWithLayout({layout, component, ...rest}) {
//   return(
//     <Route {...rest} render = {(props)  => 
//       React.createElement( layout, props, React.createElement(component, props))
//     } />
//   )
// }

export default App;

