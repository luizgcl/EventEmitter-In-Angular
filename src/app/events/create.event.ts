import Swal, { SweetAlertOptions } from "sweetalert2";
import { Event } from "./event.abstract";

/*
  Example of Event on register client.

  Exemplo de evento ao registrar cliente.
 */
export class ClientRegiserEvent extends Event {

  /*
    I'm using Swal library, so I'm create a popup in constructor, you can create a function or pass parameters of something that you can to create on event when is called.

    Estou usando a biblioteca Swal, então estou criando um popup no construtor, você pode criar uma função ou passar parâmetros de algo que você pode criar no evento quando é chamado.
   */
  constructor() {
    super({
      title: 'Cadastrado com sucesso!',
      content: 'O cliente foi cadastrado perfeitamente.',
      showConfirmButton: false,
      icon: 'success',
      timer: (1.5 * 1000),
    });
  }

  getParams() {
    return this.params;
  }

  /*
    This function is called when event is emitted.

    Essa função é chamada quando o evento é emitido.
   */
  override onListening(): void {

    this.params as SweetAlertOptions;

    const swal = Swal.mixin(this.params);
    swal.fire();
  }

  /*
    This function can be called in case of errors or something unexpected from the event.

    Esta função pode ser chamada em caso de erros ou algo inesperado do evento.
  */
  override callWhenErrorAppears(): void {
    this.params = {
      title: 'Erro ao cadastrar cliente!',
      content: 'Algo inesperado ocorreu ao cadastrar o cliente.',
      showConfirmButton: false,
      icon: 'error',
      timer: (1.5 * 1000),
    };
    this.call();
  }

}
