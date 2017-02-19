import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

const VALID_EMAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

//Waarom zit dit niet IN de class???
export function validateEmail(c: FormControl) {
  return (VALID_EMAIL.test(c.value)) ? null : { validateEmail: { valid: false }};
}

@Directive({
  selector: '[trmValidateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validateEmail,
      multi: true
    }
  ]
})
export class EmailValidatorDirective {}