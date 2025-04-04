import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/users/registro/registro.component';
import { ListadoComponent } from './pages/users/listado/listado.component';
import { GestionUsuariosComponent } from './pages/users/gestion-usuarios/gestion-usuarios.component';
import { ListadoArticlesComponent } from './pages/articles/listado-articles/listado-articles.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path : 'registro',
    component: RegistroComponent
  },
  {
    path: 'listadoUsuarios',
    component: ListadoComponent
  },
  {
    path: 'gestionUsuario/:id',
    component: GestionUsuariosComponent
  },
  {
    path:'listadoArticulos',
    component : ListadoArticlesComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
