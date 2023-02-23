import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista1reco',
  templateUrl: './vista1reco.component.html',
  styleUrls: ['./vista1reco.component.css']
})
export class Vista1recoComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  cancelar() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
