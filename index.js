// ORDEM DE PASSOS DO ALGORÍTMO
// A) CRIAR UM ARRAY DE PESSOAS
// B) ITERAR SOBRE O ARRAY E MONTAR O EMAIL
// C) CONVERTER PARA UMA FUNÇÃO REAPROVEITÁVEL
// D) CRIAR UMA FUNÇÃO PARA CADASTRO DE PESSOAS
const pessoas = [];
// EMAIL BASE
const emailBase = "@escola.pr.gov.br";

function gerarEmail() {
  if (pessoas.length == 0) {
    console.error("Nenhuma pessoa cadastrada");
  } else {
    for (pessoa of pessoas) {
      const nome = pessoa.nome;
      const sobrenome = pessoa.sobrenome;
      const email = `${nome}.${sobrenome}${emailBase}`;
      console.log(email.toLowerCase());
    }
  }
}

//  CRIAR UMA FUNÇÃO DE CADASTRO
function cadastrarPessoa(nome, sobrenome) {
  pessoas.push({
    nome: nome,
    sobrenome: sobrenome,
  });
}
cadastrarPessoa("Julio", "Cesar");
cadastrarPessoa("Karl", "Marx");
cadastrarPessoa("Biden", "Jonas");
cadastrarPessoa("Marilym", "Grael");

gerarEmail();
