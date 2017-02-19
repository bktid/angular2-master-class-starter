import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { validateEmail } from '../email-validator.directive';
import { checkEmailAvailability } from '../email-availability-validator.directive';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  contactsForm: FormGroup;

  constructor(private contactsService: ContactsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', validateEmail, checkEmailAvailability(this.contactsService)],
      birthday: '',
      phone: '',
      website: '',
      address: this.formBuilder.group({
        street: '',
        zip: '',
        city: '',
      })
    })  
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
