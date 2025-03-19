import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu : any[] = [];
  constructor( private _ms : MenuService) {
    this._ms.getMenu().subscribe(
      (resp:any) => {
        this.menu = resp;
      }
    );
  }
}
