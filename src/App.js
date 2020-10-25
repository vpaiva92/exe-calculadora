import React, {Component} from 'react';
import './App.css';
import Tecla from './Tecla';
import Resultado from './Resultado';
import Apagar from './Apagar';
import Anterior from './Anterior';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: "",
      numeroAnterior: "",
      numeroAtual: "",
      operador: ""
    };
  }

  adicionarAoResultado = val => {
    this.setState({resultado: this.state.resultado + val});
  }

  adicionarDecimal = val => {
    if (this.state.resultado.indexOf(",") === -1){
      this.setState({resultado: this.state.resultado + val});
    }
  }

  adicionarZeroAoResultado = val => {
    if (this.state.resultado !== "") {
      this.setState({resultado: this.state.resultado + val});
    }
  }

  apagarResultado = val => {
    this.setState({resultado: ""});
  }

  adicionar = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "+";
  }

  diminuir = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "-";
  }

  multiplicar = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "*";
  }

  dividir = () => {
    this.state.numeroAnterior = this.state.resultado;
    this.setState({resultado: ""});
    this.state.operador = "/";
  }

  realizarOperacao = () => {
    this.state.numeroAtual = this.state.resultado;
    if (this.state.operador === "+") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) + parseFloat(this.state.numeroAtual)
      });
    }
    else if (this.state.operador === "-") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) - parseFloat(this.state.numeroAtual)
      });
    }
    else if (this.state.operador === "*") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) * parseFloat(this.state.numeroAtual)
      });
    }
    if (this.state.operador === "/") {
      this.setState({
        resultado: parseFloat(this.state.numeroAnterior) / parseFloat(this.state.numeroAtual)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="compartimento">
        <div className="fileira">
            <Anterior>{this.state.numeroAnterior + " " + this.state.operador}</Anterior>
          </div>
          <div className="fileira">
            <Resultado>{this.state.resultado}</Resultado>
          </div>
          <div className="fileira">
            <Apagar handleClear={this.apagarResultado}>AC</Apagar>
          </div>
          <div className="fileira">
            <Tecla handleClick={this.adicionarAoResultado}>7</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>8</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>9</Tecla>
            <Tecla handleClick={this.dividir}>/</Tecla>
          </div>
          <div className="fileira">
            <Tecla handleClick={this.adicionarAoResultado}>4</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>5</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>6</Tecla>
            <Tecla handleClick={this.multiplicar}>*</Tecla>
          </div>
          <div className="fileira">
            <Tecla handleClick={this.adicionarAoResultado}>1</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>2</Tecla>
            <Tecla handleClick={this.adicionarAoResultado}>3</Tecla>
            <Tecla handleClick={this.adicionar}>+</Tecla>
          </div>
          <div className="fileira">
            <Tecla handleClick={this.adicionarDecimal}>,</Tecla>
            <Tecla handleClick={this.adicionarZeroAoResultado}>0</Tecla>
            <Tecla handleClick={this.realizarOperacao}>=</Tecla>
            <Tecla handleClick={this.diminuir}>-</Tecla>
          </div>
        </div>
      </div>
    );
  }
}

export default App;