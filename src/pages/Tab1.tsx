import { IonContent,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '../components/List';
import React, { useState, useEffect } from 'react';

interface IProps {
  handleStateChange:Function
  data:Array<Object>
}
const Tab1: React.FC<IProps> = ({ data, handleStateChange }: IProps) => {

  return (
    <IonPage>
    <IonContent className="list-container">
      <h1>Select State</h1>
      <IonList className="list" inset>
        
          {data.map((state,i) => (
                <IonItemSliding key={i}>
                <IonItem className="item" routerLink={`/tab2/`}>
                  <IonLabel onClick={(e:any) => handleStateChange(state)}>{state}</IonLabel>
                </IonItem>
              </IonItemSliding>
              ))}
        
        
      </IonList>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
