/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "../style.css"
import Servico from "../modelo/servico";

type props = {
    servicos: Array<Servico>
}

export default class ListaServico extends Component<props> {

    render() {
        return (
            <div className="listaServico">
                {this.props.servicos.map(s =>
                    <ul className="ServicoNaLista">
                        <li className="nomeServicoNaLista">{s.nome}</li>
                        <li className="servicoPrecoNaLista">Preço: R${s.preco}</li>
                    </ul>)}
            </div>
        )
    }
}