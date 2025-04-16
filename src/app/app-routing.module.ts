import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/users/registro/registro.component';
import { ListadoComponent } from './pages/users/listado/listado.component';
import { GestionUsuariosComponent } from './pages/users/gestion-usuarios/gestion-usuarios.component';
import { ListadoArticlesComponent } from './pages/articles/listado-articles/listado-articles.component';
import { GestionArticleComponent } from './pages/articles/gestion-article/gestion-article.component';
import { ListadoComentariosComponent } from './pages/comentarios/listado-comentarios/listado-comentarios.component';
import { GestionComentarioComponent } from './pages/comentarios/gestion-comentario/gestion-comentario.component';
import { DetalleComponent } from './pages/articles/detalle/detalle.component';

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
    path: 'gestionArticle/:op/:id',
    component: GestionArticleComponent
  },
  {
    path : 'listadoComentarios',
    component: ListadoComentariosComponent
  },
  {
    path: 'gestionComentario/:id',
    component: GestionComentarioComponent
  },
  {
    path: 'detalleArticulo/:id',
    component: DetalleComponent
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
