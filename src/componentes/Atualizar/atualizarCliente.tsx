import React, { Component } from "react";
import "../style.css"
import Cliente from "../modelo/cliente";

type props = {
    clientes: Array<Cliente>
}

type state = {
    nome: string,
    nomeSocial: string,
    genero: string,
    valorCpf: string,
    dataCpf: string,
    valorRg: string,
    dataRg: string,
    dddTel: string,
    telefone: string,
    cliente: Array<Cliente> | string
}



export default class AtualizaCliente extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            nomeSocial: "",
            genero: "",
            valorCpf: "",
            dataCpf: "",
            valorRg: "",
            dataRg: "",
            dddTel: "",
            telefone: "",
            cliente: ""
        }
    }

    atualizaCliente = (e: React.FormEvent<Element>) => {
        e.preventDefault()
        this.setState({ cliente: this.props.clientes.filter(c => (c.nome === this.state.nome) || (c.nomeSocial === this.state.nome)) })
        console.log(this.state.cliente);

    }

    render() {
        return (
            <div>
                <form className="formAtualiza" onSubmit={this.atualizaCliente} >
                    <div className="inputFormAtualiza">
                        <label htmlFor="nome">Nome Completo</label>
                        <input id="nome"
                            type="text"
                            value={this.state.nome}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nome: e.target.value })}
                            className="campoDeInputTexto"
                            required />
                    </div>
                    <div className="colunaBotao">
                        <button className="botaoDeEnviarForm" name="enviar" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}