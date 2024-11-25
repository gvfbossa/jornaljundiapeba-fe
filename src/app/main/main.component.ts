import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThumbnailDestaqueComponent } from '../components/thumbnail-destaque/thumbnail-destaque.component';
import { ThumbnailNoticiaComponent } from '../components/thumbnail-noticia/thumbnail-noticia.component';
import { NoticiaService } from '../services/noticia.service';
import { Router } from '@angular/router';
import { GraficaComponent } from "../components/grafica/grafica.component";
import { AddsComponent } from "../components/adds/adds.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ThumbnailDestaqueComponent,
    ThumbnailNoticiaComponent,
    GraficaComponent,
    AddsComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {

  highlights: any = []
  commonNews: any = []

  constructor(private router: Router, private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.highlights = this.noticiaService.getNoticias().filter(news => {
      return news.type === 'highlight'
    })
    this.commonNews = this.noticiaService.getNoticias().filter(news => {
      return news.type === 'common'
    })
  }

  goToNoticia(id: number) {
    let noticia = this.noticiaService.getNoticias().find(news => news.id === id);
    if (noticia) {
      this.router.navigate(['/noticia', id], { state: { noticia } });
    }
  }

}
