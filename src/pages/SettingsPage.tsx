import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar';
import { IFormV2Props, formV2 } from '../constants/weather.constants';


const SettingsPage = () => {
  
  const [formValues, setFormValues] = useState<IFormV2Props>(formV2);

  const handleClick = () => {
    console.log('sending this info over to backend: ', formValues)
    // sendContactInfo(formValues).then((res:any)=> {
    //   console.log(res);
    // })
  }
  
  console.log(formValues)

  return (
    <NavBar>
        <div>This is the Setting Page</div>

        <input
          onChange={(e) => {
            setFormValues({...formValues, firstName: e.target.value})
          }}
          type="text"
          placeholder="What's your first name?"
          value={formValues.firstName}
        />
        <input
          onChange={(e) => {
            setFormValues({...formValues, lastName: e.target.value})
          }}
          type="text"
          placeholder="What's your last name?"
          value={formValues.lastName}
        />
        <input
          onChange={(e) => {
            setFormValues({...formValues, contact:e.target.value})
          }}
          type="text"
          placeholder="What's your number?"
          value={formValues.contact}
        />
        <input
          onChange={(e) => {
            setFormValues({...formValues, email:e.target.value})
          }}
          type="text"
          placeholder="What's your email?"
          value={formValues.email}
        />
        <button type="submit" onClick={handleClick}>Submit</button>
    </NavBar>
  )
}

export default SettingsPage
