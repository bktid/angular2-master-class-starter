import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';
import { APP_CONFIG_TOKEN } from './app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(APP_CONFIG_TOKEN) private appConfig) { }

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

  updateContact(contact: Contact) {
    return this.http.put(this.appConfig.apiEndpoint + 'contacts/' + contact.id, contact)
  }

  private searchTerm(term: string): Observable<any> {
    return this.http.get(`${this.appConfig.apiEndpoint}search?text=${term}`)
    .map(respone => respone.json().items);
  }

  search(terms: Observable<string>, debounceMs = 400) : Observable<Array<Contact>> {
    let searchedContacts$ = terms
      .debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(term => this.searchTerm(term));

    return this.getContacts()
    // if there is delay on the initial list, use takeUntil to prevent that the initial list would overwrite searchresults by typing...
    //.delay(5000)   fake a delay of 5 seconds...
    //.takeUntil(searchedContacts$)   drop it if search results are coming in
    .merge(searchedContacts$);
  }
}
