import axios from "axios"
const data = {
  OS: "18449513",
  ABERTURA_OS: "28/08/2023 13:30:11",
  ATRIBUICAO_OS: "28/08/2023 13:32:30",
  PIB: "01067901",
  EQUIPAMENTO: "SCANNER POLICROMATICO",
  N_SERIE: "JAC01243                 ",
  MCU: "    00436990",
  ORGAO: "GER OPERA FISCAIS/DETRI",
  DR: "74",
  DR_SIGLA: "SPI",
  VALUE2: "000769_2023_001",
  SX_CONTRATO: "000769_2023_001 - ECSTEC                                  ",
  DESCRICAO_TOTAL:
    "Manutenção Solicitada: Scanner de Mesa  PIB: 01067901 Nome: SCANNER POLICROMATICO          Modelo: DR-C230 / CANON                Marca: CANON                          Descreva a manutenção: Botão liga e desliga do equipamento está com defeito. Telefone de contato: (14)3108-4215 Local de atendimento: R. Benedito Eleutério, 5-79 - Vila Pacifico, Bauru - SP, 17050-370 Informe a localidade para atendimento desta solicitação: SE/SPI   #####DIAGNOSTICO##### Scanner novo recebido não liga. Encaminhar para GARANTIA.",
  DESCRICAO_LONGA_TOTAL:
    "Manutenção Solicitada: Scanner de Mesa  PIB: 01067901 Nome: SCANNER POLICROMATICO          Modelo: DR-C230 / CANON                Marca: CANON                          Descreva a manutenção: Botão liga e desliga do equipamento está com defeito. Telefone de contato: (14)3108-4215 Local de atendimento: R. Benedito Eleutério, 5-79 - Vila Pacifico, Bauru - SP, 17050-370 Informe a localidade para atendimento desta solicitação: SE/SPI   #####DIAGNOSTICO##### Scanner novo recebido não liga. Encaminhar para GARANTIA.; 30/08/2023 09:50:34 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:50:34 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:50:49 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:50:49 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:51:01 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:51:01 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:51:37 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:51:37 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:52:41 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:52:41 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:53:37 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:53:37 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:54:20 INFO. ADIC.: CHAMADO FECHADO - INSERIDO DATA DE FIM DE SERVIÇO (MU): 29/08/2023 12:00:00; SOLUÇÃO DO CHAMADO: Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.. (JÉSSICA LIMA DA SILVA LARA); 30/08/2023 09:54:20 Utilização de serviços e peças: . (JÉSSICA LIMA DA SILVA LARA)",
  DESCRICAO: "Manutenção Solicitada: Scanner de Mesa  PIB: 0106790...",
  SOLUCAO:
    "Feito o reparo do botão e após o atendimento, o equipamento apresentou funcionamento normal.",
  TECNICO: null,
  NOME_TECNICO: null,
  SLA: 2,
  FECHAMENTO_OS: "29/08/2023 12:01:00",
  ATRASO: "0",
  ESTADO: "ATESTADO",
  cae_qt_reabertura: 0,
  cae_tx_data_reabertura: null,
  CIDADE: "BAURU                    ",
  AREA_CLASSIFICACAO: "GA",
  TP_ATENDIMENTO: "S",
  LIMITE_SLA: null,
}
const dbUrl = "http://localhost:6001/api/chamados"
const postCorreiosdata = async () => {
  try {
    axios.post(dbUrl, data)
    console.log("os dados estão na nossa base de dados")
  } catch (error) {
    console.log("não foi possivel enviar os dados =>", error)
  }
}

postCorreiosdata()
