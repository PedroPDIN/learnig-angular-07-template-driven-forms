import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  isActive: boolean = false;
  isActiveForm: boolean = false;
  isApproved: boolean = false;

  onChange(v: boolean): void {
    console.log('onChange', v);

    //... sem o o two-way data biding (ou seja fazendo o input e output manual), a possibilidade de tratar o valor antes de fazer o output.
    this.isActive = v;
  }

  onChange2(v: boolean): void {
    console.log('onChange2', v);

    //... sem o o two-way data biding (ou seja fazendo o input e output manual), a possibilidade de tratar o valor antes de fazer o output.
    this.isActiveForm = v;
  }
}
