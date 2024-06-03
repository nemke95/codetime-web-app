import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'

const UsersSignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState('')    
  const [job, setJob] = useState( 'Business Analyst')
  const [img, setImg] = useState('');

  const {jobs, gend, addUser, error, formValidation, submittedForm, setSubmittedForm} = useGlobalContext()
  let boxes = document.querySelectorAll("input[type=checkbox]");

//////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleImageSelect = (e) => {
    const filerReader = new FileReader()
    filerReader.readAsDataURL(e.target.files[0])
    filerReader.onload = e => {
        setImg(e.target.result)
    }
  }
  const handleGenderSelect = (event) => {
    let updateGender = '';
      if (event.target.checked) {
            updateGender =  event.target.value;
        } 
        setChecked(updateGender);
    };
  const uncheck = () => {
      boxes.forEach( value => value.checked = false)
    }
  function handleToggleChecked(e) {
      let state = e.target.checked; 
      boxes.forEach(b => b.checked = false); 
      e.target.checked = state; 
}
///////////////////////////////////////////////////////////////////////////////////

useEffect( () => {
  boxes.forEach(b => b.addEventListener("change", handleToggleChecked));
    return () => {
      boxes.forEach(b => b.removeEventListener("change", handleToggleChecked));
    }
}, [checked])

useEffect( () => {
  let timeout = '';
  if(submittedForm){
     timeout = setTimeout(()=>{
      setSubmittedForm(false)
    }, 3000)

    return () => clearTimeout(timeout);
  }

}, [submittedForm])

//////////////////////////////////////////////////////////////////////////////////////////

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(formValidation(username, email, checked, img)){
      addUser(username, email, checked, job, img)
      setUsername('')
      setEmail('')
      uncheck()
      setImg('')
      setJob('Business Analyst')
      setSubmittedForm(true)
    }else{
      console.log('form is not valid');
    }
  }

  return (
    <div>
      <h2>Join Our Community!</h2>
    {submittedForm ? (
      <div className='success'>Login succesful!</div>
    ) : 
      <form className='signup-form'>
        <div>
          <input type='file' className='file-input' accept=".png, .jpg, .jpeg" files={img}  onChange={handleImageSelect}/>
          {error.img && <div className="error">{error.img}</div>}
        </div>
        <div className='input-container'>
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" className='input-field' id='name' autoComplete='off' value={username} onChange={e => setUsername(e.target.value)} />
            {error.username && <div className="error">{error.username}</div>}
            {error.usernameRegex && <div className="error">{error.usernameRegex}</div>}
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input type="email" className='input-field' id='email' autoComplete='off' value={email} onChange={e => setEmail(e.target.value)} />
            {error.email && <div className="error">{error.email}</div>}
            {error.regex && <div className="error">{error.regex}</div>}
          </div>
        </div>
        <div>
          <div className='checkboxes'>
                {gend.map((item, index) => (
                    <div key={index}>
                        <input value={item.text}   className='checkbox' type="checkbox" onChange={handleGenderSelect} />
                        <span>{item.text}</span>
                    </div>
                    ))}
          </div>
        {error.checked && <div className="error">{error.checked}</div>}
        </div>       
        <div className='jobs-container'>
            <label htmlFor="jobs">current position: </label>
            <select name="jobs" id="jobs" value={job} onChange={e => setJob(e.target.value)}>
                {jobs.map( (job, index) => {
                        return <option key={index} value={job} selected={job.branch}>{job}</option>
                    })}
            </select>
        </div>
        <button onClick={handleFormSubmit}>Submit</button>      
      </form>
}
    </div>
  )
}

export default UsersSignUp
