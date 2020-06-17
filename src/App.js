import React, { Component } from 'react';
import {Cards, CountryPicker, Chart} from './components/';

import styles from './App.module.css';
import {fetchData, getCountryData } from './api';
import CoronaImage from './images/image.png';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.handleCountryChange.bind(this.handleCountryChange);
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({
            data : data
        })
    }
    handleCountryChange = async (country)=>{
        // console.log(country);
        if(country == 'global'){
            this.setState({
                country: undefined
            })
        }else{
            const res = await getCountryData(country);
            this.setState({
                data: res.data,
                country : country 
            })
        }
    }
    render(){
        return (
            <div className={styles.container}>
                <img src={CoronaImage } />
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/> 
            </div>
        )
    }
}
export default App;