import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export class EventBus {

  private bus = new Subject<{ type: string, payload: any }>();


  public broadcast(type: string, payload?: any) {
    this.bus.next({type, payload});
  }

  public listen(type: string): Observable<any> {
    return this.bus
      .asObservable()
      .pipe(
        filter(res => res.type === type),
        map(res => res.payload)
      );
  }

}
