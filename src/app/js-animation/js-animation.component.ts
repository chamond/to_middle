import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-js-animation',
  templateUrl: './js-animation.component.html',
  styleUrls: ['./js-animation.component.sass']
})
export class JsAnimationComponent implements AfterViewInit {

  @ViewChild('jsAnimationElement') public jsAnimationElement: ElementRef;

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

}
