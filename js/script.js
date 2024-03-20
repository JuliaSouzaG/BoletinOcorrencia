let formComunicante = document.getElementById("formComunicante");

formComunicante.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(e.target)

    let dadosComunicante = {
        nomecivil: formData.get('nome_comunicante'),
        nacionalidade: formData.get('nacionalidade_comunicante'),
        profissao: formData.get('profissao'),
        estadocivil: formData.get('estado_civil_comunicante'),
        nomemae: formData.get('nome_mae_comunicante'),
        cpf: formData.get('cpf'),
        endereco: formData.get('endereco'),
        telefone: formData.get('telefone'),
        naturalidade: formData.get('naturalidade'),
        datanasc: formData.get('data_nasc_comunicante'),
        idade: formData.get('idade_comunicante'),
        dadosDoRegistro: {
            datahorainicio: formData.get('dataHoraIninio'),
            datahorafim: formData.get('dataHoraFim'),
            delegado: formData.get('delegado'),
        },
        ocorrencia: {
            unidadeapuracao: formData.get('unidade_de_apuracao'),
            datahoraini_ocorrencia: formData.get('data_hr_ini_ocorrencia'),
            datahorafim_ocorrencia: formData.get('data_hr_fim_ocorrencia'),
            municipio: formData.get('municipio'),
            bairro: formData.get('bairro'),
            logradouro: formData.get('logradouro'),
            complemento: formData.get('complemento'),
            tipodolocal: formData.get('tipo_local'),
            descricaolocal: formData.get('descricao_local'),
        },
        objeto: {
            grupo: formData.get(''),
            tipodocumento: formData.get(''),
            subgrupo: formData.get(''),
            descricao: formData.get(''),
            situacao: formData.get(''),
            docadulterado: formData.get(''),
        },
        envolvidos: {
            nomecivil_envolvidos: formData.get(''),
            nacionalidade_envolvidos: formData.get(''),
            estadocivil_envolvidos: formData.get(''),
            nomemae_envolvidos: formData.get(''),
            cpf_envolvidos: formData.get(''),
            datanasc_envolvidos: formData.get(''),
            idade_envolvidos: formData.get('')
        }

    }

    localStorage.setItem("dadosComunicante", JSON.stringify(dadosComunicante));
    const armazenar = localStorage.getItem(dadosComunicante);

    console.log(dadosComunicante)
    cadastrar(dadosComunicante)
});

function cadastrar(dadosComunicante) {
    axios.post("http://localhost:8080/api/comunicantes", dadosComunicante)
    .then(function (res) {
        console.log("Sucesso!")
        console.log(res)
    })
    .catch(function (res) {
        console.log("Erro!")
        console.log(res)
    })
}

