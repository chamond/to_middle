import { distinct, from, fromEvent, interval, of, skipUntil, takeUntil } from 'rxjs';

export const rxjsInit = () => {

  const takeUntilSource = interval(1000);
  const skipUntilSource = interval(1000);
  const distinctSource = from([1, 2, 3, 1, 2, 3, 4]);
  const click = fromEvent(document, 'click');

  takeUntilSource.pipe(
    takeUntil(click)
  ).subscribe(counter => {
    console.log(`counting before click: ${ counter }`);
  });

  skipUntilSource.pipe(
    skipUntil(click)
  ).subscribe(counter => {
    console.log(`counting after click: ${ counter }`);
  });

  distinctSource.pipe(
    distinct()
  ).subscribe(value => {
    console.log(value);
  });

  click.subscribe(() => {
    console.log('click');
  });
};
