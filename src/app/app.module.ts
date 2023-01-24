import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoElementComponent } from './demo-element/demo-element.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './patterns/proxy';

@NgModule({
  declarations: [
    AppComponent,
    DemoElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: Interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
