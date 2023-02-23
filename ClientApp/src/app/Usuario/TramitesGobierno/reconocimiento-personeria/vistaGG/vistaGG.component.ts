import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistaGG',
  templateUrl: './vistaGG.component.html',
  styleUrls: ['./vistaGG.component.css']
})
export class VistaGGComponent implements OnInit {

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
