const { Observable, map, filter } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
})

const observer1 = {
  next: (v) => console.log(v),
  complete:() => console.log('observer1 complete')
}

const observer2 = {
  next: (v) => console.log(v),
  complete:() => console.log('observer2 complete')
}

observable.subscribe(observer1)
observable.subscribe(observer2)
