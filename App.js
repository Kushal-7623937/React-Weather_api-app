import React,{ useState } from 'react';

import './App.css';
import axios from 'axios';

function App(){

    const[data ,setData] = useState({});
    const [location, setLocation]=useState('');
         const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5170455f0cf210b046eff1946e01184b`


    const filterData=(e)=>{
        if(e.key === "Enter"){
axios.get(url).then((response)=>{

    setData(response.data)
    console.log(response.data)
})
}
    }
    return(
<div className="container-fluid">
<h2 className="text-white" id="title"> Find Your Latest City Temperature Here </h2>

<input type ="text" placeholder="Enter Your City Name" value={location} onChange={(e)=>setLocation(e.target.value)} onKeyPress={filterData} className="field" size="30" />
<div className="cityName">
<h3 className ="text-white">{data.name}</h3>
</div>
<div className="temperature">
{data.main ? <h1 className="text-white"> {data.main.temp}&#176;F</h1>: null}
</div> 
<div className="condition">
{data.weather ? <p id="coluds" className="text-white">{data.weather[0].description}</p> : null}
</div>
<div className="smallContain d-flex flex-row">
<div className="one">
{data.main ? <h4 className="text-dark"> {data.main.feels_like}&#176;F</h4>: null}
<h2>Heat</h2>

</div>
<div className="one">
{data.main ? <h4 className="text-dark"> {data.wind.speed}&#176;F</h4>: null}
<h3> Wind speed </h3>


</div>
<div className="one">
{data.main ? <h4 className="text-dark"> {data.main.humidity}&#176;F</h4>: null}
<h3> Humidity </h3>

</div>

</div>


</div>
        );
}
export default App;