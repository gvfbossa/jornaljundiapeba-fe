import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service'; // Importe o serviço de notícias corretamente
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThumbnailDestaqueComponent } from "../thumbnail-destaque/thumbnail-destaque.component";
import { ThumbnailNoticiaComponent } from "../thumbnail-noticia/thumbnail-noticia.component";
import { AddsComponent } from "../adds/adds.component";  // Para navegação

@Component({
  selector: 'app-noticia-categoria',
  standalone: true,
  imports: [
    CommonModule,
    ThumbnailDestaqueComponent,
    ThumbnailNoticiaComponent,
    AddsComponent
],
  templateUrl: './noticia-categoria.component.html',
  styleUrls: ['./noticia-categoria.component.css']
})
export class NoticiaCategoriaComponent implements OnInit {

  categoria: string = '';
  noticiasFiltradas: any[] = [];
  categoriaFormatada: { [key: string]: string } = {
    geral: 'Geral',
    cultura: 'Cultura',
    politica: 'Política',
    policial: 'Policial',
    esportes: 'Esportes',
    agenda: 'Agenda',
    emprego: 'Emprego',
    achadosperdidos: 'Achados e Perdidos',
    anuncios: 'Anúncios',
    reclamacoes: 'Reclamações',
    
  };

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService, // Supondo que você tenha o serviço de notícias
    private router: Router  // Injetando o Router para navegação
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['type']; // Pegando o tipo de categoria da URL
      this.filtrarNoticias();
    });
  }

  filtrarNoticias(): void {
    const todasNoticias = this.noticiaService.getNoticias();
    this.noticiasFiltradas = todasNoticias.filter(noticia => noticia.category.toLowerCase() === this.categoria.toLowerCase());
  }

  goToNoticia(id: string): void {
    // Navegando para a página da notícia, se clicado
    this.router.navigate([`/noticia/${id}`]); // Altere para a rota correta de cada notícia
  }

  getNomeCategoria(): string {
    return this.categoriaFormatada[this.categoria.toLowerCase()] || this.categoria;
  }
}
