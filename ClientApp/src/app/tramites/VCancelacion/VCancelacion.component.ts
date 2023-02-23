import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vcancelacion',
  templateUrl: './VCancelacion.component.html',
  styleUrls: ['./VCancelacion.component.css']
})
export class VCancelacionComponent implements OnInit {

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
