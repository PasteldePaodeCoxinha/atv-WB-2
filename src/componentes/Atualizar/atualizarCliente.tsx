import React, { Component } from "react";
import "../style.css"
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

type props = {
    clientes: Array<Cliente>
}

type state = {
    nome: string,
    novoNome: string
    nomeSocial: string,
    genero: string,
    valorRg: string,
    dataRg: string,
    dddTel: string,
    telefone: string,
    cliente: Cliente,
    erroCadastro: string
}



export default class AtualizaCliente extends Component<props, state> {
    private cliEsco = false
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            novoNome: "",
            nomeSocial: "",
            genero: "",
            valorRg: "",
            dataRg: "",
            dddTel: "",
            telefone: "",
            cliente: new Cliente(),
            erroCadastro: ""
        }
    }

    pegarUmCliente = (e: React.FormEvent<Element>) => {
        e.preventDefault()
        this.setState({
            cliente: this.props.clientes.filter(c => (c.nome === this.state.nome) || (c.nomeSocial === this.state.nome))[0]
        })
        this.cliEsco = true
    }

    atualizaCliente = (e: React.FormEvent<Element>) => {
        this.state.cliente.nome = (this.state.novoNome === "") ? this.state.cliente.nome : this.state.novoNome
        this.state.cliente.nomeSocial = (this.state.nomeSocial === "") ? this.state.cliente.nomeSocial : this.state.nomeSocial
        this.state.cliente.genero = (this.state.genero === "") ? this.state.cliente.genero : this.state.genero
        if (this.state.valorRg !== "" && this.state.dataRg !== "") {
            this.state.cliente.mudarRg(this.state.cliente.getRgs[0].getValor, new RG(this.state.valorRg, new Date(this.state.dataRg)))
        }
        if (this.state.telefone !== "" && this.state.dddTel !== "") {
            this.state.cliente.ediTel(this.state.cliente.getTelefones[0].getNumero, new Telefone(this.state.dddTel, this.state.telefone))
        }

        this.setState({
            nome: "",
            novoNome: "",
            nomeSocial: "",
            genero: "",
            valorRg: "",
            dataRg: "",
            dddTel: "",
            telefone: "",
            erroCadastro: ""
        })
        this.cliEsco = false

        e.preventDefault()
    }

    erroValidacao = () => {
        let mensagemErro = [""]
        if (this.props.clientes.filter(c => c.getRgs[0].getValor === this.state.valorRg).length > 0) {
            mensagemErro.push("Já existe um cliente com esse RG")
        }
        if (isNaN(Number(this.state.valorRg))) {
            mensagemErro.push("O campo número RG aceita apenas números.")
        }
        if (isNaN(Number(this.state.dddTel))) {
            mensagemErro.push("O campo DDD Telefone aceita apenas números.")
        }
        if (isNaN(Number(this.state.telefone))) {
            mensagemErro.push("O campo telefone aceita apenas números.")
        }
        if (/\d/.test(this.state.nome)) {
            mensagemErro.push("O campo nome aceita apenas letras")
        }
        if (/\d/.test(this.state.novoNome)) {
            mensagemErro.push("O campo novo nome aceita apenas letras")
        }
        if (/\d/.test(this.state.nomeSocial)) {
            mensagemErro.push("O campo nome social aceita apenas letras")
        }


        return mensagemErro
    }

    render() {
        if (this.cliEsco == false) {
            return (
                <div>
                    <div className="mensagensDeErros ">
                        {this.erroValidacao().map(i => <p className="mensagemErroValidacao">{i}</p>)}
                        <p className="erroNoCadastro">{this.state.erroCadastro}</p>
                    </div>
                    <form className="formAtualiza" onSubmit={this.pegarUmCliente} >
                        {/* Nome do cliente desejado */}
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
        } else {
            return (
                <div>
                    <div className="mensagensDeErros ">
                        {this.erroValidacao().map(i => <p className="mensagemErroValidacao">{i}</p>)}
                        <p className="erroNoCadastro">{this.state.erroCadastro}</p>
                    </div>
                    <form className="formAtualiza" onSubmit={this.atualizaCliente} >
                        {/* informações do novo nome e genêro */}
                        <div className="colunaDoForm">
                            <div className="inputForm">
                                <label htmlFor="novoNome">Novo nome</label>
                                <input id="novoNome"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.novoNome}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ novoNome: e.target.value })}
                                    className="campoDeInputTexto"
                                />
                            </div>
                            <div className="inputForm">
                                <label htmlFor="nomeSocial">Novo nome Social</label>
                                <input id="nomeSocial"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.nomeSocial}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nomeSocial: e.target.value })}
                                    className="campoDeInputTexto" />
                            </div>
                            <div className="inputForm">
                                <label htmlFor="dropdownDeGenero">Novo sexo</label>
                                <select
                                    className="dropdownDeGenero"
                                    name="genero"
                                    id="dropdownDeGenero"
                                    onChange={(e) => this.setState({ genero: e.target.value })}
                                >
                                    <option value="0" style={{ display: 'none' }}></option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                        </div>

                        {/* informações do novo RG */}
                        <div className="colunaDoForm">
                            <div className="inputForm">
                                <label htmlFor="numRg">Novo numero RG</label>
                                <input id="numRg"
                                    type="text"
                                    maxLength={9}
                                    minLength={9}
                                    value={this.state.valorRg}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ valorRg: e.target.value })}
                                    className="campoDeInputTexto"
                                />
                            </div>
                            <div className="inputForm">
                                <label htmlFor="dataRg">Nova data RG</label>
                                <input id="dataRg"
                                    type="date"
                                    value={this.state.dataRg}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ dataRg: e.target.value })}
                                    className="campoDeInputData"
                                />
                            </div>
                        </div>

                        {/* informações do novo telefone */}
                        <div className="colunaDoForm">
                            <div className="inputForm">
                                <label htmlFor="ddd">Novo DDD Telefone</label>
                                <input id="ddd"
                                    type="text"
                                    minLength={2}
                                    maxLength={3}
                                    value={this.state.dddTel}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ dddTel: e.target.value })}
                                    className="campoDeInputTexto"
                                />
                            </div>
                            <div className="inputForm">
                                <label htmlFor="telefone">Novo telefone</label>
                                <input id="telefone"
                                    type="text"
                                    maxLength={9}
                                    minLength={8}
                                    value={this.state.telefone}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ telefone: e.target.value })}
                                    className="campoDeInputTexto"
                                />
                            </div>
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
}