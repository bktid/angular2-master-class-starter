import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() {
    return CONTACT_DATA;
  }

  getContact(id: string) {
    return CONTACT_DATA.find(contact => contact.id.toString() === id);
  }
}
