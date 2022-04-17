import { Component, OnInit } from '@angular/core';
import { GenerativeOperatorsComponent } from "./rxjs/generative-operators/generative-operators.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'polygon';

  public ngOnInit(): void {
    const generative = new GenerativeOperatorsComponent();
    generative.ngOnInit();
  }
}
