import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputEl!: NgModel;

  ngAfterViewInit(): void {
    console.log(this.inputEl);
  }

  eventClick(): void {
    if (this.inputEl.valid && this.inputEl.touched) {
      alert('Enviado com sucesso');
    } else {
      alert('Valor inválido');
    }
  }
}
