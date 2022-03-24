import { EventService } from './service/event.service';

/*
  This is events abstract class. It's responsible for some event functions and is a extension for event that facility to create a custom event.

  Essa é uma classe abstrata de eventos. Ela é responsável por algumas funções dos eventos e é uma extensão para eventos que facilita a criação de eventos customizados.
*/
export abstract class Event implements IEvent {

  params?: any;

  constructor(params?: any) {
    this.params = params;
  }

  onListening(): void {}
  callWhenErrorAppears(): void {}

  abstract getParams():any;

  call(): void {
    EventService.emitEvent(this)
  }

  listen(): void {
    EventService.listeningEvent(this)
  }
}

/*
  This is interface of event functions.
 */
interface IEvent {

  onListening():void;
  call():void;
  listen():void;
  callWhenErrorAppears():void;

}
