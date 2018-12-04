import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tledu',
  templateUrl: './tledu.component.html',
  styles: [
    `.logo {
      width: 105px;
      height: 46px;
      background-color: #52c41a;
      margin: 12px 50px 0px 100px;
      float: left;
    }
    .menu-margin{
      margin:0px 50px 0px 0px;
    }
    `
  ]
})
export class TleduComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
