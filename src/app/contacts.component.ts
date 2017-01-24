import { Component, OnInit } from '@angular/core';

import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {

  constructor(private eventBus: EventBusService) {}

  title: string;

  ngOnInit() {
    this.eventBus.observe('appTitleChange')
                 .subscribe(title => this.title = title);
  }
}
