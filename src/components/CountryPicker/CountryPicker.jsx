import React, { Component, useState, useEffect } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';

const CountryPicker = ({handleCountryChange})=>{
    const [Countries, SetCountries] = useState([]);
    useEffect(()=>{
        const countryFetch = async () => {
            SetCountries(await countries());
        }
        countryFetch();
    },[SetCountries]);
    // console.log(Countries);
    return (
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {Countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;