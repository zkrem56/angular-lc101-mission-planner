import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentsList: object[] = [
    {name: 'Mars soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
