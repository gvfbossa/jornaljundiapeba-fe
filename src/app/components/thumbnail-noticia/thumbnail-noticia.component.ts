import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-thumbnail-noticia',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './thumbnail-noticia.component.html',
  styleUrl: './thumbnail-noticia.component.css'
})
export class ThumbnailNoticiaComponent {
  @Input() noticia: any;
}
