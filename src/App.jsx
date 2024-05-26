import React from 'react';
import './App.css';
import { useGlobalContext } from './context/context';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import SidebarPage from './pages/SidebarPage';
import Intro from './components/Intro';
import VirtualAssistantPage from './pages/VirtualAssistantPage';
import UsersPage from './pages/UsersPage';
import UsersSignUp from './components/users/UsersSignUp';
import UsersTable from './components/users/UsersTable';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  const {isMenuOpen} = useGlobalContext()

  return (
    <>
      <Navbar />
      {isMenuOpen && <Menu />}
      <div className='mainContent'>
        <SidebarPage />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/virtualassistant' element={<VirtualAssistantPage />} />
          <Route path='/users' element={<UsersPage />}>
            <Route index element={<UsersSignUp />} />
            <Route path='table' element={<UsersTable />} />
          </Route>
        </Routes>
      </div>
   
    </>
  )
}

export default App
