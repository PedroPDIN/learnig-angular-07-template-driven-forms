import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrl: './form-submit.component.scss',
})
export class FormSubmitComponent implements AfterViewInit {
  inputText: string = 'Texto Inicial!';
  textarea: string = 'Descrição Inicial!';
  radioButton: string = '1'; // dependendo do retorno da API, sempre busca verificar o tipo de retorno se é do tipo string ou do tipo number.
  select: string = '1';
  checkbox: boolean = false;

  @ViewChild('meuForm') form!: NgForm;

  onSubmit(form: NgForm): void {
    console.log('onSubmit', form);
    console.log(form.value);
  }

  // esse método reset não remove os valores de forma imediato (ou seja ainda terá valores no primeiro click do botão reset), porém, ficará vazio após um pequeno período de tempo ou apos o segundo click.
  // e sempre atentar a possíveis bugs com base nesse comportamento de reset, caso for preciso utiliza-lo. Outra forma é utilizar o reset manual que estará no método "onReset2()".
  onReset(form: NgForm): void {
    console.log('onReset', form.value);

    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.radioButton);
    console.log(this.select);
    console.log(this.checkbox);

    setTimeout(() => console.log('onReset', form.value), 1000);
  }

  onReset2(form: NgForm): void {
    form.reset();
    console.log(form.value);
  }

  // Método que observa cada alteração, nesse caso quando houver uma alteração no form, irá disparar um console.log aplicado no contexto do método abaixo.
  // Porém para ver ele em funcionamento é preciso alterar os valores do [ngFormOptions] no form para 'change' e também o [ngModelOptions] no elemento Input-Text para change.
  // Também irá funcionar em elementos independentes, basta referenciar o elemento no decorator @ViewChild() e realizar o mesmo processo abaixo dentro do método ngAfterViewInit.
  ngAfterViewInit(): void {
    this.form.valueChanges?.subscribe((value) => {
      console.log('Form Changes', value);
    });
  }
}
