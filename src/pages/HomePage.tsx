import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { getWeatherInfo } from '../api/weather.api' 
import { IMainProps, objectForm, IWindProps, objectWindForm  } from '../constants/weather.constants'

const HomePage = () => {

  const [main, setMain] = useState<IMainProps>(objectForm);
  const [wind, setWind] = useState<IWindProps>(objectWindForm);

  useEffect(() => {
    getWeatherInfo().then((res:any) => {
      console.log(res)
      setMain(res.main)
      setWind(res.wind)
    })
  },[])
  return (
      <NavBar>
          <div className = "container text-center">This is the Home Page</div>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                    Temp = {main.temp}
                    </div>
                    <div className="col">
                    Pressure = {main.pressure}
                    </div>
                    <div className="col">
                    Speed = {wind.speed}
                    </div>
                </div>
            </div>
    </NavBar>
  )
}

export default HomePage