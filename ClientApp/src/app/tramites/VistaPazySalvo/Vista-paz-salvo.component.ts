import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vistapazsalvo',
  templateUrl: './Vista-paz-salvo.component.html',
  styleUrls: ['./Vista-paz-salvo.component.css']
})
export class VistapazsalvoComponent implements OnInit {

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
