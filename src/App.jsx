import React from 'react';
import Header from './components/Header/Header';
import EmployeeList from './components/EmployeeList';

function App() {
    return (
        <main className="min-h-screen">
            <Header/>
            <EmployeeList/>
        </main>
    );
}

export default App;
