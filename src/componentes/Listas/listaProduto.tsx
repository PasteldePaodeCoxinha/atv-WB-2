/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "../style.css"
import Produto from "../modelo/produto";

type props = {
    produtos: Array<Produto>
}

export default class ListaProduto extends Component<props> {

    render() {
        return (
            <div className="listaProduto">
                {this.props.produtos.map(p =>
                    <div className="produtoNaLista">
                        <p className="nomeProdutoNaLista">{p.nome}</p>
                        <p className="produtoPrecoNaLista">Preço: R${p.preco}</p>
                    </div>)}
            </div>
        )
    }
}