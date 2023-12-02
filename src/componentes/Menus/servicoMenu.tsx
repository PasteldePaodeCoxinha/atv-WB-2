import { Component } from "react";
import "../style.css"
import BarraNavegacao from "../barraNavegacao";
import Servico from "../modelo/servico";
import FormularioCadastroServico from "../Formulario/formularioCadastroServico";
import ListaServico from "../Listas/listaServico";

type props = {
    servicos: Array<Servico>
}

type state = {
    tela: string
}

export default class ServicoMenu extends Component<props, state>{
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
                    <ListaServico servicos={this.props.servicos} />
                </>
            )
        } else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico servicos={this.props.servicos} />
                </>
            )
        }
    }

}