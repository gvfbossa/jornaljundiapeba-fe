import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ThumbnailDestaqueComponent } from '../components/thumbnail-destaque/thumbnail-destaque.component'
import { ThumbnailNoticiaComponent } from '../components/thumbnail-noticia/thumbnail-noticia.component'
import { NoticiaService } from '../services/noticia.service'
import { Router } from '@angular/router'
import { GraficaComponent } from "../components/grafica/grafica.component"
import { AddsComponent } from "../components/adds/adds.component"
import { Noticia } from '../noticia.model'

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

  highlights: Noticia[] = []
  commonNews: Noticia[] = []

  @ViewChild('highlightScroll', { static: true }) highlightScroll!: ElementRef
  indicatorPosition = 0

  constructor(private router: Router, private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.getNoticias().subscribe({
      next: (response) => {
        const noticias = response.content
  
        if (Array.isArray(noticias)) {
          this.highlights = noticias
            .filter((news) => news.type === 'HIGHLIGHT')
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          
          this.commonNews = noticias
            .filter((news) => news.type === 'COMMON')
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        }
      },
      error: (err) => {
        console.error('Erro ao buscar notícias:', err)
      },
    })
    
    setTimeout(() => {
      this.highlightScroll.nativeElement.scrollLeft = 1
      this.updateIndicatorPosition()
    }, 0)

    this.highlightScroll.nativeElement.addEventListener('scroll', () => {
      this.updateIndicatorPosition()
    })
  }

  updateIndicatorPosition() {
    const scrollContainer = this.highlightScroll.nativeElement
    this.indicatorPosition = scrollContainer.scrollLeft + scrollContainer.clientWidth - 40
  }

  scrollRight() {
    const scrollContainer = this.highlightScroll.nativeElement
    scrollContainer.scrollBy({
        left: 1000,
        behavior: 'smooth'
    }) 
  }



  goToNoticia(id: number): void {
    let noticia = this.highlights.concat(this.commonNews).find((news: Noticia) => news.id === id)
    if (noticia) {
      this.router.navigate(['/noticia', id], { state: { noticia } })
    }
  }

}
