import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista1cert',
  templateUrl: './vista1cert.component.html',
  styleUrls: ['./vista1cert.component.css']
})
export class Vista1certComponent implements OnInit {

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
