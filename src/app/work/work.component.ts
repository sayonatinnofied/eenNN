import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EENNService } from '../shared/_services/eenn.service';

import { Work } from '../shared/_model/work.model';
import { ActionSheetService } from '../shared/_services/actionsheet.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private title: String = "Work@NN";
  private work: Work[];

  constructor(private eennService: EENNService,
    private actionSheetService: ActionSheetService) { }

  ngOnInit() {
    this.loadAllValues();
  }

  private loadAllValues() {
    this.eennService.getWork().pipe(first()).subscribe(work => {
      this.work = work;
    }, error => {
      console.log(error);
    });
  }

  presentActionSheet() {
    this.actionSheetService.presentActionSheet();
  }


}
