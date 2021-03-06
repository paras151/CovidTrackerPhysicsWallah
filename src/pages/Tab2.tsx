import { IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar, useIonViewWillEnter } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
// import styles from './Tab2.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {fetchStateDetails} from '../api/index';
import CardComponent from "../components/CardComponent";
import Chart from "../components/Chart";
interface IProps {
  state:string
  data:Array<Object>
  handleDistrictChange:Function
}

const Tab2: React.FC<IProps> = ({state, data, handleDistrictChange }: IProps) => {
  
  const [stateData, setStateData] = useState<Array<String>>([]);
  const [cases, setCases] = useState<any[]>([]);
  console.log(data)
  useEffect(() =>{
    const getStateDetails = async (state)=>{
      const data = await fetchStateDetails(state);
      console.log(data)
      let arr= new Array();
      arr.push(data["confirmed"])
      arr.push(data["active"])
      arr.push(data["recovered"])

      setCases(arr);
      setStateData(data["districts"]);

      
    }
    
    getStateDetails(state);
  },[])

  const values:any = [];

  for(let i=0;i<cases.length;i++){
    values[i] = cases[i].toLocaleString();
  }

  return (
    <IonPage>
      <IonContent>
    <h1>{state}</h1>
      <div>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className="infected"
          cardTitle="Infected"
          value={values[0]}
          cardSubtitle="Total number of cases of COVID-19."
        />
        <CardComponent
          className="active"
          cardTitle="Active"
          value={values[1]}
          cardSubtitle="Number of active cases of COVID-19."
        />
        <CardComponent
          className="recovered"
          cardTitle="Recovered"
          value={values[2]}
          cardSubtitle="Number of recoveries from COVID-19."
        />
      </Grid>
        
    </div>

    <div className="list2">
    <Chart confirmed={cases[0]} active={cases[1]} recovered={cases[2]} />
      
    <h1>Select District</h1>

      <IonList className="list-size" inset>

      {stateData.map((district,i) => (
                <IonItemSliding key={i}>
                <IonItem className="item" routerLink={`/tab3/`}>
                  <IonLabel onClick={(e:any) => handleDistrictChange(district)}>{district}</IonLabel>
                </IonItem>
              </IonItemSliding>
              ))}
      
      </IonList>
      </div>
    </IonContent>
    
  </IonPage>
  );
};

export default Tab2;
