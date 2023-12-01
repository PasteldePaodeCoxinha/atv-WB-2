export default class Servico {
    public nome: string
    public preco: number
    private comprado: Array<number>
    constructor(nome: string, preco: number) {
        this.nome = nome,
            this.preco = preco,
            this.comprado = [0, 0, 0]
    }

    public get getComprado(): Array<number> {
        return this.comprado
    }

    public compradoMaisUm(x: number) {
        this.comprado[x] = this.comprado[x] + 1;
        this.comprado[2] = this.comprado[2] + 1
    }
}