import Swal from "sweetalert2";

export class Alert {
  public static alert_success(mensaje: string) {
    Swal.fire({
      title: 'Exito',
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  public static alert_error(mensaje: string) {
    Swal.fire({
      title: 'Error',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}
