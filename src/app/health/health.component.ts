import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EENNService } from '../shared/_services/eenn.service';

import { Health } from '../shared/_model/health.model';
import { ActionSheetService } from '../shared/_services/actionsheet.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  private title: String = "Health@NN";
  private health: Health[];

  constructor(private eennService: EENNService,
    private actionSheetService: ActionSheetService) { }

  ngOnInit() {
    this.loadAllValues();
  }

  private loadAllValues() {
    this.eennService.getHealth().pipe(first()).subscribe(health => {
      this.health = health;
    }, error => {
      console.log(error);
    });
  }

  presentActionSheet() {
    this.actionSheetService.presentActionSheet();
  }

}
