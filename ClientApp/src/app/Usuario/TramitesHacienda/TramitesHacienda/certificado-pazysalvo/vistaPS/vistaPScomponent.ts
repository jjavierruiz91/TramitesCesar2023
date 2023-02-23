import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistaPS',
  templateUrl: './vistaPS.component.html',
  styleUrls: ['./vistaPS.component.css']
})
export class VistaPSComponent implements OnInit {

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
