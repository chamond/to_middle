import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerativeOperatorsComponent } from './rxjs/generative-operators/generative-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerativeOperatorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
