import { Component, OnInit } from '@angular/core';
import { GenerativeOperatorsComponent } from './rxjs/generative-operators/generative-operators.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title: string = 'demo';

  public ngOnInit(): void {
    const generative = new GenerativeOperatorsComponent();
    generative.ngOnInit();
  }
}
