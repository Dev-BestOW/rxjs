const { Observable, filter, take, map } = require("rxjs");

const observer = {
  next:(v) => console.log(v),
  complete: () => console.log('complete')
}

const interval = (delayTime) => {
  return new Observable((subscriber) => {
    let i = 0
    const intervalFunc = setInterval(() => {
      subscriber.next(i);
      i++;
    }, delayTime);

    return function unsubscribe () {
      clearInterval(intervalFunc)
    }
  })
}

interval(500)
  .pipe(
    filter(n => n % 2 === 0),
    take(5),
    map(n => n ** 2),
  )
  .subscribe(observer)