let valores = {
  soma: {
    title: "Soma",
    value: "",
  },
  substracao_ab: {
    title: "Substração A - B",
    value: "",
  },
  substracao_ba: {
    title: "Substração B - A",
    value: "",
  },
  multiplacao: {
    title: "Multiplicação",
    value: "",
  },
  divisao_ab: {
    title: "Divisão A/B",
    value: "",
  },
  divisao_ba: {
    title: "Divisão B/A",
    value: "",
  },
  potenciaAbaseB: {
    title: "Potência de A na base",
    value: "",
  },
  potenciaBbaseA: {
    title: "Potência de B na base A",
    value: "",
  },
  raizQuadradaA: {
    title: "Raiz quadrada de A",
    value: "",
  },
  raizQuadradaB: {
    title: "Raiz quadrada de B",
    value: "",
  },
  fatorialA: {
    title: "Fatorial de A",
    value: "",
  },
  fatorialB: {
    title: "Fatorial de B",
    value: "",
  },
  porcentagemAdeB: {
    title: "Porcentagem de A em relação a B",
    value: "",
  },
  porcentagemBdeA: {
    title: "Porcentagem de B em relação a A",
    value: "",
  },
  media: {
    title: "Média",
    value: "",
  },
};

const calculate = document.getElementById("calcula");

calculate.addEventListener("click", function (event) {
  event.preventDefault();
  const num1 = Number(document.getElementById("numero1").value);
  const num2 = Number(document.getElementById("numero2").value);

  if (num1 === "" || num2 === "") {
    alert("Preencha os inputs");
  }

  equations(num1, num2);
  render();
});

function equations(a, b) {
  valores.soma.value = a + b;
  valores.substracao_ab.value = a - b;
  valores.substracao_ba.value = b - a;
  valores.multiplacao.value = a * b;
  let divisao_ab = a / b;
  valores.divisao_ab.value = divisao_ab.toFixed(2);
  let divisao_ba = b / a;
  valores.divisao_ba.value = divisao_ba.toFixed(2);
  let potenciaAbaseB = Math.pow(a, b);
  valores.potenciaAbaseB.value = potenciaAbaseB;
  let potenciaBbaseA = Math.pow(b, a);
  valores.potenciaBbaseA.value = potenciaBbaseA;
  let raizQuadradaA = Math.sqrt(a);
  valores.raizQuadradaA.value = raizQuadradaA.toFixed(2);
  let raizQuadradaB = Math.sqrt(b);
  valores.raizQuadradaB.value = raizQuadradaB.toFixed(2);
  let fatorial = (numero) => {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    return numero * fatorial(numero - 1);
  };
  valores.fatorialA.value = fatorial(a);
  valores.fatorialB.value = fatorial(b);
  let porcentagem = (a, b) => {
    return `${((a / b) * 100).toFixed(0)}%`;
  };
  valores.porcentagemAdeB.value = porcentagem(a, b);
  valores.porcentagemBdeA.value = porcentagem(b, a);
  valores.media.value = (a + b) / 2;
}

function innerConteudo(title, value) {
  return `
    <div>
      <h4><b>${title}</b></h4>
    </div>
    <div>
      <p>${value}</p>
    </div>
  `;
}

function render() {
  Object.entries(valores).map(([title, value], index) => {
    document.getElementById(`div${index + 1}`).innerHTML = innerConteudo(
      value.title,
      value.value
    );
  });
}

render();
