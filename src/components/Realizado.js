import React from 'react';

export default class Realizado extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.nome} </h2>
                <div>
                    <span>
                    {this.props.data}
                    </span>
                </div> 
                <div>
                    <span>
                    {this.props.percent}
                    </span>
                </div> 
             </div>
        );
        
    }
}