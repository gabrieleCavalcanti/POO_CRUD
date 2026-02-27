import { RowDataPacket } from "mysql2";
// RowDataPacket é o tipo base retornado pelo MySQL (mysql2).
// Ao estender ele, garantimos que a interface represente uma linha vinda do banco.

// interface não usa recurso, então devemos usar
export interface IProduto extends RowDataPacket {
    id?: number;
    nome?: string;
    valor?: number;
    dataCad?: Date;
    idCategoria?: number;
}

//? - dispensavel na criação do objeto
export class Produto {
    private _id?: number;
    private _nome: string = '';
    private _valor: number = 0;
    private _dataCad?: Date;
    private _idCategoria: number = 0;

    //Construtor
    constructor(nome: string, valor: number, idCategoria: number, id?: number) {
    this.Nome = nome;
    this._valor = valor;
    this._idCategoria = idCategoria;
    this._id = id;
}

    //GETTERS
    public get Id(): number | undefined {
        return this._id;
    }

    public get Nome(): string {
        return this._nome;
    }

    public get DataCad(): Date | undefined {
        return this._dataCad;
    }

    public get Valor(): number {
        return this._valor;
    }

    public get IdCategoria(): number {
        return this._idCategoria;
    }


    //SETTERS
    public set Nome(value: string) {
        this._validarNome(value);
        this._nome = value;
    }

    // DP => FACTORY
    public static criar(nome: string, valor: number, idCategoria: number): Produto {
        return new Produto(nome, valor, idCategoria);
    }

    public static editar(nome: string, valor: number, idCategoria: number, id: number) {
        return new Produto(nome, valor, idCategoria, id);
    }

    private _validarNome(value: string): void {
        if (!value || value.trim().length < 3) {
            throw new Error('Nome da Produto deve ter pelo menos 3 caracteres')
        }
        if (value.trim().length > 45) {
            throw new Error('Nome deve ter no maximo 45 caracteres')
        }
    }
}