import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const { data } = await axios.get(url);
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        };
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        // console.log(response);
        // if(!!response)return null;
        const res =  data.map((element)=>({
            confirmed: element.confirmed.total,
            deaths: element.deaths.total,
            date: element.reportDate,
        }))
        // console.log(res);
        // console.log("hello");
        return res;
    }catch(error){
        console.log("error chartjs:", error);
    }
}

export const countries = async() => {
    try{
        const {data} = await axios.get(`${url}/countries`);
        // console.log(data);
        const res = data.countries.map(({name})=>name);
        // console.log(res);
        return res; 
    }catch(error){

    }
}

export const getCountryData = async(country) => {
    const response = axios.get(`${url}/countries/${country}`);
    return response;
}