import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { ContactsService } from './contacts.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  //template: '<md-toolbar color="primary">Contacts</md-toolbar>',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {
  //title = 'Angular 2 Master Class setup works!';
  contact: Contact = {
    id: 6,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  };
  contacts: Contact[];

  contactTrackBy(index, contact) {
    return contact.id;
  }

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
