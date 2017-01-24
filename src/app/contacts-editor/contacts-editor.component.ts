import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {}};

  constructor(private route: ActivatedRoute, private router: Router, private contactsService: ContactsService, private eventBus: EventBusService) { }

  ngOnInit() {
    let contactId = this.route.snapshot.params['id'];
    this.contactsService.getContact(contactId).subscribe(contact => this.contact = contact);
    this.eventBus.emit('appTitleChange', 'Edit Contact');
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe(() => this.goToDetails());
  }

  cancel(contact: Contact) {
    this.goToDetails();
  }

  private goToDetails() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }


}
