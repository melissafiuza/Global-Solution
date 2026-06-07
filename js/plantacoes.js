let campoBusca = document.getElementById('campoBusca');
let linhas = document.querySelectorAll('#tabelaPlantacoes tbody tr');
let mensagemVazia = document.getElementById('mensagemVazia');
let statusAtual = 'Todos';

function filtrarStatus(botaoClicado) {
  let botoes = document.querySelectorAll('.botao-filtro');
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].className = 'botao-filtro';
  }
  botaoClicado.className = 'botao-filtro ativo';
  statusAtual = botaoClicado.getAttribute('data-status');
  aplicarFiltros();
}

function aplicarFiltros() {
  let textoBusca = campoBusca.value.toLowerCase().trim();
  let visiveis = 0;

  for (let i = 0; i < linhas.length; i++) {
    let linha = linhas[i];

    let nome = linha.getAttribute('data-nome').toLowerCase();
    let especie = linha.getAttribute('data-especie').toLowerCase();
    let setor = linha.getAttribute('data-setor').toLowerCase();
    let id = linha.getAttribute('data-id').toLowerCase();
    let status = linha.getAttribute('data-status');

    let combinaBusca =
      textoBusca === '' ||
      nome.indexOf(textoBusca) !== -1 ||
      especie.indexOf(textoBusca) !== -1 ||
      setor.indexOf(textoBusca) !== -1 ||
      id.indexOf(textoBusca) !== -1;

    let combinaStatus = statusAtual === 'Todos' || status === statusAtual;

    if (combinaBusca && combinaStatus) {
      linha.style.display = '';
      visiveis = visiveis + 1;
    } else {
      linha.style.display = 'none';
    }
  }

  if (visiveis === 0) {
    mensagemVazia.style.display = 'block';
  } else {
    mensagemVazia.style.display = 'none';
  }
}

campoBusca.oninput = function() {
  aplicarFiltros();
};