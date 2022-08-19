// coletando dados a serem apresentados na tela principal

const questions = [
    {

        id: 1,
        title: 'Devo permitir o uso de cookies?',
        info: 
            'Não há problemas, mas de tempos em tempos, será necessária a limpeza de cache no navegador'
        
    },

    {
        id: 2,
        title: 'Como mudar minha senha?',
        info:
            'Vá para "Meu perfi>Configurações>Senha"',
    }, 

    {
        id: 3,
        title: 'Como solicitar acesso à GCP?',
        info: 
            'Abra um chamado usando o formulário, para liberarmos acesso no Admin Console'
        
    },
    
    {
        id: 4,
        title: 'Como solicitar acesso ao Drive Desktop?',
        info:
            'Você precisa primeiro solicitar nível de acesso com o pessoal de Rede. Após isso, faça o download que o acesso ficará liberado',
    },  

    {
        id: 5,
        title: 'Será necessário migrar nossas planilhas?',
        info:
            'Gradativamente, o uso será totalmente via web. Portanto, é recomendado migrar',
    },  


    
];

export default questions;