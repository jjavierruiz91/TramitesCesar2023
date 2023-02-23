import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista1ins',
  templateUrl: './vista1ins.component.html',
  styleUrls: ['./vista1ins.component.css']
})
export class Vista1insComponent implements OnInit {


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
