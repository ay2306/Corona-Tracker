import React, { Component, useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country})=>{
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setDailyData ( await fetchDailyData() );
        } 
        fetchAPI();
        // if(!!dailyData)console.log(dailyData);
    },[]);

    const lineChart = (
        dailyData.length 
        ? (<Line
            data = {{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    'data' : dailyData.map(({confirmed})=>confirmed),
                    'label' : 'Infected',
                    'borderColor': '#3333ff',
                    fill: true
                },{
                    'data' : dailyData.map(({deaths})=>deaths),
                    'label' : 'Deaths',
                    'borderColor': 'rgba(255,0,0,0.5)',
                    fill: true
                }]
            }}
            />) : null
    );
    // if(country)console.log([data.confirmed.value,data.recovered.value,data.deaths.value ]);
    const barChart = (
        country
        ?(
            <Bar
                data = {{
                    labels : ['Infected', 'Recovered', 'Deaths'],
                    datasets : [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        data : [data.confirmed.value,data.recovered.value,data.deaths.value ]
                    }],
                }}
                options = {{
                    legend: {display : false},
                    title : {display : true, text: `COVID-19 Stats in ${country}`}
                }} 
            />
        ) : null
    );
    return (
        <div className={styles.container}>
            {/* {lineChart} */}
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;