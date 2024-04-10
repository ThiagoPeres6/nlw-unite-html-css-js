let participantes = [
  {
    nome: "Thiago Peres",
    email: "thiagoperes@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Leandro Rufino",
    email: "leandrorufino@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 18, 21),
    dataCheckIn: new Date(2024, 2, 25, 23, 10)
  },
  {
    nome: "Maria Silva",
    email: "mariasilva@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 12, 45),
    dataCheckIn: new Date(2024, 2, 26, 10, 30)
  },
  {
    nome: "João Oliveira",
    email: "joaooliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 8, 10),
    dataCheckIn: new Date(2024, 2, 26, 9, 15)
  },
  {
    nome: "Carla Santos",
    email: "carlasantos@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 14, 0),
    dataCheckIn: new Date(2024, 2, 27, 11, 20)
  },
  {
    nome: "Pedro Almeida",
    email: "pedroalmeida@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 16, 30),
    dataCheckIn: new Date(2024, 2, 27, 17, 45)
  },
  {
    nome: "Ana Rodrigues",
    email: "anarodrigues@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 9, 45),
    dataCheckIn: new Date(2024, 2, 28, 10, 10)
  },
  {
    nome: "Rafaela Costa",
    email: "rafaelacosta@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 11, 20),
    dataCheckIn: new Date(2024, 2, 28, 12, 30)
  },
  {
    nome: "Bruno Santos",
    email: "brunosantos@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 14, 15),
    dataCheckIn: new Date(2024, 2, 29, 15, 40)
  },
  {
    nome: "Fernanda Oliveira",
    email: "fernandaoliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 17, 0),
    dataCheckIn: new Date(2024, 2, 29, 18, 20)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir info html
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)
