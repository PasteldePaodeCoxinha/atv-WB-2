import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public set mudaNome(nome: string) {
        this.nome = nome
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public set setRgs(rg: RG) {
        this.rgs.push(rg)
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public set setTel(tel: Telefone) {
        this.telefones.push(tel)
    }
    public set delTel(tel: String) {
        this.telefones = this.telefones.filter(telefone => telefone.getNumero !== tel)
    }
    public ediTel(tel: String, NoTel: Telefone) {
        let telDes = this.telefones.find(e => e.getNumero == tel)
        if (telDes != undefined) {
            this.telefones[this.telefones.indexOf(telDes)] = NoTel
        }
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public set setProdutosConsumidos(pro: Produto) {
        this.produtosConsumidos.push(pro)
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public set setServicosConsumidos(ser: Servico) {
        this.servicosConsumidos.push(ser)
    }
}