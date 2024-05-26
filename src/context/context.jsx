import React, { useContext, useState } from "react";
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const [users, setUsers] = useState([])
    
    const jobs = ['Business Analyst','Data Science Engineer', 'DevOps Engineer', 'Graphic Designer', 'Web developer', 'Systems administrator', 'Database administrator', 'Full Stack Developer', 'QA Consultant']
    const gend = [
      {text : "Male", type : "Male"},
      {text : "Female", type: "Female"},
      {text : "Prefer not to say", type : "Indefinitely" }
    ]

    const getUsers = async() => {
        try {
        const res = await axios.get('http://localhost:3001/users')
        console.log(res.data);
        setUsers(res.data)
        } catch (error) {
        console.log(error);
        }
    }

    const addUser = async (username, email, checked, job, img) => {
        try {
            const res = await axios.post('http://localhost:3001/users',{
                username,
                email,
                gender : checked,
                position : job,
                img : img
            })
        const updatedUsers = [
        ...users,
        res.data
    ]
        setUsers(updatedUsers)
    } catch (error) {
      console.log(error);
    }
  }
    
    return <AppContext.Provider value={{ 
        isMenuOpen, isSidebarOpen, setIsMenuOpen, setIsSidebarOpen, users, setUsers, jobs, gend, addUser,getUsers }}>
            {children}
        </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext)
}