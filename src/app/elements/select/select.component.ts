import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  nationalitySelected: number | undefined;
  nationalities: { id: number; description: string }[] = [
    {
      id: 1,
      description: 'Brasileira',
    },
    {
      id: 2,
      description: 'Argentina',
    },
    {
      id: 3,
      description: 'Espanhola',
    },
  ];

  onChange(nat: string): void {
    console.log('onChange nationality', nat);

    this.nationalitySelected = +nat;
  }
}
