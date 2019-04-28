import { Component, OnInit, Input } from '@angular/core';
import { AnketSorusu, SoruTipi } from '../model/anket-sorusu.model';

@Component({
  selector: 'app-anket-sorusu',
  templateUrl: './anket-sorusu.component.html',
  styleUrls: ['./anket-sorusu.component.css']
})
export class AnketSorusuComponent implements OnInit {

  @Input()
  soru: AnketSorusu;
  soruTipi: SoruTipi;
  constructor() { }

  ngOnInit() {
    console.log(this.soru);
  }

}
