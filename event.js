const { Observable } = require("rxjs");

const event = (target, event) => 
  new Observable((subscriber) => {    
    switch (event) {
      case 'click':
        target.onclick((e) => subscriber.next(e))
        break;
      case 'mousemove':
        target.onmousemove(e => subscriber.next(e))
      default:
        subscriber.error('empty event');
        subscriber.complete();
        break;
    }
  })