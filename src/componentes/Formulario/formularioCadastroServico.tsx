import React, { Component } from "react";
import "../style.css"
import Servico from "../modelo/servico";

type props = {
    servicos: Array<Servico>
}

type state = {
    nome: string,
    preco: number | string,
    erroCadastro: string
}

export default class FormularioCadastroServico extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            preco: "",
            erroCadastro: ""
        }
    }

    criandoPro = (e: React.FormEvent<Element>) => {
        e.preventDefault()

        if (this.erroValidacao().length !== 1) {
            this.setState({
                erroCadastro: "Não é possível cadastro, existe campos inválidos."
            })
            return
        } else {
            let servico = new Servico(this.state.nome, Number(this.state.preco))
            this.props.servicos.push(servico)

            this.setState({
                nome: "",
                preco: ""
            })
        }
    }

    erroValidacao = () => {
        let mensagemErro = [""]
        if (this.props.servicos.filter(s => s.nome === this.state.nome).length > 0) {
            mensagemErro.push("Já existe um serviço com esse nome")
        }
        if (/\d/.test(this.state.nome)) {
            mensagemErro.push("O campo nome aceita apenas letras")
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
                <form className="cadastroDeCliente" onSubmit={this.criandoPro}>
                    <div className="perguntasDeCadastroCliente">

                        {/* informações de nome e preço */}
                        <div className="colunaDoForm">
                            <div className="inputFormCadastro">
                                <label htmlFor="nomePro">Nome do Serviço</label>
                                <input id="nomePro"
                                    type="text"
                                    maxLength={30}
                                    value={this.state.nome}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nome: e.target.value })}
                                    className="campoDeInputTexto"
                                    required />
                            </div>
                            <div className="inputFormCadastro">
                                <label htmlFor="precoPro">Preço</label>
                                <input id="precoPro"
                                    type="number"
                                    value={this.state.preco}
                                    step=".01"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ preco: Number(e.target.value) })}
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