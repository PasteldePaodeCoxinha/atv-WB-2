import React, { Component } from "react";
import "../style.css"
import Produto from "../modelo/produto";

type props = {
    produtos: Array<Produto>
}

type state = {
    nome: string,
    preco: number
}

export default class FormularioCadastroProduto extends Component<props, state> {
    constructor(props: props) {
        super(props)
        this.state = {
            nome: "",
            preco: 0
        }
    }

    criandoPro = (e: React.FormEvent<Element>) => {
        e.preventDefault()

        let produto = new Produto(this.state.nome, this.state.preco)
        this.props.produtos.push(produto)

        this.setState({
            nome: "",
            preco: 0
        })
    }

    render() {
        return (
            <form className="cadastroDeCliente" onSubmit={this.criandoPro}>
                <div className="perguntasDeCadastroCliente">

                    {/* informações de nome e genêro */}
                    <div className="colunaDoForm">
                        <div className="inputFormCadastro">
                            <label htmlFor="nomePro">Nome do Produto</label>
                            <input id="nomePro"
                                type="text"
                                value={this.state.nome}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ nome: e.target.value })}
                                className="campoDeInputTexto"
                                required />
                        </div>
                        <div className="inputFormCadastro">
                            <label htmlFor="precoPro">Preço</label>
                            <input id="precoPro"
                                type="number"
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
        )
    }
}