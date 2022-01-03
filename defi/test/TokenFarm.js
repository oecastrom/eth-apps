const FlowToken = artifacts.require('FlowToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('TokenFarm', (accounts) => {

    // Tests begin here

    // Test 1
    describe('DAI deployment', async () => {
        it('has a name', async () => {
            let daiToken = await DaiToken.new()
            const name = await daiToken.name()
            assert.equal(name, 'DAI Token')
        })
    })




})