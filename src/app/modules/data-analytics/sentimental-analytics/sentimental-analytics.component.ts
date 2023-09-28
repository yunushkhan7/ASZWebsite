import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentimental-analytics',
  templateUrl: './sentimental-analytics.component.html',
  styleUrls: ['./sentimental-analytics.component.scss']
})
export class SentimentalAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
