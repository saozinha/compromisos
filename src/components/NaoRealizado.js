import React from 'react';

export default class NaoRealizado extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.nome} </h2>
                <div>
                    <span>
                    {this.props.causa}
                    </span>
                </div> 
             </div>
        );
        
    }
}