const { Observable } = require("rxjs");

const range = (first, second) => 
  new Observable((subscriber) => {
    let min = first;
    let max = first >= second ? first + second : second + 1;

    for(let i = min; i < max; i++) {
      subscriber.next(i);

      if(i === max - 1) {
        subscriber.complete();
      }
    }
  })
