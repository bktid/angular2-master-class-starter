import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject('APP_CONFIG') private appConfig) { }

  getContacts() {
    return this.http.get(this.appConfig.apiEndpoint + 'contacts')
    .map(respone => respone.json())
    .map(data => data.items);
  }

  getContact(id: string) {
    return this.http.get(this.appConfig.apiEndpoint + 'contacts/' + id)
    .map(respone => respone.json())
    .map(data => data.item);
  }
}
