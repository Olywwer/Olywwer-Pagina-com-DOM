Página Interativa com DOM


Lista Interativa – Página Web Interativa

Objetivo

Desenvolver uma página web interativa chamada Lista Interativa, que:

* Com modo claro e modo escuro, permitindo alterar automaticamente as cores da interface (fundo e texto).
* Permite a identificação do usuário por meio de um campo de entrada de nome.
* Utiliza conceitos de DOM, manipulação de elementos HTML com JavaScript e eventos do DOM.



Funcionalidades

1. Campo de Entrada

   * Campo de texto para o usuário digitar seu nome.
   * Botão para enviar o valor digitado.

2. Exibição de Mensagem

   * Ao clicar no botão, uma mensagem personalizada é exibida na tela com o nome informado.

3. Lista Dinâmica de Nomes

   * Nomes enviados são adicionados a uma lista interativa.
   * Cada item da lista possui um botão Remover para deletar individualmente.
   * Possibilidade de limpar toda a lista com um único clique.
   * Lista persistente usando localStorage, mantendo os nomes mesmo após atualizar a página.

4. Manipulação de Estilo (Modo Claro/Escuro)

   * Botão para alternar entre modo claro e modo escuro.
   * Ao alterar o modo, a página modifica automaticamente:

     * Cor de fundo
     * Cor do texto
   * Preferência de modo salva no localStorage.

5. Eventos do DOM

   * Evento de clique (`click`) para:

     * Adicionar nomes à lista
     * Remover nomes individualmente
     * Limpar a lista completa
     * Alternar o modo claro/escuro
   * Evento de input (`input`) para limpar mensagens enquanto o usuário digita.

6. Animações e Interatividade

   * Nomes adicionados aparecem com fade-in suave.
   * Nomes removidos desaparecem com fade-out animado.
   * Contador dinâmico de nomes exibindo mensagens como:

     * "Nenhum nome na lista"
     * "1 nome na lista"
     * "X nomes na lista"


 Tecnologias Utilizadas

* HTML5 – Estrutura da página
* CSS3 – Estilo, cores e animações
* JavaScript (Vanilla JS) – Manipulação do DOM, eventos e persistência com `localStorage`
* Bootstrap 5– Layout moderno, responsivo e estilizado


Objetivos de Aprendizado

* Manipulação do DOM com JavaScript.
* Criação e manipulação de eventos (`click`, `input`).
* Uso de localStorage para persistência de dados.
* Aplicação de modo claro/escuro dinâmico.
* Criação de interfaces interativas e responsivas com Bootstrap 5.

