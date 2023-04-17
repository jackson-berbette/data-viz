const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
oracledb.initOracleClient({libDir: "/Users/bradberbette/Downloads/instantclient_18_1"});

const app = express();
const PORT = 5000;

app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })

app.get('/gdprcw',(req,res)=>{
    async function fetchDataGDPRatioColdWar(){
        try {
            const connection = await oracledb.getConnection({
                user: 'mohammad.yaaseen',
                password: 'xrfEpNmbxgFnJcuWOUrPLm0Z',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });

            const result = await connection.execute('SELECT time, GDP.gdp / NULLIF(LAG(GDP.gdp) OVER (ORDER BY time), 0) AS GDP_change FROM GDP WHERE time between to_date( \'12-mar-1947\', \'dd-mon-yyyy\' ) and to_date( \'26-dec-1991\', \'dd-mon-yyyy\' ) ORDER BY time;');
            return result;

        } catch (error) {
            return error;
        }
    }

    fetchDataGDPRatioColdWar()
    .then(dbRes =>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/gdprhmc',(req,res)=>{
    async function fetchDataGDPRatioHousingMarketCrisis(){
        try {
            const connection = await oracledb.getConnection({
                user: 'mohammad.yaaseen',
                password: 'xrfEpNmbxgFnJcuWOUrPLm0Z',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });

            const result = await connection.execute('SELECT time, GDP.gdp / NULLIF(LAG(GDP.gdp) OVER (ORDER BY time), 0) AS GDP_change FROM GDP WHERE time between to_date( \'01-jan-2005\', \'dd-mon-yyyy\' ) and to_date( \'31-dec-2013\', \'dd-mon-yyyy\' ) ORDER BY time;');
            return result;

        } catch (error) {
            return error;
        }
    }

    fetchDataGDPRatioHousingMarketCrisis()
    .then(dbRes =>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})

// app.get('/gdprcov',(req,res)=>{
//     async function fetchDataGDPRatioCovid(){
//         try {
//             const connection = await oracledb.getConnection({
//                 user: 'mohammad.yaaseen',
//                 password: 'xrfEpNmbxgFnJcuWOUrPLm0Z',
//                 connectString: 'oracle.cise.ufl.edu/orcl'
//             });

//             const result = await connection.execute('SELECT EXTRACT(YEAR FROM time) AS Year, EXTRACT(MONTH FROM time) AS Month, SUM(new_cases) / LAG(SUM(new_cases)) OVER (ORDER BY EXTRACT(YEAR FROM time), EXTRACT(MONTH FROM time)) AS Total_Case FROM covid WHERE iso_code = \'USA\' GROUP BY EXTRACT(YEAR FROM time), EXTRACT(MONTH FROM time) ORDER BY Year ASC, Month ASC');
//             return result;

//         } catch (error) {
//             return error;
//         }
//     }

//     fetchDataGDPRatioCovid()
//     .then(dbRes =>{
//         console.log(dbRes);
//         res.send(dbRes);
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })

app.get('/ccr',(req,res)=>{
    async function fetchDataCovidCasesRatio(){
        try {
            const connection = await oracledb.getConnection({
                user: 'mohammad.yaaseen',
                password: 'xrfEpNmbxgFnJcuWOUrPLm0Z',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });

            const result = await connection.execute('SELECT EXTRACT(YEAR FROM time) AS Year, EXTRACT(MONTH FROM time) AS Month, SUM(new_cases) / LAG(SUM(new_cases)) OVER (ORDER BY EXTRACT(YEAR FROM time), EXTRACT(MONTH FROM time)) AS Total_Case FROM covid WHERE iso_code = \'USA\' GROUP BY EXTRACT(YEAR FROM time), EXTRACT(MONTH FROM time) ORDER BY Year ASC, Month ASC');
            return result;

        } catch (error) {
            return error;
        }
    }

    fetchDataCovidCasesRatio()
    .then(dbRes =>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/urracw',(req,res)=>{
    async function fetchDataUnemploymentRollingAverageColdWar(){
        try {
            const connection = await oracledb.getConnection({
                user: 'mohammad.yaaseen',
                password: 'xrfEpNmbxgFnJcuWOUrPLm0Z',
                connectString: 'oracle.cise.ufl.edu/orcl'
            });

            const result = await connection.execute('SELECT time, AVG(unrate.unrate) OVER (ORDER BY time ROWS BETWEEN 11 PRECEDING AND CURRENT ROW) AS rolling_avg FROM UNRATE WHERE time between TO_DATE(\'1947-01-01\', \'YYYY-MM-DD\') AND TO_DATE(\'1991-12-31\', \'YYYY-MM-DD\') ORDER BY time; ');
            return result;

        } catch (error) {
            return error;
        }
    }

    fetchDataUnemploymentRollingAverageColdWar()
    .then(dbRes =>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})



app.listen(PORT, 
    () => {
        console.log(`listen to port ${PORT}`);
    })