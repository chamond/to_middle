import {
  AsyncSubject,
  bufferWhen,
  catchError, ConnectableObservable,
  distinct,
  EMPTY,
  from,
  fromEvent, groupBy,
  interval, mergeMap, of, publish, reduce, retry, scan,
  skipUntil, Subject, switchMap,
  takeUntil, tap, throwError, timer, toArray,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

export class RxJSExamples {

  private http: HttpClient;

  constructor(
    private injector: Injector
  ) {
    this.http = injector.get(HttpClient);

    const takeUntilSource = interval(1000);
    const skipUntilSource = interval(1000);
    const distinctSource = from([1, 2, 3, 1, 2, 3, 4]);
    const click = fromEvent(document, 'click');

    takeUntilSource.pipe(
      takeUntil(click)
    ).subscribe(counter => {
      // console.log(`counting before click: ${ counter }`);
    });

    skipUntilSource.pipe(
      skipUntil(click)
    ).subscribe(counter => {
      // console.log(`counting after click: ${ counter }`);
    });

    distinctSource.pipe(
      distinct()
    ).subscribe(value => {
      // console.log(value);
    });

    click.subscribe(() => {
      // console.log('click');
    });

    // ------------------------------------------------------------------- //

    // catchError
    this.http.get('https://unknown-page.ru').pipe(
      retry(1),
      catchError((error) => {
        return throwError(error);
      }),
    ).subscribe();

    // ------------------------------------------------------------------- //

    const scanSource = of(1, 2, 3);
    scanSource.pipe(
      scan((acc, c) => acc + c)
    ).subscribe(result => {
      // console.log(`scan result: ${ result }`);
    });

    scanSource.pipe(
      reduce((acc, c) => acc + c, 0)
    ).subscribe(result => {
      // console.log(`reduce result: ${ result }`);
    });

    const propertiesSource = from([
      { houseId: 10, number: '1' },
      { houseId: 10, number: '2' },
      { houseId: 15, number: '1' },
      { houseId: 20, number: '2' }
    ]);
    propertiesSource.pipe(
      groupBy((property) => property.houseId), // вернет сгруппированный Observable
      mergeMap(group => group.pipe(toArray()))
    ).subscribe(groups => {
      // console.log(`groupBy result: `, groups);
    });

    // Копит буфер, пока closingSelector не эмитнет значение
    click.pipe(
      bufferWhen(() => interval(1000 + Math.random() * 4000))
    ).subscribe(x => {
      // console.log(`buffer when: ${ x }`);
    });

    // ------------------------------------------------------------------- //

    // cold to hot
    const coldSource = interval(1000).pipe(
      tap((counter) => {
        // console.log(counter);
      }),
      publish(),
    ) as ConnectableObservable<number>;
    coldSource.connect();

    // timer(1000).pipe(
    //   switchMap(() => {
    //     return coldSource;
    //   })
    // ).subscribe(counter => {
    //   console.log(`now hot source: ${ counter }`);
    // });

    const asyncSubject = new AsyncSubject();
    asyncSubject.subscribe(value => {
      console.log(`async value: ${ value }`);
    });
    asyncSubject.next(100);
    asyncSubject.subscribe(value => {
      console.log(`async value: ${ value }`);
    });
    asyncSubject.next(200);
    asyncSubject.complete();

  }
}
