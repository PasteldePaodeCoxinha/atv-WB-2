import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Empresa from "./modelo/empresa";
import "./style.css"
import ClienteMenu from "./clienteMenu";
import ProdutoMenu from "./produtoMenu";

type state = {
    tela: string
}

let empresa = new Empresa()

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
    }

    selecionarView = (novaTela: string, e: Event) => {
        e.preventDefault()
        this.setState({
            tela: novaTela
        })
    }

    render() {
        const barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} botoes={['Clientes', 'Produtos']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ClienteMenu clientes={empresa.getClientes} />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ProdutoMenu produtos={empresa.getProdutos} />
                </>
            )
        }
    }
}