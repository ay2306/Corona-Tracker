import React, { Component } from 'react';
import {Grid,Card,CardContent,Typography} from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ( props )=>{
    if(!!!props.data)return ()=> <h2>Loading...</h2>
    console.log(props.data);
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.Card,styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end = {props.data.confirmed.value}
                                duration = {2}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases </Typography>
                    </CardContent>
                </Grid>
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.Card,styles.Recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end = {props.data.recovered.value}
                                duration = {2}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{}</Typography>
                        <Typography variant="body2">Number of Recovered Cases </Typography>
                    </CardContent>
                </Grid>
                <Grid item Component={Card} xs={12} md={3} className={cx(styles.Card,styles.Deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end = {props.data.deaths.value}
                                duration = {2}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths  Cases </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Cards;