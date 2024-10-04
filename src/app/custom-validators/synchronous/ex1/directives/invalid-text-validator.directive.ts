import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective, // titulo da classe
      multi: true,
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator { // é preciso registra este validador, para ser uma validador.

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null { // se o valor for null significa que o valor e valido.
    const isValid = !control.value.includes('pedro');

    return isValid ? null : { 'invalidText': true }
  }

}
