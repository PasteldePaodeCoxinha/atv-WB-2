/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./style.css"

type props = {
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {

    gerarListaBotoes = () => {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor} className="estilizacaoDotextoDaPagina">
                    <button className="estilaizacaoDoLinkDaPagina"
                        onClick={(e) => this.props.seletorView(valor, e)}>{valor}
                    </button>
                </li>
            )
            return lista
        }
    }

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="opcoesDeNavbar">
                        <a className="logoDaWB">WB</a>
                        <ul className="listaDePaginas">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}