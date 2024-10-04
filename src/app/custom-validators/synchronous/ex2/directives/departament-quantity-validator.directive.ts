import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartamentQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartamentQuantityValidatorDirective, // titulo da classe
      multi: true,
    },
  ],
})
export class DepartamentQuantityValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('Custom Validator', control);

    if (control.value.departamento === 'IT' && +control.value.quantidade > 10) { // verificando se as condições estiver invalido.
      return {'invalidITQuantity': true}
    }

    if (control.value.departamento === 'HR' && +control.value.quantidade > 20) { // verificando se as condições estiver invalido.
      return {'invalidHRQuantity': true}
    }

    return null
  }

}
