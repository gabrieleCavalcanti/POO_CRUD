import { Request, Response } from "express";
import { ProdutoService } from "../services/produto.service";
import { error } from "node:console";

export class ProdutoController {
    constructor(private _service = new ProdutoService()) { }

    selecionaTodos = async (req: Request, res: Response) => {
        try {
            const id = req.query.id;
            const nome = req.query.nome;
            let paramDup = null;

            if (id && nome) {
                paramDup = 'Na Inserção de ID e Nome, a consulta é realizada pelo ID';
            }
            if (id) {
                const idProd = Number(id);
                const produtoId = await this._service.selecionaId(idProd);
                if (produtoId.length === 0) {
                    return res.status(200).json({ message: 'Produto não localizado' });
                }
                return res.status(200).json({ produtoId, paramDuplicado: paramDup });
            }
            if (nome) {
                const nomeProd = String(nome);
                const produtoNome = await this._service.selecionaNome(nomeProd);
                if (produtoNome.length === 0) {
                    return res.status(200).json({ message: 'Produto não localizado' });
                }
                return res.status(200).json({ produtoNome });
            }

            const produtos = await this._service.selecionaTodos();
            res.status(200).json({ produtos });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    selecionaOrdemASC = async (req: Request, res: Response) => {
        try {
            const produtos = await this._service.selecionaOrdemASC();
            res.status(200).json({ produtos });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    criar = async (req: Request, res: Response) => {
        try {
            const { nome, valor, idCategoria } = req.body;

            if (!nome || !isNaN(nome) || !valor || isNaN(valor) || !idCategoria || isNaN(idCategoria)) {
                return res.status(200).json({ message: 'Valor invalido!' })
            }

            const existeCategoria = await this._service.selecionaCategoriaAtiva(idCategoria);
            if (existeCategoria.length === 0) {
                return res.status(200).json({ message: `Não é existe essa categoria` });
            }
            if (!existeCategoria[0].ativo) {
                return res.status(200).json({ message: `Categoria não esta ativa` });
            }

            const novo = await this._service.criar(nome, valor, idCategoria);
            res.status(201).json({ novo }); // criar é status 201

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    editar = async (req: Request, res: Response) => {
        try {
            const { nome, valor, idCategoria } = req.body;

            if (!nome || !isNaN(nome) || !valor || isNaN(valor) || !idCategoria || isNaN(idCategoria)) {
                return res.status(200).json({ message: 'Valor invalido!' })
            }

            const id = Number(req.query.id)
            const alterado = await this._service.editar(id, nome, valor, idCategoria);
            res.status(200).json({ alterado });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    deletar = async (req: Request, res: Response) => {
        try {
            const id = Number(req.query.id)
            const deletado = await this._service.deletar(id);
            if (deletado.affectedRows === 0) {
                res.status(200).json({ message: `Registro ID: ${id} não existe` });
            }
            res.status(200).json({ message: 'Excluido com sucesso!', deletado });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
}