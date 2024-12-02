import { Component, OnInit, ViewChild } from '@angular/core';
import { Noticia } from '../../noticia.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PagedResponse } from '../../paged-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-noticias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './gerenciar-noticias.component.html',
  styleUrl: './gerenciar-noticias.component.css'
})
export class GerenciarNoticiasComponent implements OnInit {
  @ViewChild('noticiaForm') noticiaForm!: NgForm; // Referência do formulário
  apiBaseUrl: string = 'http://localhost:8080'
  noticia: Noticia = new Noticia();
  imageUrl: string = ''; // Armazenará o link da imagem após o upload
  isSubmitting = false;
  categorias: any = []
  types: any;
  noticias: Noticia[] = []; // Lista de notícias


  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const authHeader = localStorage.getItem('authHeader');
    if (!authHeader) {
      alert('Por favor, faça login primeiro.');
      this.router.navigate(['/login']);
    }

  this.http.get(`${this.apiBaseUrl}/api/categorias`).subscribe(
    (response: any) => {
      this.categorias = response; // Supondo que o backend retorna um array de categorias
    },
    (error: any) => {
      console.error('Erro ao carregar categorias:', error);
      alert('Não foi possível carregar as categorias.');
    }
  );

  this.http.get(`${this.apiBaseUrl}/api/tipos`).subscribe(
    (response: any) => {
      this.types = response; // Supondo que o backend retorna um array de categorias
    },
    (error: any) => {
      console.error('Erro ao carregar tipos:', error);
      alert('Não foi possível carregar os tipos.');
    }
  );

  this.loadNoticias();
}

loadNoticias(page: number = 0, size: number = 10): void {
  this.http.get<PagedResponse<Noticia>>(`${this.apiBaseUrl}/api/noticias/todas?page=${page}&size=${size}`).subscribe(
    (response) => {
      this.noticias = response.content; // Supondo que o backend retorna a lista de notícias
    },
    (error) => {
      console.error('Erro ao carregar notícias:', error);
      alert('Não foi possível carregar as notícias.');
    }
  );
}

editNoticia(noticia: Noticia): void {
  console.log('Noticia selecionada:', noticia); // Verifique o que está sendo passado para o método
  this.noticia = { ...noticia }; // Preenche o formulário com os dados da notícia selecionada
  if (this.noticiaForm) {
    // Usar setValue somente para atualizar os campos diretamente
    this.noticiaForm.form.patchValue({
      type: this.noticia.type,
      category: this.noticia.category,
      headline: this.noticia.headline,
      subtitle: this.noticia.subtitle,
      summary: this.noticia.summary,
      fullText: this.noticia.fullText
    });
  }
}

onDelete(): void {
  if (confirm('Tem certeza que deseja apagar esta notícia?')) {
    this.isSubmitting = true;

    // Credenciais (substitua por método dinâmico se necessário)
    const username = 'admin';
    const password = 'password';
    const authHeader = localStorage.getItem('authHeader');

    const headers = { Authorization: 'Basic ' + authHeader };

    this.http.delete(`${this.apiBaseUrl}/api/noticias/${this.noticia.id}`, { headers }).subscribe(
      (response: any) => {
        alert('Notícia apagada com sucesso!');
        this.loadNoticias(); // Atualiza a lista de notícias
        this.noticia = new Noticia(); // Reseta o formulário
        this.isSubmitting = false;
      },
      (error: any) => {
        console.error('Erro ao apagar notícia:', error);
        alert('Erro ao apagar a notícia.');
        this.isSubmitting = false;
      }
    );
  }
}


onClear() {
  this.noticia = new Noticia()
}


  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) { // Verifica se o arquivo é uma imagem
      this.noticia.image = file;
    } else {
      alert('Por favor, selecione um arquivo de imagem válido.');
      event.target.value = ''; // Reseta o input
    }
  }

  onSubmit(): void {
    if (!this.noticiaForm.valid || this.isSubmitting) return;
    const authHeader = localStorage.getItem('authHeader');
  
    const headers = { Authorization: authHeader !== null ? authHeader : '' };

    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('type', this.noticia.type);
    formData.append('category', this.noticia.category);
    formData.append('headline', this.noticia.headline);
    formData.append('subtitle', this.noticia.subtitle);
    formData.append('summary', this.noticia.summary);
    formData.append('fullText', this.noticia.fullText);
    if (this.noticia.image) {
      formData.append('image', this.noticia.image);
    }
  
    const requestUrl = this.noticia.id 
      ? `${this.apiBaseUrl}/api/noticias/cadastro/${this.noticia.id}`  // PUT para edição
      : `${this.apiBaseUrl}/api/noticias/cadastro`;  // POST para cadastro
  
    const requestMethod = this.noticia.id ? 'put' : 'post'; // Escolhe entre PUT ou POST
  
    this.http[requestMethod](requestUrl, formData, { headers }
    ).subscribe(
      (response: any) => {
        alert(this.noticia.id ? 'Notícia atualizada com sucesso!' : 'Notícia cadastrada com sucesso!');
        this.isSubmitting = false;
        this.noticia = new Noticia(); // Reseta o formulário
        this.loadNoticias(); // Atualiza a lista de notícias
      },
      (error: any) => {
        console.error(error);
        alert('Erro ao salvar a notícia.');
        this.isSubmitting = false;
      }
    );
  }
  

}