import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true }]
})
export class ValidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if(control!= undefined && control.value != undefined) {
      if (control.value.includes('test')) {
        return { invalidname: true }
      }
    }

    return null;
  }


}
