import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modulo-add-user',
  templateUrl: './modulo-add-user.component.html',
  styleUrls: ['./modulo-add-user.component.css']
})
export class ModuloAddUserComponent implements OnInit {

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
