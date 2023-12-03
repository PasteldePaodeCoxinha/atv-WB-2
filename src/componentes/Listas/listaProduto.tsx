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
                    <ul className="produtoNaLista">
                        <li className="nomeProdutoNaLista">{p.nome}</li>
                        <li className="produtoPrecoNaLista">Preço: R${p.preco}</li>
                    </ul>)}
            </div>
        )
    }
}