import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo-element',
  templateUrl: './demo-element.component.html',
  styleUrls: ['./demo-element.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DemoElementComponent implements OnInit {

  @Input() public headerText: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
