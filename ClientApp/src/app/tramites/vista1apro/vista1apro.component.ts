import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista1apro',
  templateUrl: './vista1apro.component.html',
  styleUrls: ['./vista1apro.component.css']
})
export class Vista1aproComponent implements OnInit {

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
