import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormComponent } from './elements/form/form.component';
import { FormSubmitComponent } from './elements/form-submit/form-submit.component';
import { FormModelGroupComponent } from './elements/form-model-group/form-model-group.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './custom-validators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartamentQuantityValidatorDirective } from './custom-validators/synchronous/ex2/directives/departament-quantity-validator.directive';
import { UserNameValidatorDirective } from './custom-validators/asynchronous/directives/user-name-validator.directive';
import { AsyncCustomValidatorFormComponent } from './custom-validators/asynchronous/async-custom-validator-form/async-custom-validator-form.component';
import { StandaloneControlFormComponent } from './standalone-control-form/standalone-control-form.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    FormSubmitComponent,
    FormModelGroupComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartamentQuantityValidatorDirective,
    UserNameValidatorDirective,
    AsyncCustomValidatorFormComponent,
    StandaloneControlFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
