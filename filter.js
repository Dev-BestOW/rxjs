const { Observable, interval, take } = require("rxjs");

const filter = (callback) => (observable) => 
  new Observable((subscriber) => {
    observable.subscribe({
      next: (value) => {
        if(callback(value)) {
          subscriber.next(value);
        }
      },
      error: (err) => {
        subscriber.error(err);
      },
      complete:() => {
        subscriber.complete();
      }
    })
  })


const observer = {
  next:(v) => console.log(v),
  complete: () => console.log('complete'),
  error: () => console.log('error')
}

interval(500)
  .pipe(
    filter(n => n % 2 === 0),
    take(5),
  )
  .subscribe(observer)