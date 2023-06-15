/// <reference types="cypress" />

describe('Test of API using cypress',()=>{

    it('GET - check status 200',()=>{
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.headers).to.have.property('date')
            expect(response.headers).to.have.property('content-type')
        })
    })
    it('GET - check status 404 not found',()=>{
        cy.request({ url: 'https://reqres.in/api/users/23', failOnStatusCode: false })
        .then((response) => {
            // Verify status code
            if (response.status === 404) {
              cy.log('La API retornó un status code 404')
            } else {
              // actions for other status code
            }
          })      
    })
    it('POST - check status 201 - Create a record',()=>{
        cy.request('POST', 'https://reqres.in/api/users', {
            name: 'Kmbulo',
            job: 'tester'
        }).then((response) => {
            expect(response.status).to.equal(201)               // actions with response
            console.log("Status Code:", response.status);
        })
    })
    it('Check if response has JSON body', ()=>{
        cy.request('GET', 'https://reqres.in/api/user')
        .then((response)=>{
            expect(response.headers['content-type']).contain('application/json')
        })
    })
    it('Time of response less than 300ms', ()=>{
        cy.request('GET', 'https://reqres.in/api/user')
        .then((response)=>{
            expect(response.duration).to.be.lessThan(300)
        })
    })
    
})