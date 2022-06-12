const { Observable, filter, take } = require("rxjs");

const range = (start, count) => 
  new Observable((subscriber) => {
    if (count === 0) {
      subscriber.complete();
    }

    let min = count === undefined ? 0 : start;
    let max = count === undefined ? start + 1 : start + count;

    for(let i = min; i < max; i++) {
      subscriber.next(i);

      if(i === max - 1) {
        subscriber.complete();
      }
    }
  })


range(10, 3)
  .pipe(
    // filter(n => n % 2 === 0),
    // take(5),
  )
  .subscribe(console.log)
 