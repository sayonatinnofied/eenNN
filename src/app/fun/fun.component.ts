import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EENNService } from '../shared/_services/eenn.service';

import { Fun } from '../shared/_model/fun.model';
import { ActionSheetService } from '../shared/_services/actionsheet.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {

  private title: String = "Fun@NN";
  private fun: Fun[];

  constructor(private eennService: EENNService,
    private actionSheetService: ActionSheetService) { }

  ngOnInit() {
    this.loadAllValues();
  }

  private loadAllValues() {
    this.eennService.getFun().pipe(first()).subscribe(fun => {
      this.fun = fun;
    }, error => {
      console.log(error);
    });
  }

  presentActionSheet() {
    this.actionSheetService.presentActionSheet();
  }

}
