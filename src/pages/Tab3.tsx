import { IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
// import styles from './Tab2.css';
import { Card, CardContent, Typography, Grid, CardActions } from '@material-ui/core';
import {fetchDistrictDetails} from '../api/index';
import CardComponent from "../components/CardComponent";
import Chart from "../components/Chart";
interface IProps {
  state:string
  district:string
  data:Array<Object>
}

const Tab3: React.FC<IProps> = ({state, district, data }: IProps) => {
  const [districtData, setDistrictData] = useState<Array<String>>([]);
  
  useEffect(() =>{
    const getDistrictDetails = async ()=>{
      const data = await fetchDistrictDetails(state, district);
      console.log("Districtdata",data)
      setDistrictData(data);
    }
    getDistrictDetails();
  },[])

  
  return (
    <IonPage className="ov">

<IonContent>
      <h1>{district}</h1>
      <div className="list2">
      <Grid container spacing={3} justify="center">
        <CardComponent
          className="infected"
          cardTitle="Infected"
          value={districtData["confirmed"]}
          cardSubtitle="Total number of cases of COVID-19."
        />
        <CardComponent
          className="active"
          cardTitle="Active"
          value={districtData["active"]}
          cardSubtitle="Number of active cases of COVID-19."
        />
        <CardComponent
          className="recovered"
          cardTitle="Recovered"
          value={districtData["recovered"]}
          cardSubtitle="Number of recoveries from COVID-19."
        />
      </Grid>
        
    
    
    <Chart confirmed={districtData["confirmed"]} active={districtData["active"]} recovered={districtData["recovered"]} />
    </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab3;
