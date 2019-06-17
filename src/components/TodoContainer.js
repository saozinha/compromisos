import React from 'react';

import Agenda from './Agenda';
import Realizado from './Realizado';
import NaoRealizado from './NaoRealizado';

export default class TodoContainer extends React.Component {
 
    render() {
        return (
            <div>

               <div > 
                    <div style={{float: "left", "marginRight":"35px","marginLeft":"45px"}}>
                        <h3>Agenda</h3>
                        <Agenda atividade={this.props.agenda.atividade} />
                    </div> 
               </div>
             

                <div style={{float: "left", "marginRight":"45px","marginLeft":"45px"}}>
                    <Realizado nome={this.props.realizado.nome} data={this.props.realizado.data} percent={this.props.realizado.percent}/>
                </div>

                <div style={{float: "left", "marginRight":"25px","marginLeft":"45px"}}>
                <   h3>Visitante</h3>
                    <NaoRealizado nome={this.props.naoRealizado.nome} causa={this.props.naoRealizado.causa}  />
                </div>

                <div style={{clear:"both"}}> </div>
            </div>
        );
       
    }
}