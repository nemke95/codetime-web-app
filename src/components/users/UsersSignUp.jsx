import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/context'

const UsersSignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState('')    
  const [job, setJob] = useState( 'Business Analyst')
  const [img, setImg] = useState('');

  const {jobs, gend, addUser} = useGlobalContext()
  let boxes = document.querySelectorAll("input[type=checkbox]");

/////////////////////////////////////////////////////////////
  const handleImageSelect = (e) => {
    const filerReader = new FileReader()
    filerReader.readAsDataURL(e.target.files[0])
    filerReader.onload = e => {
        console.log("e.target.result", e.target.result);
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
///////////////////////////////////////////////////////////

useEffect( () => {
  boxes.forEach(b => b.addEventListener("change", handleToggleChecked));
    return () => {
      boxes.forEach(b => b.removeEventListener("change", handleToggleChecked));
    }
}, [checked])


  const handleFormSubmit = (e) => {
    e.preventDefault()
    addUser(username, email, checked, job, img)
    setUsername('')
    setEmail('')
    uncheck()
    setImg('')
    setJob('Business Analyst')
  }

  return (
    <div>
      <h2>Join Our Community!</h2>
      <form className='signup-form'>
        <div>
          <input type='file' className='file-input' accept=".png, .jpg, .jpeg" files={img}  onChange={handleImageSelect}/>
          {/* {img && <img src={img} className='file-input-img' alt="img" />} */}
        </div>
        <div className='input-container'>
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" className='input-field' id='name' value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input type="email" className='input-field' id='email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
        <div className='checkboxes'>
                {gend.map((item, index) => (
                    <div key={index}>
                        <input value={item.text}   className='checkbox' type="checkbox" onChange={handleGenderSelect} />
                        <span>{item.text}</span>
                    </div>
                    ))}
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
    </div>
  )
}

export default UsersSignUp
