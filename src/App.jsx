import React from 'react';
import Header from './components/Header/Header';
import UserList from './components/UserList';

function App() {
    return (
        <main className="min-h-screen">
            <Header/>
            <UserList/>
        </main>
    );
}

export default App;
