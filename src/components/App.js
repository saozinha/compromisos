import React from 'react';

import TodoContainer from './TodoContainer';

const dados = {
    agenda: {
        atividade : "Estudar React",
        data : "10/05/19",
        hora : "19 horas ate 21 horas",
    },
    realizado : {
       nome : "Estudar React",
       data : "10/05/19",
       percent : "90% realizado"
    },
    naoRealizado : {
       nome : "Estudar Ingles",
       causa : "Reuniao de familia"
    }
};

export default class App extends React.Component {
    render() { 
        
            return <TodoContainer agenda={dados.agenda} 
                                    realizado={dados.realizado}
                                    naoRealizado={dados.naoRealizado}/>;
         
    }
}