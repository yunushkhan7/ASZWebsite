import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [NgbAccordionConfig]
})
export class FooterComponent implements OnInit {

  constructor(config: NgbAccordionConfig) { 
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit(): void {
  }

}
