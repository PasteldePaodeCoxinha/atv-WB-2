import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Empresa from "./modelo/empresa";
import "./style.css"
import ClienteMenu from "./Menus/clienteMenu";
import ProdutoMenu from "./Menus/produtoMenu";
import ServicoMenu from "./Menus/servicoMenu";

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
        const barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} botoes={['Clientes', 'Produtos', 'Serviço']} />
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
        } else if (this.state.tela === 'Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <ServicoMenu servicos={empresa.getServicos} />
                </>
            )
        }
    }
}