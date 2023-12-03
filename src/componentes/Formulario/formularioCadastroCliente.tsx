import React, { Component } from "react";
import "../style.css"
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

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
    telefone: string
    erroCadastro: string
}

export default class FormularioCadastroCliente extends Component<props, state> {
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
            erroCadastro: ""
        }
    }

    criandoCli = (e: React.FormEvent<Element>) => {
        e.preventDefault()

        if (this.erroValidacao().length !== 1) {
            this.setState({
                erroCadastro: "Não é possível cadastro, existe campos inválidos."
            })
            return
        } else {
            const dataCpf = new Date(this.state.dataCpf)
            const cpf = new CPF(this.state.valorCpf, dataCpf);

            let cliente = new Cliente(this.state.nome, this.state.nomeSocial, this.state.genero, cpf)

            const tel = new Telefone(this.state.dddTel, this.state.telefone);
            cliente.setTel = tel

            const dataRg = new Date(this.state.dataRg)
            const rg = new RG(this.state.valorRg, dataRg)

            cliente.setRgs = rg

            this.props.clientes.push(cliente)

            this.setState({
                nome: "",
                nomeSocial: "",
                genero: "",
                valorCpf: "",
                dataCpf: "",
                valorRg: "",
                dataRg: "",
                dddTel: "",
                telefone: "",
                erroCadastro: ""
            })
        }
    }

    erroValidacao = () => {
        let mensagemErro = [""]
        if (this.props.clientes.filter(c => c.nome === this.state.nome).length > 0) {
            mensagemErro.push("Já existe um cliente com esse nome")
        }
        if (this.props.clientes.filter(c => c.getCpf.getValor === this.state.valorCpf).length > 0) {
            mensagemErro.push("Já existe um cliente com esse CPF")
        }
        if (this.props.clientes.filter(c => c.getRgs[0].getValor === this.state.valorRg).length > 0) {
            mensagemErro.push("Já existe um cliente com esse RG")
        }
        if (isNaN(Number(this.state.valorCpf))) {
            mensagemErro.push("O campo número CPF aceita apenas números.")
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
        if (/\d/.test(this.state.nomeSocial)) {
            mensagemErro.push("O campo nome social aceita apenas letras")
        }

        return mensagemErro
    }

    render() {
        return (
            <div>
                <div className="mensagensDeErros ">
                    {this.erroValidacao().map(i => <p className="mensagemErroValidacao">{i}</p>)}
                    <p className="erroNoCadastro">{this.state.erroCadastro}</p>
                </div>
                <form className="cadastroDeCliente" onSubmit={this.criandoCli}>
                    <div className="perguntasDeCadastroCliente">

                        {/* informações de nome e genêro */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="nome">Nome Completo</label>
                                <input id="nome"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.nome}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nome: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="nomeSocial">Nome Social</label>
                                <input id="nomeSocial"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.nomeSocial}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nomeSocial: e.target.value })}
                                    className="campoDeInputTexto" />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="dropdownDeGenero">Sexo</label>
                                <select
                                    className="dropdownDeGenero"
                                    name="genero"
                                    id="dropdownDeGenero"
                                    onChange={(e) => this.setState({ genero: e.target.value })}
                                    required>
                                    <option value="0" style={{ display: 'none' }}></option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                        </div>

                        {/* informações de CPF */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="numCpf">Numero CPF</label>
                                <input id="numCpf"
                                    type="text"
                                    maxLength={11}
                                    minLength={11}
                                    value={this.state.valorCpf}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ valorCpf: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="dataCpf">Data CPF</label>
                                <input id="dataCpf"
                                    type="date"
                                    value={this.state.dataCpf}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ dataCpf: e.target.value })}
                                    className="campoDeInputData"
                                    required />
                            </div>
                        </div>

                        {/* informações de RG */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="numRg">Numero RG</label>
                                <input id="numRg"
                                    type="text"
                                    maxLength={9}
                                    minLength={9}
                                    value={this.state.valorRg}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ valorRg: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="dataRg">Data RG</label>
                                <input id="dataRg"
                                    type="date"
                                    value={this.state.dataRg}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ dataRg: e.target.value })}
                                    className="campoDeInputData"
                                    required />
                            </div>
                        </div>

                        {/* informações de telefone */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="ddd">DDD Telefone</label>
                                <input id="ddd"
                                    type="text"
                                    minLength={2}
                                    maxLength={3}
                                    value={this.state.dddTel}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ dddTel: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone"
                                    type="text"
                                    maxLength={9}
                                    minLength={8}
                                    value={this.state.telefone}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ telefone: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                        </div>

                        <div className="coluna">
                            <div className="colunaBotao">
                                <button className="botaoDeEnviarForm" name="enviar" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}