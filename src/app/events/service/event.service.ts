import { EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { Event } from "../event.abstract";

/*
  This is events service, so this I'm using EventEmitter of Angular to call and listen events.

  Aqui é o serviço dos eventos, então estou usando o EventEmitter do Angular para chamar e ouvir os eventos.
*/
export class EventService {

  static eventEmitter = new EventEmitter();

  /*
    Emit an event using parameters passed in constructor of event class.

    Emite um evento usando os parametros passados no construtor da classe do evento.
   */
  static emitEvent(event: Event) {
    this.eventEmitter.emit(event.getParams());
  }

  /*
    Listen when event is called and execute designed function for this.

    Escuta quando o evento é chamado e executa a função projetada para ele.
  */
  static listeningEvent(event: Event): Subscription {
    return this.eventEmitter.subscribe(() => {
      event.onListening();
    });
  }

}
