import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  modalReference: NgbModalRef;
  constructor(
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  closemodal(){
    this.modalReference.close();
  }

}
