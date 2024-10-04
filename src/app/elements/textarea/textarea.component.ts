import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  text: string = 'Texto inicial';

  onClick(): void {
    console.log(this.text);
  }

  onChange(text: string): void {
    // ... tendo a possibilidade em tratar o valor (text) antes de salvar na propriedade.
    this.text = text;
  };
}
