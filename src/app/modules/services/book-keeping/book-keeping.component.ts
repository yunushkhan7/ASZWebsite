import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-keeping',
  templateUrl: './book-keeping.component.html',
  styleUrls: ['./book-keeping.component.scss']
})
export class BookKeepingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
