import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { form, IFormProps } from '../constants/weather.constants';
import { sendContactInfo } from '../api/weather.api';

const AboutPage = () => {

  const [formValues, setFormValues] = useState<IFormProps>(form);

  const handleClick = () => {
    console.log('sending this info over to backend: ', formValues)
    // sendContactInfo(formValues).then((res:any)=> {
    //   console.log(res);
    // })
  }
  
  console.log(formValues)

  return (
    <NavBar>
        <div>This is the About Page</div>
{/* 
        <form onSubmit={handleClick}> */}
        <input
          onChange={(e) => {
            setFormValues({...formValues, name: e.target.value})
          }}
          type="text"
          placeholder="What's your name?"
          value={formValues.name}
        />
        <input
          onChange={(e) => {
            setFormValues({...formValues, contact:e.target.value})
          }}
          type="text"
          placeholder="What's your number?"
          value={formValues.contact}
        />
        <button type="submit" onClick={handleClick}>Submit</button>
        {/* </form> */}

    </NavBar>
  )
}

export default AboutPage