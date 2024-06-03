import React, { useContext, useState } from "react";
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const [users, setUsers] = useState([])
    const [error, setError] = useState({})
    const [submittedForm, setSubmittedForm] = useState(false)
    
    const jobs = ['Business Analyst','Data Science Engineer', 'DevOps Engineer', 'Graphic Designer', 'Web developer', 'Systems administrator', 'Database administrator', 'Full Stack Developer', 'QA Consultant']
    const gend = [
      {text : "Male", type : "Male"},
      {text : "Female", type: "Female"},
      {text : "Prefer not to say", type : "Indefinitely" }
    ]
/////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  const formValidation = (username, email, checked, img) => {
    let isValid = true;
    let validRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let usernameRegex = /(^[a-z][a-z]+$)|(^[a-z][a-z]+\d$)|(^[a-z][a-z]*\d\d+$)/i;
    const inputErrors = {};
    
    if(!username){
        inputErrors.username = "Useraname is required";
        isValid = false;
    }
    if(username.length > 0 && !username.match(usernameRegex)){
        inputErrors.usernameRegex = 'Username have to be min two characters long, numbers in the username have to be at the end, no whitespace'
        isValid = false;
    }
    if(!email){
        inputErrors.email = "Email is required";
        isValid = false;
    }
    if(email.length > 0 && !email.match(validRegex)){
        inputErrors.regex = "Email must be valid";
        console.log('must be valid');
        isValid = false;
    }
    if(!checked){
        inputErrors.checked = "Please select one of following boxes";
        isValid = false;
    }
    if(!img){
        inputErrors.img = "Please add your personal photo";
        isValid = false;
    }
    setError(inputErrors)
    return isValid
}
////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    return <AppContext.Provider value={{ 
        isMenuOpen, isSidebarOpen, setIsMenuOpen, setIsSidebarOpen, users, setUsers, jobs, gend, addUser,getUsers, error, setError, submittedForm, setSubmittedForm, formValidation}}>
            {children}
        </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext = () => {
    return useContext(AppContext)
}