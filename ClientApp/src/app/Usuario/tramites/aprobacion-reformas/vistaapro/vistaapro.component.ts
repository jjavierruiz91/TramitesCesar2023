import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistaapro',
  templateUrl: './vistaapro.component.html',
  styleUrls: ['./vistaapro.component.css']
})
export class VistaaproComponent implements OnInit {

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
