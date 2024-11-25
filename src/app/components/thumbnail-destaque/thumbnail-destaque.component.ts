import { Component,Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-thumbnail-destaque',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './thumbnail-destaque.component.html',
  styleUrl: './thumbnail-destaque.component.css'
})
export class ThumbnailDestaqueComponent {
  @Input() noticia: any;
}
