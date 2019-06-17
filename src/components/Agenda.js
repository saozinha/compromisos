import React from 'react';

export default class Agenda extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.atividade} </h2>
                <div>
                    <span>
                    {this.props.data}
                    </span>
                </div>

                <div>
                    <span>
                    {this.props.hora}
                    </span>
                </div>
             </div>
        );
        
    }
}