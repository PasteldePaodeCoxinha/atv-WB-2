import React, { Component } from "react";
import "../style.css"
import Produto from "../modelo/produto";

type props = {
    produtos: Array<Produto>
}

type state = {
    nome: string,
    novoNome: string,
    preco: number | string,
    produto: Produto,
    erroCadastro: string
}



export default class AtualizaProduto extends Component<props, state> {
    private proEsco = false
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            novoNome: "",
            preco: "",
            produto: new Produto(),
            erroCadastro: ""
        }
    }

    pegarUmProduto = (e: React.FormEvent<Element>) => {
        this.setState({
            produto: this.props.produtos.filter(p => (p.nome === this.state.nome))[0]
        })

        this.proEsco = true
        e.preventDefault()
    }


    atualizaProduto = (e: React.FormEvent<Element>) => {
        this.state.produto.nome = (this.state.novoNome === "") ? this.state.produto.nome : this.state.novoNome
        this.state.produto.preco = (this.state.preco === "") ? Number(this.state.produto.preco) : Number(this.state.preco)

        this.setState({
            nome: "",
            novoNome: "",
            preco: "",
            erroCadastro: ""
        })
        this.proEsco = false

        e.preventDefault()
    }

    erroValidacao = () => {
        let mensagemErro = [""]
        if (/\d/.test(this.state.nome)) {
            mensagemErro.push("O campo nome aceita apenas letras")
        }
        if (/\d/.test(this.state.novoNome)) {
            mensagemErro.push("O campo novo nome aceita apenas letras")
        }

        return mensagemErro
    }

    render() {
        if (this.proEsco == false) {
            return (
                <div>
                    <div className="mensagensDeErros ">
                        {this.erroValidacao().map(i => <p className="mensagemErroValidacao">{i}</p>)}
                        <p className="erroNoCadastro">{this.state.erroCadastro}</p>
                    </div>
                    <form className="formAtualiza" onSubmit={this.pegarUmProduto} >
                        <div className="inputFormAtualiza">
                            <label htmlFor="nome">Nome do produto</label>
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
                    <form className="formAtualiza" onSubmit={this.atualizaProduto} >
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