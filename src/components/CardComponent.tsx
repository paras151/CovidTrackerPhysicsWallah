import { IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Card.css';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {fetchDistrictDetails} from '../api/index';


interface IProps {
    className:string
    cardTitle:string
    value:number
    cardSubtitle:string
}

const CardComponent: React.FC<IProps> = ({className,cardTitle,value,cardSubtitle }: IProps) => {
  
    return (
  <Grid item xs={12} md={3} component={Card} className={[className,"card"].join(" ")}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
      {value}
      {/* <CountUp start={0} end={value} duration={2.75} separator="," /> */}
      </Typography>
      <Typography color="textSecondary">
        {new Date().toDateString()}
      </Typography>
      <Typography variant="body2" component="p">
      {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
    
  );
};

export default CardComponent;
