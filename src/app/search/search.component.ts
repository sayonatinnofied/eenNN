import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EENNService } from '../shared/_services/eenn.service';

import { Full } from '../shared/_model/full.model';
import { ActionSheetService } from '../shared/_services/actionsheet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchType: string = 'work';
  private searchStr: string;
  private full: Full;

  constructor(private eennService: EENNService,
    private actionSheetService: ActionSheetService) { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
    this.searchType = event.detail.value;
  }

  search() {
    console.log(this.searchStr);
    this.eennService.search(this.searchStr).pipe(first()).subscribe(full => {
      this.full = full;
    }, error => {
      console.log(error);
    });
  }

  presentActionSheet() {
    this.actionSheetService.presentActionSheet();
  }
}
