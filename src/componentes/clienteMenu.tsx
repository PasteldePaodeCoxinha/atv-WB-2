import { Component} from "react";
import "./style.css"
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Cliente from "./modelo/cliente";

type props = {
    tema: string
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
        const barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Listar', 'Cadastrar']} />
        if (this.state.tela === 'Listar') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" clientes={this.props.clientes} />
                </>
            )
        } else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" clientes={this.props.clientes} />
                </>
            )
        }
    }

}