import React from 'react';
import './App.css';
import EmptyLayout from './layouts/empty-layout'
import MainLayout from './layouts/main-layout'

function App() {
    return (

        <div className="App">
            <MainLayout/>
            <EmptyLayout/>
        </div>
    );
}



export default App;

