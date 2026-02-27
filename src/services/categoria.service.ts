import { CategoriaRepository } from "../repository/categoria.repository";
import { Categoria } from "../models/categoria.model";

export class CategoriaService {
    constructor(private _repository = new CategoriaRepository()) { }

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

    async criar(nome: string) {
        const categoria = Categoria.criar(nome);
        return await this._repository.create(categoria);
    }

    async editar(id: number, nome: string, ativo: boolean) {
        const categoria = Categoria.editar(nome, ativo, id);
        return await this._repository.update(id, categoria)
    }

    async deletar(id: number) {
        return await this._repository.delete(id);
    }
}