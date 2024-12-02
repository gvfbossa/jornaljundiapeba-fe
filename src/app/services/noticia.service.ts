import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagedResponse } from '../paged-response.model';
import { Noticia } from '../noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private apiUrl = 'http://localhost:8080/api/noticias/todas'; 
  noticias = [];
  page: number = 0
  size: number = 16

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<PagedResponse<Noticia>> {
    return this.http.get<PagedResponse<any>>(`${this.apiUrl}?page=${this.page}&size=${this.size}`).pipe(
      map((response: PagedResponse<any>) => {
        return {
          ...response,
          content: response.content.map((item: any) => ({
            id: item.id,
            type: item.type,
            category: item.category,
            headline: item.headline,
            subtitle: item.subtitle,
            summary: item.summary,
            image: item.imagePath, // Mapeando para 'image'
            fullText: item.fullText, // Mapeando para 'fullText'
            date: new Date(item.date), // Convertendo para Date
          })),
        };
      })
    );
  }

}
