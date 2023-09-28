import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bi-analytics',
  templateUrl: './bi-analytics.component.html',
  styleUrls: ['./bi-analytics.component.scss']
})
export class BIAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
