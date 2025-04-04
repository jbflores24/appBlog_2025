import { Component } from '@angular/core';
import { UserI } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  users : any[] = [];
  constructor(private _us : UsersService) {
    this._us.getUsers().subscribe(
      (resp : any) => {
        this.users = resp['data'];
        console.log(this.users);
      }
    );
  }
}
