import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";

const produtoController = new ProdutoController();
const produtoRoutes =Router();

produtoRoutes.get('/produtos', produtoController.selecionaTodos);
produtoRoutes.get('/produtos/alfabetica', produtoController.selecionaOrdemASC);
produtoRoutes.post('/produtos', produtoController.criar);
produtoRoutes.patch('/produtos', produtoController.editar);
produtoRoutes.delete('/produtos', produtoController.deletar);


export default produtoRoutes;