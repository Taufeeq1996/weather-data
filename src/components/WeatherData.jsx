import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { hover } from '@testing-library/user-event/dist/hover'


function WeatherData() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://all-the-weather.herokuapp.com/cities/')
            .then(res => {
                console.log(res)
                setItems(res.data.items)
            })
            .catch(err => {
                  console.log(err)
            })
        
    },[])
    
   return(
    <div>
        <ul>
        {
            items.map((item)=>{
                return(
                    <>
                    <li key={item.id} style={{backgroundColor:"yellow",border:"1px solid black"}}>
                        <h1>{item.name}</h1>
                        <h3>{item.regionCode}</h3>
                        <h3>{item.countryCode}</h3>
                    </li>
                    </>
                )
            })
        }
        </ul>
        
    </div>
   )
}

export default WeatherData
