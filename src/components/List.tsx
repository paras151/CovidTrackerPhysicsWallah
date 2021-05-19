import { IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './List.css';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
// import styles from './Tab2.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {fetchStateDetails} from '../api/index';
interface IProps {
  data:any
}

const List: React.FC<IProps> = ({data }: IProps) => {
  
  return (
    <IonPage>

    <IonContent className="list-container">
      <IonList className="list" inset>

      {data.map((district,i) => (
                <IonItemSliding key={i}>
                <IonItem className="item" routerLink={`/tab3/`}>
                </IonItem>
              </IonItemSliding>
              ))}
      
      </IonList>
    </IonContent>
    
  </IonPage>
  );
};

export default List;
