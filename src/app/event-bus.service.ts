import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
               .filter(args => args.type === eventType)
               .map(args => args.data);
  }

}

export interface EventBusArgs {
  type: string;
  data: any;
}
