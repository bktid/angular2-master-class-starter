import { Directive, forwardRef } from '@angular/core';
import { FormControl, NG_ASYNC_VALIDATORS } from '@angular/forms';

import { ContactsService } from './contacts.service';

@Directive({
  selector: '[trmEmailAvailabilityValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailabilityValidatorDirective),
      multi: true
    }
  ]
})
export class EmailAvailabilityValidatorDirective {

  // _validate is strakt een function 
  // die een formcontrol binnenpakt
  // en die een observable teruggeeft (duh async validator)
  _validate: Function;

  constructor(contactsService: ContactsService) {
    this._validate = this.checkEmailAvailability(contactsService);
  }

  // bij async validators kan je dus wel de logica IN de klasse steken...
  private checkEmailAvailability(contactsService: ContactsService) {
    return (c: FormControl) => {
      return contactsService.isEmailAvailable(c.value)
        .map(response => !response.error ? null : {
          emailTaken: true
        });
    };
  }

  // is dit een name by convention?
  // we verwijzen hier nergens naar vanuit @Directive
  validate(c: FormControl) {
    return this._validate(c);
  }
}
