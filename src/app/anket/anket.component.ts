import { Anket } from './../model/anket.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anket',
  templateUrl: './anket.component.html',
  styleUrls: ['./anket.component.css']
})
export class AnketComponent implements OnInit {

  model: Anket;
  constructor() {
    this.model = new Anket();
   }

  ngOnInit() {
  }

}
