/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Cliente from "../modelo/cliente";
import "../style.css"

type props = {
    clientes: Array<Cliente>
}

export default class ListaCliente extends Component<props> {

    render() {
        return (
            <div className="listaClientes">
                {this.props.clientes.map(c =>
                    <ul className="clienteNaLista">
                        <li className="nomeClienteNaLista">{(c.nomeSocial === "")? c.nome : c.nomeSocial}</li>
                        <li className="generoClienteNaLista">Genêro: {c.genero}</li>
                        <li className="valorCPFnaLista">CPF: {c.getCpf.getValor}</li>
                        <li className="valorRGNaLista">RG: {c.getRgs.map(r => r.getValor)} </li>
                        <li className="telefoneCompletoNaLista">Telefone: {c.getTelefones.map(t => t.geTelCompleto)} </li>
                    </ul>)}
            </div>
        )
    }
}