import axios from 'axios';
import React from 'react';

const GDPRatioHousingMarketCrisis = props =>{
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios('http://localhost:5000/gdprhmc')
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
        GDPRatioHousingMarketCrisis Component
        {
            data.rows
            // data.length>0 &&
            // data.map((item)=>
            //     <div>{item}</div>)
        }
    </div>)
}

export default GDPRatioHousingMarketCrisis;