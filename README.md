CB1 NEWS
Site informativo sobre cyberbullying, desenvolvido em grupo (Grupo 2) com o objetivo de explicar o que é o problema, onde ele acontece, como identificá-lo, como se defender, onde buscar ajuda e quais são as punições previstas na legislação brasileira.
O projeto é feito apenas com HTML, CSS e JavaScript puro, sem frameworks e sem etapa de build.
---
Sumário
Páginas do site
Recursos de acessibilidade
Tecnologias utilizadas
Estrutura do projeto
Como executar
Problemas conhecidos e próximos passos
Equipe
---
Páginas do site
Página	Arquivo	Conteúdo
Início	`HTML/index.html`	Página de entrada com a identidade visual do CB1 NEWS e o menu de navegação.
O que é cyberbullying?	`HTML/oquecy.html`	Definição do cyberbullying e exemplos (comentários ofensivos, exposição de imagens, mensagens ameaçadoras, humilhação nas redes, exclusão e perseguição).
Onde ocorre?	`HTML/ondeocorre.html`	Ambientes onde acontece: redes sociais, aplicativos de mensagens, jogos online, plataformas de vídeo, fóruns e e-mails.
Como identificar?	`HTML/identificar.html`	Sinais de que alguém está sendo vítima, divididos em: uso da tecnologia, forma de falar e se relacionar, atitudes diante de limites e vida emocional.
Como se defender?	`HTML/defender.html`	Orientações práticas: bloquear e denunciar, guardar provas, procurar ajuda de adultos de confiança e usar a internet de forma consciente.
Meios de contato	`HTML/contato.html`	Canais de ajuda: Disque 100, SaferNet Brasil, CVV (188), Conselho Tutelar e Polícia Civil.
Legislação e punições	`HTML/Punicoes.html`	Lei nº 14.811/2024 (art. 146-A do Código Penal), Lei nº 13.185/2015, Marco Civil da Internet (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018), com referências.
Todas as páginas compartilham o mesmo menu de navegação e o mesmo rodapé com a identificação do grupo.
---
Recursos de acessibilidade
O site possui um painel de acessibilidade, aberto por um botão no canto inferior direito (rodapé). Ele oferece:
Tamanho do texto (A- / A+): reduz ou aumenta a fonte de parágrafos, listas, títulos, links e `span`. São 7 níveis, de -4 px a +8 px sobre o tamanho original.
Alto contraste: fundo preto, texto branco e links amarelos sublinhados.
Modo para daltonismo: paleta em azul-marinho, âmbar e branco, com links sublinhados e em negrito para não depender apenas da cor.
Espaçamento do texto: aumenta o espaçamento entre linhas, letras e palavras para facilitar a leitura.
Restaurar padrão: desfaz todas as alterações.
Os modos alto contraste e daltonismo são mutuamente exclusivos. As demais opções podem ser combinadas.
Como funciona
```
Botão/painel (HTML)  →  JS adiciona/remove classes no <body>  →  CSS aplica o visual correspondente
```
Classe no `<body>`	Efeito
`alto-contraste`	Ativa o tema de alto contraste
`modo-daltonismo`	Ativa a paleta para daltonismo
`espacamento-legivel`	Ativa o espaçamento ampliado
O tamanho do texto é ajustado diretamente pelo JavaScript, que guarda o tamanho original de cada elemento em `data-tamanho-original` para poder restaurá-lo depois.
O botão usa os atributos ARIA `aria-label`, `aria-expanded` e `aria-controls`, e o ícone é marcado com `aria-hidden`.
> **Onde está disponível:** `contato.html`, `defender.html`, `ondeocorre.html` e `Punicoes.html`.
> Para adicionar em outra página, veja [Adicionando o painel a uma página](#adicionando-o-painel-a-uma-página).
---
Tecnologias utilizadas
HTML5
CSS3 (Flexbox, Grid, media queries para responsividade)
JavaScript (ES6, sem bibliotecas)
Google Fonts (Montserrat, usada na página "Como identificar?")
Git/GitHub para versionamento e trabalho em grupo
---
Estrutura do projeto
```
PROJETO-CB1-NEWS/
├── CSS/
│   ├── acessibilidade.css   # Painel e modos de acessibilidade (compartilhado)
│   ├── visual.css           # Estilo da página inicial
│   ├── oquecy.css           # Estilo de "O que é cyberbullying?"
│   ├── ondeocorre.css       # Estilo de "Onde ocorre?"
│   ├── identificar.css      # Estilo de "Como identificar?"
│   ├── defender.css         # Estilo de "Como se defender?"
│   ├── contato.css          # Estilo de "Meios de contato"
│   └── punicoes.css         # Estilo de "Legislação e punições"
├── HTML/
│   ├── index.html
│   ├── oquecy.html
│   ├── ondeocorre.html
│   ├── identificar.html
│   ├── defender.html
│   ├── contato.html
│   └── Punicoes.html
├── Img/                     # Logos, prédios e ilustração da personagem
├── JS/
│   └── acessibilidade.js    # Lógica do painel de acessibilidade (compartilhado)
└── README.md
```
---
Como executar
Não é necessário instalar nada.
Opção 1: abrir direto no navegador
Clone o repositório:
```bash
   git clone https://github.com/MiguelPontes91/PROJETO-CB1-NEWS.git
   ```
Abra o arquivo `HTML/index.html` no navegador.
Opção 2: com servidor local (recomendado)
Abra a pasta do projeto no VS Code.
Instale a extensão Live Server.
Clique com o botão direito em `HTML/index.html` e escolha Open with Live Server.
> Os caminhos entre arquivos são relativos (`../CSS/...`, `../JS/...`, `../Img/...`), portanto **mantenha a estrutura de pastas** como está.
Adicionando o painel a uma página
No `<head>`, carregue o CSS depois do CSS da própria página:
```html
   <link rel="stylesheet" href="../CSS/acessibilidade.css">
   ```
No rodapé, inclua o botão com `id="botaoAcessibilidade"`.
Após o rodapé, inclua o painel com `id="painelAcessibilidade"` (com o atributo `hidden`) e os botões `diminuirTexto`, `aumentarTexto`, `alternarContraste`, `alternarDaltonismo`, `alternarEspacamento` e `restaurarAcessibilidade`.
Antes de `</body>`, carregue o script:
```html
   <script src="../JS/acessibilidade.js"></script>
   ```
> O script só roda se **todos** esses `id`s existirem na página. Se faltar algum, o recurso inteiro deixa de funcionar naquela página.
---
Equipe
Grupo 2: Cyberbullying
Arthur Teles Ferreira
Eduardo Henio Simões Wachholz
Jaislan dos Santos Silva
João Eduardo do Nascimento Melo
Luciano Castor de Souza Filho
Miguel de Pontes Nascimento
---
Aviso
O conteúdo do site tem caráter educativo e informativo. Em caso de violência ou ameaça, procure ajuda imediatamente: Disque 100, CVV (188), Conselho Tutelar ou Polícia Civil.

