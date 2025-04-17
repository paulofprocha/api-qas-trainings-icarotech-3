export class ListarProduto {

    listarProduto(dados, assert) {

        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }
        }).as('response')

        cy.get('@response').then((res) => {

            console.log(res.body)
            expect(res.status).to.eq(assert.status)
            
            var array_ = 20
            expect(res.body[array_]).to.have.property('id', assert.id)
            expect(res.body[array_]).to.have.property('name', assert.name)
            expect(res.body[array_]).to.have.property('brand', assert.brand)
            expect(res.body[array_]).to.have.property('price', assert.price)

        })
    }
}