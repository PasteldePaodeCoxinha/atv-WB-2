import { Component } from "react";
import "../style.css"
import BarraNavegacao from "../barraNavegacao";
import Produto from "../modelo/produto";
import FormularioCadastroProduto from "../Formulario/formularioCadastroProduto";
import ListaProduto from "../Listas/listaProduto";

type props = {
    produtos: Array<Produto>
}

type state = {
    tela: string
}

export default class ProdutoMenu extends Component<props, state>{
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
                    <ListaProduto produtos={this.props.produtos} />
                </>
            )
        } else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto produtos={this.props.produtos} />
                </>
            )
        }
    }

}