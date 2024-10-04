import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title = 'Exemplo de um nome';
  nome: string = '';
  nome2: string = '';

  onChange(text: string): void {
    // console.log(text)

    this.nome = text;
  }
}
