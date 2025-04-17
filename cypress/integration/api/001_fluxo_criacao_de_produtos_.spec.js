
// importa as classes e instancia das classes
import { EndpointsApi } from "../../support/helpers/endpoints-envs";
const endpoint = new EndpointsApi

import { CriarProduto } from "../../support/steps/api/001_criar_novo_produto_POST_";
const criar = new CriarProduto

import { ListarProduto } from "../../support/steps/api/002_listar_todos_produtos_GET_";
const listar = new ListarProduto


// Bloco de testes 
describe('Validar criação de produto e listagem', () => {

    // primeiro caso de teste 
    it('001 - Criar novo produto', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointProduto(),
            name: 'FFDM',
            brand: 'Icaro Tech',
            price: 500
        }

        // criar um objeto de "Assert"
        var assert = {
            status: 201,
            name: 'FFDM',
            brand: 'Icaro Tech',
            price: 500
        }

        // chama a função para criar nosso produto
        criar.criarProduto(dados, assert)
    })


    it('002 - Criar novo produto sem inserir o nome', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointProduto(),
            name: '',
            brand: 'Icaro Tech',
            price: 400
        }

        // criar um objeto de "Assert"
        var assert = {
            status: 400,
            message: 'Name, brand, and price are required.'
        }

        // chama a função para criar nosso produto
        criar.criarProduto(dados, assert)
    })


    it('003 - Listar produto criado', () => {

        // criar um objeto de "Dados" 
        var dados = {
            endpoint: endpoint.endpointProduto(),
        }

        // criar um objeto de "Assert"
        var assert = {
            status: 200,
            id: 21,
            name: 'FFDM',
            brand: 'Icaro Tech',
            price: 500
        }

        // chama a função para listar produto
        listar.listarProduto(dados, assert)
    })

})