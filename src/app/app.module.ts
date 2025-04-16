import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/users/registro/registro.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { ArticlesComponent } from './pages/home/articles/articles.component';
import { ComponentesModule } from './componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './pages/users/listado/listado.component';
import { GestionUsuariosComponent } from './pages/users/gestion-usuarios/gestion-usuarios.component';
import { ListadoArticlesComponent } from './pages/articles/listado-articles/listado-articles.component';
import { GestionArticleComponent } from './pages/articles/gestion-article/gestion-article.component';
import { ListadoComentariosComponent } from './pages/comentarios/listado-comentarios/listado-comentarios.component';
import { GestionComentarioComponent } from './pages/comentarios/gestion-comentario/gestion-comentario.component';
import { DetalleComponent } from './pages/articles/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    SliderComponent,
    ArticlesComponent,
    ListadoComponent,
    GestionUsuariosComponent,
    ListadoArticlesComponent,
    GestionArticleComponent,
    ListadoComentariosComponent,
    GestionComentarioComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
