import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddsComponent } from "../adds/adds.component";

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    RouterModule,
    AddsComponent
],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})

export class NoticiaComponent implements OnInit {

  noticia: any; // A notícia selecionada
  highlights: any[] = []; // Array de notícias de destaque
  commonNews: any[] = [];  // Array de notícias comuns

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Tentando acessar o estado diretamente
    this.noticia = history.state?.noticia;

    if (!this.noticia) {
      console.error("Notícia não encontrada no estado");
      
      // Caso a notícia não venha pelo estado, tentamos pegar pelo ID da rota
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.noticia = this.findNoticiaById(id);
        console.log("Notícia encontrada pela ID da rota: ", this.noticia);
      }
    }

    // Verifique se encontrou a notícia
    if (!this.noticia) {
      console.error("Notícia não encontrada!");
    }
  }

  // Função para procurar a notícia pelo id
  findNoticiaById(id: string | null): any {
    if (id) {
      console.log('Buscando notícia pelo ID:', id);
      // Aqui, você pode buscar nas suas listas de notícias
      return [...this.highlights, ...this.commonNews]
        .find(noticia => noticia.id.toString() === id);
    }
    return null;
  }
}
