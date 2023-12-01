/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Cliente from "./modelo/cliente";
import "./style.css"

type props = {
    tema: string
    clientes: Array<Cliente>
}

export default class ListaCliente extends Component<props> {

    render() {
        return (
            <div className="listaClientes">
                {this.props.clientes.map(c =>
                    <div className="clienteNaLista">
                        <p className="nomeClienteNaLista">{c.nome}</p>
                        <p className="nomeSocialClienteNaLista">Nome Social: {c.nomeSocial}</p>
                        <p className="generoClienteNaLista">Genêro: {c.genero}</p>
                        <p className="valorCPFnaLista">CPF: {c.getCpf.getValor}</p>
                        <p className="valorRGNaLista">RG: {c.getRgs.map(r => r.getValor)}</p>
                        <p className="telefoneCompletoNaLista">Telefone: {c.getTelefones.map(t => t.geTelCompleto)}</p>
                    </div>)}
            </div>
        )
    }
}