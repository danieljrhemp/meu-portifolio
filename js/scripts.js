  // Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNasc = dataNasc.getMonth();

    // Reduz a idade se o aniversário ainda não ocorreu este ano
    if (mesNasc > mesAtual || (mesNasc === mesAtual && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    return idade;
    }

  // Função para exibir a idade dinamicamente
    function exibirIdade() {
    const dataNascimento = new Date('1997-06-02');
    const idade = calcularIdade(dataNascimento);
    document.getElementById('idade').textContent = idade + ' anos';
    }

    exibirIdade();

  setInterval(exibirIdade, 86400000); // Atualiza a cada 24 horas

