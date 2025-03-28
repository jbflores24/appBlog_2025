import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/users/registro/registro.component';

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
