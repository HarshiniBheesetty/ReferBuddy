import { Component, OnInit, Input } from '@angular/core';
import { CompanyModel } from 'src/app/models/company-model';

@Component({
  selector: 'app-comapany-unit',
  templateUrl: './comapany-unit.component.html',
  styleUrls: ['./comapany-unit.component.css']
})
export class ComapanyUnitComponent implements OnInit {

    @Input() public company : CompanyModel;

  constructor() { }

  ngOnInit() {
    console.log();
  }

}
