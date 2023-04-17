import axios from 'axios';
import React from 'react';

const UnemploymentRollingAverageColdWar = props =>{
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios('http://localhost:5000/urracw')
        .then(response=>{
            if(response.status===200){
                const fetchedData = response.data;
                console.log('fetchedData', fetchedData);
                setData(fetchedData);
            }
        })
        .catch(err=>{

        })
    },[])

    return (<div>
        UnemploymentRollingAverageColdWar Component
        {
            data.rows
            // data.length>0 &&
            // data.map((item)=>
            //     <div>{item}</div>)
        }
    </div>)
}

export default UnemploymentRollingAverageColdWar;