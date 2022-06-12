const {Observable, of} = require("rxjs")

function delay(delayInMillis) {
  return (observable) =>
    new Observable((subscriber) => {

      const allTimerIDs = new Set();
      let hasCompleted = false;
      const subscription = observable.subscribe({
        next(value) {
          const timerID = setTimeout(() => {
            subscriber.next(value);
            
            allTimerIDs.delete(timerID);
            
            if (hasCompleted && allTimerIDs.size === 0) {
              subscriber.complete();
            }
          }, delayInMillis);
 
          allTimerIDs.add(timerID);
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          hasCompleted = true;
          if (allTimerIDs.size === 0) {
            subscriber.complete();
          }
        },
      });
      return () => {
        subscription.unsubscribe();
      
        for (const timerID of allTimerIDs) {
          clearTimeout(timerID);
        }
      };
    });
}

of(1, 2, 3).pipe(delay(1000)).subscribe(console.log);