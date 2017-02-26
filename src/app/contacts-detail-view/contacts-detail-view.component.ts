import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute, private router: Router, private contactsService: ContactsService, private eventBus: EventBusService) { }

  ngOnInit() {
    // this.route.snapshot.params... werkt niet meer omdat deze component gereused wordt in da master detail ding
    // daarom gaat de ngOnInit niet meer af telkens je op een andere detail komt
    // bijgevolg moeten we subscriben zoals hieronder
    this.route.params.subscribe(params => {
      let contactId = params['id'];
      this.contactsService.getContact(contactId).subscribe(contact => {
        this.contact = contact
        this.eventBus.emit('appTitleChange', 'Detail for ' + this.contact.name);
      });    
    });
    // thoughtram fuckers gebruiken weer die mottige switchmap
    // this.route.params
    //     .switchMap(params => this.contactsService.getContact(params['id']))
    //     .subscribe(contact => this.contact = contact);  }
  }

  navigateToEditor(contact: Contact) {
    // Some explanation...

    // * Snippets from the dumb detail component:
    // @Output() edit = new EventEmitter<Contact>();
    // <button (click)="edit.emit(contact)">Edit</button>
    // ==> edit is an event emitter, we emit a custom event with contact as a payload

    // * Snippets from the view component:
    // (edit)="navigateToEditor($event)"
    // ==> we listen to this event, like we listen to click events
    // ==> remember from normal DOM events, $event is the payload

    // in a normal (click) event, $event is the click event itself
    // in a normal (click) event, $event.target is the widget (eg button, input, ...)
    // in a normal (click) event, $event.target.value is the value property
    // but here in our (edit) event, $event is the contact we passed to edit.emit()
    console.log(contact);
    
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });  
  }

  navigateToList() {
    this.router.navigate(['']);
  }
}
