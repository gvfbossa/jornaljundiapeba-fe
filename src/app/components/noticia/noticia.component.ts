import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common'
import { DatePipe } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AddsComponent } from "../adds/adds.component"
import { Noticia } from '../../noticia.model'

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

  noticia!: Noticia
  highlights: any[] = []
  commonNews: any[] = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.noticia = history.state?.noticia

    if (!this.noticia) {
      console.error("Notícia não encontrada no estado")
      
      const id = this.route.snapshot.paramMap.get('id')
      if (id) {
        this.noticia = this.findNoticiaById(id)
        console.log("Notícia encontrada pela ID da rota: ", this.noticia)
      }
    }

    if (!this.noticia) {
      console.error("Notícia não encontrada!")
    }
  }

  findNoticiaById(id: string | null): any {
    if (id) {
      console.log('Buscando notícia pelo ID:', id)
      return [...this.highlights, ...this.commonNews]
        .find(noticia => noticia.id.toString() === id)
    }
    return null
  }
}
