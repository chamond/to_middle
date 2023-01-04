import { Component, OnInit } from '@angular/core';
import { GenerativeOperatorsComponent } from "./rxjs/generative-operators/generative-operators.component";
// @ts-ignore
import { jsAnimationsInit } from './js-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'training';

  public ngOnInit(): void {
    const generative = new GenerativeOperatorsComponent();
    generative.ngOnInit();
    jsAnimationsInit();
  }
}
