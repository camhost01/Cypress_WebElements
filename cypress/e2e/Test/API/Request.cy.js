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
    it('Validate specific values in response', ()=>{
        cy.request('GET','https://reqres.in/api/users')
        .then((response)=>{
            expect(response.body.data[0].email).to.include('george')     //value george in "email" field
        })
    })
    it('PUT - update values', ()=>{
        cy.request('PUT', 'https://reqres.in/api/users/2', {
            name: 'change',
            job: 'values'
        }).then((response)=>{
                expect(response.body.name).to.include('nge')     
            })
    })
    it('DEL - Delete data', ()=>{
        cy.request('DELETE','https://reqres.in/api/users/2')
        .then((response)=>{
            expect(response.status).to.equal(204)
        })
    })
    it('Autentication - Success', ()=>{
        cy.request('POST','https://reqres.in/api/register',{
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(4)
            expect(response.body.token).to.equal('QpwL5tke4Pnpja7X4')
        })
    })
    it('Autentication - Fail', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,
            body: {
              email: 'eve.holt@reqres.in'
            }
          }).then((response)=>{
            expect(response.body.error).to.contain('Missing')
        })
    })
    
})