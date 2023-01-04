import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { rxjsInit } from './rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {

  public title: string = 'demo';

  @ViewChild('jsAnimationElement') public jsAnimationElement: ElementRef;

  public ngOnInit(): void {
    rxjsInit();
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
