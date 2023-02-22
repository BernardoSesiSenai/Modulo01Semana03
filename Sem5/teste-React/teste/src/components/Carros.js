import React from "react";

class Carros extends React.Component{
    constructor(props){
        super(props)
        this.Modelo = '2020'
        this.state = {
            Ligado : false,
            velAtual : 0
        }
    }

    componentDidMount(){
        console.log('Fui criado')
    }

    componentDidUpdate(){
        console.log('Fui atualizado')
    }

    StartStop(){
        this.setState({Ligado: !this.state.Ligado})
    }
 
    componentWillUnmount(){
        console.log('Fui Destruído')
    }

    render(){
        return(
            <div>
                <h1>Meu carro Onix</h1>
                <p>Modelo: {this.Modelo}</p>
                <p>Ligado:{this.state.Ligado ? 'Sim' : 'Não'}</p>
                <button onClick={() => this.StartStop()}>LIGAR O CARRO</button>
                <p>Velocidade atual:{this.velAtual}</p>
            </div>
        )
    }
}

export default Carros;