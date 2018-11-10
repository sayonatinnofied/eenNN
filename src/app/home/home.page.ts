import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { EENNService } from '../shared/_services/eenn.service';

import { Full } from '../shared/_model/full.model';
import { ActionSheetService } from '../shared/_services/actionsheet.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private title: String = 'Home';
  private full: Full;

  constructor(private eennService: EENNService, private actionSheetService: ActionSheetService) {
    
  }

  ngOnInit() {

    this.loadAllValues();

  }

  private loadAllValues() {
    this.eennService.getAll().pipe(first()).subscribe(full => {
      this.full = full;
    }, error => {
      console.log(error);
    });
  }

  presentActionSheet() {
    this.actionSheetService.presentActionSheet();
  }
}
