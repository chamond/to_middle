import { AfterViewInit, Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { RxJSExamples } from './rxjs';
import { interval, Observable } from 'rxjs';
import { webSocketExample } from './websocket';
import WorkerPerson from './patterns/prototype';
import { SuperCar } from './patterns/decorator';
import { IPhone } from './patterns/composite';
import { commandApplication } from './patterns/command';
import { strategyExample } from './patterns/strategy';
import { observableExample } from './patterns/observable';
import Calculator from './patterns/prototype';
import { builderExample } from './patterns/builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {

  public title: string = 'demo';
  public asyncValue: Observable<number> = interval(1000);

  @ViewChild('jsAnimationElement') public jsAnimationElement: ElementRef;

  constructor(
    private injector: Injector
  ) {}

  public ngOnInit(): void {
    // const rxJSExamples = new RxJSExamples(this.injector);
    // const socketExample = new WebSocketExample();
    const calculator1 = new Calculator('scientifical');
    calculator1.plus(5);
    console.log(calculator1.multi(10));
    const calculator2 = calculator1.clone();
    console.log(calculator2.divide(3));
    console.log(calculator1.multi(2));
    // const bmw = new SuperCar('bmw', 'x5');
    // bmw.wroom();
    // bmw.superWroom();
    // console.log(new IPhone().getPrice());
    // commandApplication();
    // strategyExample();
    // observableExample();
    builderExample();
    webSocketExample();
    // console.log(worker1, worker2);
  }

  public ngAfterViewInit(): void {
    const element = this.jsAnimationElement.nativeElement;
    let left = 16;
    let direction = 0;
    requestAnimationFrame(function animate(): number {
      if (left > 360) {
        direction = 1;
      } else if (left === 16) {
        direction = 0;
      }
      left += (direction ? -1 : 1);
      element.style.left = left + 'px';
      return requestAnimationFrame(animate);
    });
  }

  public onFileLoad(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (!target.files?.length) { return; }
    const file = target.files[0] as Blob;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  }
}
