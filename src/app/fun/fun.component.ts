import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.scss']
})
export class FunComponent implements OnInit {

  private title: String = "Fun@NN";

  constructor() { }

  ngOnInit() {
  }

}
