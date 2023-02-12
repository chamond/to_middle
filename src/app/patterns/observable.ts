type NullableType<T> = T | null;

class CustomSubscription<T> {
  private unsubscriber: () => void;
  private subscriber: (value: T) => void;
  public key: string;

  constructor(key: string, subscriber: (value: T) => void, unsubscriber: () => void) {
    this.key = key;
    this.subscriber = subscriber;
    this.unsubscriber = unsubscriber;
  }

  public add(value: T): void {
    this.subscriber(value);
  }

  public unsubscribe(): void {
    this.unsubscriber();
  }
}

class CustomSubject<T> {
  private value: NullableType<T> = null;
  private subscriptions: CustomSubscription<NullableType<T>>[] = [];

  constructor(initialValue: NullableType<T>) {
    this.value = initialValue;
  }

  public next(value: NullableType<T>): void {
    this.value = value;
    this.subscriptions.forEach(sub => {
      sub.add(value);
    });
  }

  public subscribe(subscriber: (values: NullableType<T>) => void): CustomSubscription<T> {
    const subscriptionKey = this.subscriptions.length + 'sub';
    const subscription = new CustomSubscription<NullableType<T>>(subscriptionKey, subscriber, () => {
      this.subscriptions = this.subscriptions.filter(sub => sub.key !== subscriptionKey);
    });
    this.subscriptions.push(subscription);
    subscription.add(this.value);
    return subscription;
  }
}

export const observableExample = () => {
  const obs = new CustomSubject<number>(null);
  const sub1 = obs.subscribe(value => {
    console.log(value);
  });
  const sub2 = obs.subscribe(value => {
    console.log(value);
  });
  // console.log(sub2);
  sub1.unsubscribe();
  sub2.unsubscribe();
  obs.next(3);
  obs.subscribe(value => {
    console.log(value);
  });
};
