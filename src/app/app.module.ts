import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerativeOperatorsComponent } from './rxjs/generative-operators/generative-operators.component';
import { DemoElementComponent } from './demo-element/demo-element.component';
import { JsAnimationComponent } from './js-animation/js-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerativeOperatorsComponent,
    DemoElementComponent,
    JsAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
