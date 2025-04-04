import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  user = new User(0,'','','',2);
  confirmar_password = "";
  constructor( private _us: UsersService,
              private r : Router
  ){}

  registro(){
    if (this.user.password != this.confirmar_password) {
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    this._us.postUser(this.user).subscribe(
      resp => {
        Swal.fire({
          title: 'Exito!',
          text: 'Usuario registrado',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.r.navigate(['/home']);
      }
    );
  }
}
