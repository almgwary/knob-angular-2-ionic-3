import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// import * as d3 from 'd3-selection';
// import * as d3Scale from "d3-scale";
// import * as d3Array from "d3-array";
// import * as d3Axis from "d3-axis";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage   {

   _DHT22KnobHumidityOptions: any = {
     skin: {
       type: 'tron'
     },
     size: 100,
     unit: "%",
     barWidth: 40,
     trackColor: 'rgba(255,0,0,.1)',
     prevBarColor: 'rgba(0,255,0,.2)',
     subText: {
       enabled: true,
       text: 'CPU used'
     },
     scale: {
       enabled: true,
       type: 'lines',
       width: 3
     },
     step: 5,
     displayPrevious: true
   };
   _DHT22KnobHumidityValue: number = 65;

  constructor() {


    setTimeout(()=>{
      this._DHT22KnobHumidityValue = 1 ;
    },7000)

  }



}
