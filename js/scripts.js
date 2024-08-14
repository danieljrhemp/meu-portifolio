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

    console.log(hoje)
    console.log(dataNasc)
    return idade;
    }

// Função para exibir a idade dinamicamente
function exibirIdade() {
    const dataNascimento = new Date('1997-06-03');
    const idade = calcularIdade(dataNascimento);
    document.getElementById('idade').textContent = idade + ' anos';
    }

    exibirIdade();

  setInterval(exibirIdade, 86400000); // Atualiza a cada 24 horas

  document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o modal e a imagem dentro dele
    var modal = document.getElementById("dynamicModal");
    var modalImage = document.getElementById("modalImage");
    var closeModal = document.querySelector(".close");

    // Seleciona todos os botões que abrem o modal
    var buttons = document.querySelectorAll(".openModalBtn");

    // Adiciona um evento de clique para cada botão
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var certSrc = this.getAttribute("data-cert");
            modalImage.src = certSrc;
            modal.style.display = "flex";
        });
    });

    // Fecha o modal ao clicar no "x"
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

