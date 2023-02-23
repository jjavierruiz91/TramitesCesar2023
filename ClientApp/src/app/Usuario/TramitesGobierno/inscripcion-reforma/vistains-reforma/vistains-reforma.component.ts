import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistains-reforma',
  templateUrl: './vistains-reforma.component.html',
  styleUrls: ['./vistains-reforma.component.css']
})
export class VistainsReformaComponent implements OnInit {

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
