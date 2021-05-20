import { IonContent,IonCard,IonCardContent,IonCardSubtitle,IonCardHeader,IonCardTitle,IonItemOptions,IonItemSliding,IonItemOption,IonItem,IonList,IonLabel,IonItemDivider,IonListHeader, IonSelectOption, IonSelect , IonHeader, IonPage, IonToolbar } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Chart.css';
import { Line, Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {fetchStateDetails} from '../api/index';
import CardComponent from "../components/CardComponent";

interface IProps {
  confirmed:any;
  active:any;
  recovered:any;
}

interface ChartState {
  chartData: {
      labels: string[],
      datasets: [{
          label: string,
          data: any[],
          backgroundColor: string[]
      }]
  }
}
// class Chart extends React.Component<ChartProps, ChartState>{

//   constructor(props: ChartProps) {
//     super(props);
//     this.state = {
//         chartData: {
//             labels: [],
//             datasets: [{
//                 label: '',
//                 data: [],
//                 backgroundColor: []
//             }]
//         }
//     }
// }

// componentDidMount() {
//   const confirmed = this.props.confirmed;
//   const active = this.props.active;
//   const recovered = this.props.recovered;

//   let componentState = { ...this.state.chartData };
//   componentState.datasets = [
//       {
//           label: 'People',
//           data: [confirmed, active, recovered],
//           // labels: ['Confirmed', 'Active', 'Recovered'],
//           backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          
//       }
//   ]

//   this.setState({ chartData: componentState });
// } 

//   render(){
//     return (
//       <Bar
//       type = "any"

//         height={300}
//         data={this.state.chartData}
//         options={{
//           legend: { display: false },
//            maintainAspectRatio: false 
//         //   title: { display: true, text: `Current state in ${country}` },
//         }}
//       />
//   );
// }
// }
const Chart: React.FC<IProps> = ({confirmed, active, recovered }: IProps) => {
  
    const barChart = (
        confirmed ? (
          <Bar
            type="any"
            height={300}
            data={{
              labels: ['Confirmed', 'Active', 'Recovered'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed, active, recovered],
                },
              ],

            }}
            options={{
              legend: { display: false },
               maintainAspectRatio: false 
            //   title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    
      
    
      return (
        <div className="container">
          {barChart}
        </div>
      );
    };

export default Chart;
