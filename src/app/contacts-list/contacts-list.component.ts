import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    let searchedContacts$ = this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.contactsService.search(term));

    //this.contacts = this.contactsService.getContacts().delay(5000).merge(searchedContacts$);
    this.contacts = this.contactsService.getContacts().delay(5000).takeUntil(searchedContacts$).merge(searchedContacts$);
  }

  contactTrackBy(index, contact) {
    return contact.id;
  }

}
