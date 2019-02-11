import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-component',
  templateUrl: './kpi-component.component.html',
  styleUrls: ['./kpi-component.component.css']
})
export class KpiComponentComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;

  kpis : any[] = [
    {
      label:"clients",
      color:"primary"
    },
    {
      label:"activées",
      color:"warn"
    },
    {
      label:"1er conseils validés",
      color:"danger"
    },
    {
      label:"Conseil validés",
      color:"yellow"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
