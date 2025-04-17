export class CriarProduto {

    criarProduto(dados, assert) {

        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }, body: {
                name: dados.name,
                brand: dados.brand,
                price: dados.price
            },

        }).as('response')

        cy.get('@response').then((res) => {

            if (res.status == 201) {
                console.log(res.body)
            expect(res.status).to.eq(assert.status)
            expect(res.body).to.have.property('name', assert.name)
            expect(res.body).to.have.property('brand', assert.brand)
            expect(res.body).to.have.property('price', assert.price)
            }

            if (res.status == 400) {
                console.log(res.body)
            expect(res.status).to.eq(assert.status)
            expect(res.body).to.have.property('message', assert.message)
            }
        })
    }
}