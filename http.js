const { Observable } = require("rxjs");

const http = (api) => 
  new Observable(async (subscriber) => {    
    try {
      const data = await api();
      subscriber.next(data);
      subscriber.complete();
    } catch (e) {
      subscriber.error(e)
    }    
  })
