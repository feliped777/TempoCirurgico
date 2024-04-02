
// Autor: Felipe Dias Gomes
//Contato: felipedias777@gmail.com

 function openModal (){
    //modal.showModal();
    
    
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

  // Verificar se os campos estão vazios e atribuir zero se necessário
  const inicioCirurgiaTime = inicioCirurgia ? new Date(`1970-01-01T${inicioCirurgia}`) : 0;
  const fimCirurgiaTime = fimCirurgia ? new Date(`1970-01-01T${fimCirurgia}`) : 0;
  const inicioAnestesiaTime = inicioAnestesia ? new Date(`1970-01-01T${inicioAnestesia}`) : 0;
  const fimAnestesiaTime = fimAnestesia ? new Date(`1970-01-01T${fimAnestesia}`) : 0;
  const entradaPacienteTime = entradaPaciente ? new Date(`1970-01-01T${entradaPaciente}`) : 0;
  const saidaPacienteTime = saidaPaciente ? new Date(`1970-01-01T${saidaPaciente}`) : 0;

  // Calcular a diferença em milissegundos
  const tempoCirurgiaMs = fimCirurgiaTime - inicioCirurgiaTime;
  const tempoAnestesiaMs = fimAnestesiaTime - inicioAnestesiaTime;
  const tempoSalaMs = saidaPacienteTime - entradaPacienteTime;

  // Converter a diferença de milissegundos para horas e minutos
  const tempoCirurgiaHoras = Math.floor(tempoCirurgiaMs / (1000 * 60 * 60));
  const tempoCirurgiaMinutos = Math.floor((tempoCirurgiaMs % (1000 * 60 * 60)) / (1000 * 60));

  const tempoAnestesiaHoras = Math.floor(tempoAnestesiaMs / (1000 * 60 * 60));
  const tempoAnestesiaMinutos = Math.floor((tempoAnestesiaMs % (1000 * 60 * 60)) / (1000 * 60));

  const tempoSalaHoras = Math.floor(tempoSalaMs / (1000 * 60 * 60));
  const tempoSalaMinutos = Math.floor((tempoSalaMs % (1000 * 60 * 60)) / (1000 * 60));

  // Exibir os resultados
  const resultadoCirurgia = document.getElementById("resultadoCirurgia");
  resultadoCirurgia.innerHTML = `
      <p> Tempo de Cirurgia: ${tempoCirurgiaHoras} horas e ${tempoCirurgiaMinutos} minutos.</p>
  `;

  const resultadoAnestesia = document.getElementById("resultadoAnestesia");
  resultadoAnestesia.innerHTML = `
      <p> Tempo de Anestesia: ${tempoAnestesiaHoras} horas e ${tempoAnestesiaMinutos} minutos.</p>
  `;

  const resultadoSala = document.getElementById("resultadoSala");
  resultadoSala.innerHTML = `
      <p> Tempo de Uso de Sala: ${tempoSalaHoras} horas e ${tempoSalaMinutos} minutos.</p>
  `;
}
