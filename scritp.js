  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

 
    const nomeInput = document.getElementById('nomeUsuario');
    const enviarBtn = document.getElementById('enviarNome');
    const mensagem = document.getElementById('mensagem');
    const contador = document.getElementById('contador');
    const listaNomes = document.getElementById('listaNomes');
    const toggleBtn = document.getElementById('toggleModo');
    const limparBtn = document.getElementById('limparLista');
    const body = document.body;

    // Recupera lista e modo do localStorage
    let nomes = JSON.parse(localStorage.getItem('nomes')) || [];
    const modoSalvo = localStorage.getItem('modo') || 'light-mode';
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(modoSalvo);

    // Atualiza lista e contador
    function atualizarLista() {
      listaNomes.innerHTML = '';
      if (nomes.length === 0) {
        contador.textContent = 'Nenhum nome na lista.';
      } else if (nomes.length === 1) {
        contador.textContent = '1 nome na lista.';
      } else {
        contador.textContent = `${nomes.length} nomes na lista.`;
      }

      nomes.forEach((n, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item fade-in';
        li.innerHTML = `${n} <button class="btn btn-sm btn-outline-danger btn-remover">Remover</button>`;
        li.querySelector('.btn-remover').addEventListener('click', () => {
          li.classList.add('fade-out');
          setTimeout(() => {
            nomes.splice(index, 1);
            localStorage.setItem('nomes', JSON.stringify(nomes));
            atualizarLista();
          }, 400);
        });
        listaNomes.appendChild(li);
      });
    }

    // Inicializa lista
    atualizarLista();

    // Enviar nome
    enviarBtn.addEventListener('click', () => {
      const nome = nomeInput.value.trim();
      if (nome) {
        nomes.push(nome);
        localStorage.setItem('nomes', JSON.stringify(nomes));
        mensagem.style.opacity = 0;
        setTimeout(() => {
          mensagem.textContent = `Olá, ${nome}! Nome adicionado à Lista Viva.`;
          mensagem.style.opacity = 1;
        }, 150);
        atualizarLista();
        nomeInput.value = '';
      } else {
        mensagem.textContent = 'Por favor, digite um nome antes de enviar.';
      }
    });

    // Alternar modo claro/escuro
    toggleBtn.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('modo', 'dark-mode');
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('modo', 'light-mode');
      }
    });

    // Limpar lista completa
    limparBtn.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja limpar toda a lista?')) {
        nomes = [];
        localStorage.removeItem('nomes');
        atualizarLista();
        mensagem.textContent = 'Lista limpa com sucesso!';
      }
    });

    // Limpar mensagem ao digitar
    nomeInput.addEventListener('input', () => {
      mensagem.textContent = '';
    });
 