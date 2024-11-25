import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NoticiaComponent } from './components/noticia/noticia.component'; 
import { SobreComponent } from './components/sobre/sobre.component';
import { NoticiaCategoriaComponent } from './components/noticia-categoria/noticia-categoria.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, // Rota para o componente principal
    { path: 'noticia/:id', component: NoticiaComponent }, // Rota para exibir uma notícia completa
    { path: 'sobre', component: SobreComponent }, // Rota para o componente principal
    { path: 'noticia-categoria/:type', component: NoticiaCategoriaComponent },
];