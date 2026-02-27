import { ProdutoRepository } from "../repository/produto.repository";
import { Produto } from "../models/produto.model";

export class ProdutoService {
    constructor(private _repository = new ProdutoRepository()) { }

    async selecionaTodos() {
        return await this._repository.findAll();
    }

    async selecionaOrdemASC(){
        return await this._repository.findOrderASC();
    }

    async selecionaId(id: number) {
        return await this._repository.findId(id);
    }

    async selecionaNome(nome: string) {
        return await this._repository.findNome(nome);
    }

    async selecionaCategoriaAtiva(id: number) {
        return await this._repository.findCategoriaAtiva(id);
    }

    async criar(nome: string, valor: number, idCategoria: number) {
        const produto = Produto.criar(nome, valor, idCategoria);
        return await this._repository.create(produto);
    }

    async editar(id: number, nome: string, valor: number, idCategoria: number) {
        const produto = Produto.editar(nome, valor, idCategoria, id);
        return await this._repository.update(id, produto)
    }

    async deletar(id: number) {
        return await this._repository.delete(id);
    }
}