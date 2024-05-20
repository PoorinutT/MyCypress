

describe('smootie',()=>{

    it('no header', ()=>{

        cy.request({
            method: 'POST',
            url: '/fantastic-smoothie/order',
            failOnStatusCode: false,
            body: {
                "size": "m",
                "fruits": ["watermelon"],
                "milk": null
            }
        }).then(response => {
            expect(response.status).to.eq(402)
        })
    })


    it('cup s with no fruit', ()=>{
        cy.request({
            method: 'POST',
            url: '/fantastic-smoothie/order',
            headers: {
                "entry-pass": "100-dollar-bill" 
            },
            failOnStatusCode: false,
            body: {
                "size": "s",
                "fruits": [],
                "milk": null
            }
        }).then(response => {
            expect(response.status).to.eq(400)
            expect(response.body.result.code).to.eq("incomplete_menu")
        })
    })

    it('cup m with no fruit', ()=>{
        cy.request({
            method: 'POST',
            url: '/fantastic-smoothie/order',
            headers: {
                "entry-pass": "100-dollar-bill" 
            },
            failOnStatusCode: false,
            body: {
                "size": "m",
                "fruits": ["watermelon","banana"],
                "milk": "skim"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.result.code).to.eq("success")
            expect(response.body.result.fullMenuName).to.eq("tropical sunshine shake")
        })
    })
})