import { Component } from "react";
import "../style.css"
import BarraNavegacao from "../barraNavegacao";
import ListaCliente from "../Listas/listaCliente";
import FormularioCadastroCliente from "../Formulario/formularioCadastroCliente";
import Cliente from "../modelo/cliente";

type props = {
    clientes: Array<Cliente>
}

type state = {
    tela: string
}

export default class ClienteMenu extends Component<props, state>{
    constructor(props: props) {
        super(props)
        this.state = {
            tela: "Cadastrar"
        }
    }

    selecionarView = (novaTela: string, e: Event) => {
        e.preventDefault()
        this.setState({
            tela: novaTela
        })
    }

    render() {
        const barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} botoes={['Listar', 'Cadastrar']} />
        if (this.state.tela === 'Listar') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente clientes={this.props.clientes} />
                </>
            )
        } else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente clientes={this.props.clientes} />
                </>
            )
        }
    }

}