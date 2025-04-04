import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent {
  id : any;
  user  = new User(0, '', '', '', 0);
  constructor(
    private ar : ActivatedRoute,
    private _us : UsersService,
    private r : Router
  ) {
    this.id = this.ar.snapshot.paramMap.get('id');
    this._us.getUser(this.id).subscribe(
      (resp : any) => {
        this.user = resp['data'][0];
      }
    );
  }

  alert_success(mensaje:string){
    Swal.fire({
      title: 'Exito!',
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }

  alert_error(mensaje:string){
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

  editarUsuario(){
    this._us.putUser(this.user).subscribe(
      (resp : any) => {
        this.alert_success('Usuario editado');
        this.r.navigate(['/listadoUsuarios']);
      },
      err => {
        this.alert_error('Error al editar el usuario');
      }
    );
  }

  borrarUsuario(){
    this._us.deleteUser(this.user.id).subscribe(
      (resp:any) => {
        this.alert_success('Usuario eliminado');
        this.r.navigate(['/listadoUsuarios']);
      },
      err => {
        this.alert_error('Error al eliminar el usuario');
      }
    );
  }
}
