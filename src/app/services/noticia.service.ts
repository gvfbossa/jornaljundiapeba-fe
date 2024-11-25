import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor() { }

  noticias = [
    {
      id: 1,
      type: 'highlight',
      category: 'cultura',
      headline: 'Grande Evento em Mogi das Cruzes',
      subtitle: 'O maior evento do ano atrai milhares de pessoas ao centro da cidade.',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      image: 'assets/images/highlight1.jpg',
      date: '2024-11-01', // Data fictícia
      fulltext: 'O evento “Grande Evento em Mogi das Cruzes” atraiu uma enorme quantidade de visitantes ao centro da cidade. Durante o fim de semana, centenas de barracas de comida, apresentações de bandas locais e outras atrações estiveram presentes, criando uma atmosfera vibrante e única. O evento contou com a presença de autoridades locais, que destacaram a importância da cultura e do entretenimento para a economia da cidade. Mesmo com o aumento do fluxo de pessoas, a segurança foi reforçada, garantindo tranquilidade para todos os presentes. Este evento certamente ficará marcado na memória de todos os que participaram, mostrando a força da comunidade mogiana no cenário regional.',
    },
    {
      id: 2,
      type: 'highlight',
      category: 'politica',
      headline: 'Nova Lei de Política Urbana',
      subtitle: 'Alterações nas regras de urbanização trazem impacto significativo.',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      image: 'assets/images/highlight2.jpg',
      date: '2024-10-28', // Data fictícia
      fulltext: 'A nova Lei de Política Urbana, sancionada recentemente, trouxe diversas modificações nas normas de urbanização da cidade. A principal mudança envolve a ampliação de áreas destinadas à construção de empreendimentos comerciais e residenciais em zonas periféricas, o que promete trazer um novo fôlego econômico para regiões antes negligenciadas. No entanto, alguns especialistas alertam que a mudança pode impactar a infraestrutura local, já que muitas dessas áreas não possuem a infraestrutura necessária para suportar o crescimento populacional. A aprovação da lei foi um tema controverso entre os moradores, mas foi bem recebida pelos empresários locais, que acreditam em uma melhora significativa no mercado imobiliário.',
    },
    {
      id: 3,
      type: 'common',
      category: 'geral',
      headline: 'Abertura de Novo Comércio',
      subtitle: 'Um novo restaurante abre no bairro e promete movimentar a região.',
      summary: '',
      image: 'assets/images/news1.jpg',
      date: '2024-11-02', // Data fictícia
      fulltext: 'A inauguração do novo restaurante “Sabor & Tradição” promete agitar a região do centro. Localizado na Rua das Flores, o restaurante oferece um cardápio diversificado, com pratos que combinam sabores da culinária local e internacional. A proprietária, Maria da Silva, afirma que a proposta do local é proporcionar uma experiência única para os clientes, com um ambiente aconchegante e atendimento de qualidade. A previsão é que o restaurante seja um sucesso entre os moradores e turistas, atraindo cada vez mais público para a região.',
    },
    {
      id: 4,
      type: 'common',
      category: 'cultura',
      headline: 'Ação Cultural em Jundiapeba',
      subtitle: 'Artistas locais apresentam suas obras em feira cultural.',
      summary: '',
      image: 'assets/images/news2.jpg',
      date: '2024-10-30', // Data fictícia
      fulltext: 'A Feira Cultural de Jundiapeba trouxe ao público uma variedade de exposições artísticas, com o intuito de valorizar a produção local. Diversos artistas da região exibiram suas obras, incluindo pintura, escultura e fotografia, além de apresentações de música e dança. O evento foi um grande sucesso, com a participação de centenas de pessoas ao longo do final de semana. O projeto foi idealizado para dar visibilidade aos talentos locais e promover a arte como ferramenta de transformação social. Segundo os organizadores, eventos como esse ajudam a fortalecer o vínculo da comunidade com a cultura.',
    },
    {
      id: 5,
      type: 'common',
      category: 'esportes',
      headline: 'Esportes: Campeonato Regional',
      subtitle: 'Times locais disputam o título em jogos emocionantes.',
      summary: '',
      image: 'assets/images/news3.jpg',
      date: '2024-11-03', // Data fictícia
      fulltext: 'O Campeonato Regional de Futebol tem sido um grande sucesso nesta temporada, com times locais disputando acirradamente a taça. Nos últimos jogos, equipes como o Atlético Jundiaí e o Palmeiras de Mogi mostraram grande habilidade e espírito esportivo. Os jogos têm atraído um grande público, e as arquibancadas estão sempre lotadas. A competição também tem incentivado o envolvimento da juventude local, com muitos jovens se inscrevendo para as categorias de base. O próximo jogo promete ser ainda mais eletrizante, com grandes expectativas para o time do Atlético, que está em busca do título.',
    },
    {
      id: 6,
      type: 'common',
      category: 'politica',
      headline: 'Política: Lula foi preso',
      subtitle: 'O Brasil está em festa, o Comunista finalmente está onde merece.',
      summary: '',
      image: 'assets/images/news3.jpg',
      date: '2024-11-05', // Data fictícia
      fulltext: 'A notícia da prisão de Luiz Inácio Lula da Silva tem gerado controvérsia no Brasil. Enquanto apoiadores comemoram o evento, alegando que justiça foi feita, opositores expressam preocupação com o futuro político do país. O ex-presidente, condenado por corrupção e lavagem de dinheiro, cumprirá pena em regime fechado. A prisão acontece após uma série de reviravoltas jurídicas e protestos que marcaram o cenário político nos últimos anos. A divisão da opinião pública tem sido intensa, e as reações continuam a agitar as redes sociais.',
    },
  ];

  // Método para obter todas as notícias
  getNoticias() {
    return this.noticias;
  }

}
