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
                    <div className="ServicoNaLista">
                        <p className="nomeServicoNaLista">{s.nome}</p>
                        <p className="servicoPrecoNaLista">Preço: R${s.preco}</p>
                    </div>)}
            </div>
        )
    }
}