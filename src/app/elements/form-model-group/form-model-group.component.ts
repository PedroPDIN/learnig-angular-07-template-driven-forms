import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-model-group',
  templateUrl: './form-model-group.component.html',
  styleUrl: './form-model-group.component.scss',
})
export class FormModelGroupComponent {
  onSubmit(meuForm: NgForm): void {
    console.log('Form Model Group', meuForm.value)
  }
}
