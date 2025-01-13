// Autor: Felipe Dias Gomes
// Contato: felipedias777@gmail.com

function openModal() {
  calcularTempo();
  var modal = document.getElementById('myModal');
  modal.showModal();
}

function fechar() {
  var modal = document.getElementById('myModal');
  modal.close();
}

function calcularTempo() {
  // Obter os valores dos campos de entrada
  const inicioCirurgia = document.getElementById("inicioCirurgia").value;
  const fimCirurgia = document.getElementById("fimCirurgia").value;
  const inicioAnestesia = document.getElementById("inicioAnestesia").value;
  const fimAnestesia = document.getElementById("fimAnestesia").value;
  const entradaPaciente = document.getElementById("entradaPaciente").value;
  const saidaPaciente = document.getElementById("saidaPaciente").value;

  // Função para criar objetos Date e lidar com a passagem do dia
  function criarData(horarioInicio, horarioFim) {
    const dataInicio = new Date(`1970-01-01T${horarioInicio}`);
    let dataFim = new Date(`1970-01-01T${horarioFim}`);
    if (dataFim < dataInicio) {
      // Adicionar 1 dia ao horário final se ele for menor que o inicial
      dataFim.setDate(dataFim.getDate() + 1);
    }
    return [dataInicio, dataFim];
  }

  // Calcular os tempos
  const [inicioCirurgiaTime, fimCirurgiaTime] = criarData(inicioCirurgia, fimCirurgia);
  const [inicioAnestesiaTime, fimAnestesiaTime] = criarData(inicioAnestesia, fimAnestesia);
  const [entradaPacienteTime, saidaPacienteTime] = criarData(entradaPaciente, saidaPaciente);

  const tempoCirurgiaMs = fimCirurgiaTime - inicioCirurgiaTime;
  const tempoAnestesiaMs = fimAnestesiaTime - inicioAnestesiaTime;
  const tempoSalaMs = saidaPacienteTime - entradaPacienteTime;

  // Converter a diferença de milissegundos para horas e minutos
  function calcularHorasEMinutos(tempoMs) {
    const horas = Math.floor(tempoMs / (1000 * 60 * 60));
    const minutos = Math.floor((tempoMs % (1000 * 60 * 60)) / (1000 * 60));
    return { horas, minutos };
  }

  const tempoCirurgia = calcularHorasEMinutos(tempoCirurgiaMs);
  const tempoAnestesia = calcularHorasEMinutos(tempoAnestesiaMs);
  const tempoSala = calcularHorasEMinutos(tempoSalaMs);

  // Exibir os resultados
  const resultadoCirurgia = document.getElementById("resultadoCirurgia");
  resultadoCirurgia.innerHTML = `
      <p> Tempo de Cirurgia: ${tempoCirurgia.horas} horas e ${tempoCirurgia.minutos} minutos.</p>
  `;

  const resultadoAnestesia = document.getElementById("resultadoAnestesia");
  resultadoAnestesia.innerHTML = `
      <p> Tempo de Anestesia: ${tempoAnestesia.horas} horas e ${tempoAnestesia.minutos} minutos.</p>
  `;

  const resultadoSala = document.getElementById("resultadoSala");
  resultadoSala.innerHTML = `
      <p> Tempo de Uso de Sala: ${tempoSala.horas} horas e ${tempoSala.minutos} minutos.</p>
  `;
}
