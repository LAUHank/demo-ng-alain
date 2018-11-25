import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-front-video-list',
  templateUrl: './video-list.component.html',
})
export class FrontVideoListComponent implements OnInit {
  data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.fillData();
  }

  fillData() {
    this.data.push({title: '标题 5'});
    this.data.push({title: '标题 6'});
    this.data.push({title: '标题 7'});
  }
}
