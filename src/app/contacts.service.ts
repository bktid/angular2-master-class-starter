import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:4201/api/contacts')
    .map(respone => respone.json())
    .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get('http://localhost:4201/api/contacts/' + id)
    .map(respone => respone.json())
    .map(data => data.item);
  }
}
