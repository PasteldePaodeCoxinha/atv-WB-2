import React, { Component } from "react";
import "../style.css"
import Servico from "../modelo/servico";

type props = {
    servicos: Array<Servico>
}

type state = {
    nome: string,
    novoNome: string,
    preco: number | string,
    servico: Servico,
    erroCadastro: string
}



export default class AtualizaServico extends Component<props, state> {
    private serEsco = false
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            novoNome: "",
            preco: "",
            servico: new Servico(),
            erroCadastro: ""
        }
    }

    pegarUmServico = (e: React.FormEvent<Element>) => {
        this.setState({
            servico: this.props.servicos.filter(s => (s.nome === this.state.nome))[0]
        })
        this.serEsco = true
        e.preventDefault()
    }

    atualizaServico = (e: React.FormEvent<Element>) => {
        this.state.servico.nome = (this.state.novoNome === "") ? this.state.servico.nome : this.state.novoNome
        this.state.servico.preco = (this.state.preco === "") ? Number(this.state.servico.preco) : Number(this.state.preco)

        this.setState({
            nome: "",
            novoNome: "",
            preco: "",
            erroCadastro: ""
        })
        this.serEsco = false

        e.preventDefault()
    }

    erroValidacao = () => {
        let mensagemErro = [""]
        if (/\d/.test(this.state.nome)) {
            mensagemErro.push("O campo nome aceita apenas letras")
        }
        if (/\d/.test(this.state.novoNome)) {
            mensagemErro.push("O campo novo novo nome aceita apenas letras")
        }

        return mensagemErro
    }

    render() {
        if (this.serEsco == false) {
            return (
                <div>
                    <form className="formAtualiza" onSubmit={this.pegarUmServico} >
                        <div className="inputFormAtualiza">
                            <label htmlFor="nome">Nome do serviço</label>
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
                    <form className="formAtualiza" onSubmit={this.atualizaServico} >
                        {/* informações do novo nome e preço */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="nomePro">Novo nome</label>
                                <input id="nomePro"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.novoNome}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ novoNome: e.target.value })}
                                    className="campoDeInputTexto" />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="precoPro">Novo preço</label>
                                <input id="precoPro"
                                    type="number"
                                    value={this.state.preco}
                                    step=".01"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ preco: Number(e.target.value) })}
                                    className="campoDeInputTexto" />
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