
function mostrarResultado(idElemento, textoHTML) {
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML = textoHTML;
    elemento.classList.add("visivel");
}

function esconderResultado(idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.classList.remove("visivel");
}
let btnCrescimento = document.getElementById("btn-crescimento");
btnCrescimento.addEventListener("click", function() {
    var medidaAnterior = parseFloat(document.getElementById("medida-anterior").value);
    var medidaAtual = parseFloat(document.getElementById("medida-atual").value);
    var dias = parseFloat(document.getElementById("dias").value);

    if (isNaN(medidaAnterior) || isNaN(medidaAtual) || isNaN(dias)) {
        mostrarResultado("resultado-crescimento", "⚠️ Por favor, preencha todos os campos.");
        return;
    }

    if (dias <= 0) {
        mostrarResultado("resultado-crescimento", "⚠️ O número de dias deve ser maior que zero.");
        return;
    }

    if (medidaAnterior <= 0 || medidaAtual <= 0) {
        mostrarResultado("resultado-crescimento", "⚠️ As medidas devem ser maiores que zero.");
        return;
    }

    let crescimentoTotal = medidaAtual - medidaAnterior;
    let taxaDiaria = crescimentoTotal / dias;
    let resultado = "";

    if (taxaDiaria > 0) {
        resultado = "✅ A planta cresceu <strong>" + crescimentoTotal.toFixed(2) + " cm</strong> em " + dias + " dias.<br>";
        resultado += "📈 Taxa de crescimento diária: <strong>" + taxaDiaria.toFixed(2) + " cm/dia</strong>";
    } else if (taxaDiaria === 0) {
        resultado = "ℹ️ A planta não apresentou crescimento no período informado.";
    } else {
        resultado = "⚠️ A medida atual é menor que a anterior. Verifique os valores.";
    }

    mostrarResultado("resultado-crescimento", resultado);
});

let btnDensidade = document.getElementById("btn-densidade");

btnDensidade.addEventListener("click", function() {
    let populacao = parseFloat(document.getElementById("populacao").value);
    let espacamento = parseFloat(document.getElementById("espacamento").value);
    let area = parseFloat(document.getElementById("area").value);

    // Validação dos campos
    if (isNaN(populacao) || isNaN(espacamento) || isNaN(area)) {
        mostrarResultado("resultado-densidade", "⚠️ Por favor, preencha todos os campos.");
        return;
    }

    if (populacao <= 0 || espacamento <= 0 || area <= 0) {
        mostrarResultado("resultado-densidade", "⚠️ Todos os valores devem ser maiores que zero.");
        return;
    }

    let espacamentoEmMetros = espacamento / 100;
    let areaParaUmaPlanta = espacamentoEmMetros * espacamentoEmMetros;
    let densidadeRecomendada = Math.floor(area / areaParaUmaPlanta);
    let densidadeReal = (populacao / area).toFixed(2);

    let resultado = "";
    resultado += "📏 Espaço ocupado por cada planta: <strong>" + areaParaUmaPlanta.toFixed(4) + " m²</strong><br>";
    resultado += "🌱 Densidade atual: <strong>" + densidadeReal + " plantas/m²</strong><br>";
    resultado += "✅ Capacidade máxima recomendada para a área: <strong>" + densidadeRecomendada + " plantas</strong>";

    if (populacao > densidadeRecomendada) {
        resultado += "<br>⚠️ A população desejada <strong>ultrapassa</strong> a capacidade da área com o espaçamento informado.";
    } else {
        resultado += "<br>✅ O espaçamento é <strong>adequado</strong> para a população desejada.";
    }

    mostrarResultado("resultado-densidade", resultado);
});



let btnProducao = document.getElementById("btn-producao");

btnProducao.addEventListener("click", function() {
    let areaProducao = parseFloat(document.getElementById("area-producao").value);
    let producaoPorM2 = parseFloat(document.getElementById("producao-m2").value);

    if (isNaN(areaProducao) || isNaN(producaoPorM2)) {
        mostrarResultado("resultado-producao", "⚠️ Por favor, preencha todos os campos.");
        return;
    }

    if (areaProducao <= 0 || producaoPorM2 <= 0) {
        mostrarResultado("resultado-producao", "⚠️ Os valores devem ser maiores que zero.");
        return;
    }

    let producaoTotalKg = areaProducao * producaoPorM2;
    let producaoTotalTon = producaoTotalKg / 1000;

    let resultado = "";
    resultado += "🌾 Produção total estimada: <strong>" + producaoTotalKg.toFixed(2) + " kg</strong><br>";
    resultado += "📦 Equivalente a: <strong>" + producaoTotalTon.toFixed(3) + " toneladas</strong>";

    mostrarResultado("resultado-producao", resultado);
});