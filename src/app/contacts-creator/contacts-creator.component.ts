import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
  }

  save(contact: Contact) {
    this.contactsService.addContact(contact).subscribe(() => this.goToContactList());
  }

  // goeie truuk om object te loggen en te kunnen inspecteren
  // gebruik dan {{printme(email.errors)}} in de html
  printme(objectToInspect) {
    console.log(objectToInspect);
  }

  private goToContactList() {
    this.router.navigate(['']);
  }
}