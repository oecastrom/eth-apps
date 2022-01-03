const FlowToken = artifacts.require('FlowToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  
  // Deploy DAI Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // Deploy FLOW Token
  await deployer.deploy(FlowToken)
  const flowToken = await FlowToken.deployed()

  // Deploy Token Farm
  await deployer.deploy(TokenFarm, flowToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // Transfer all 1 million tokens to Token Farm
  await flowToken.transfer(tokenFarm.address, '1000000000000000000000000')

  // Transfer 100 DAI tokens to an investor
  await daiToken.transfer(accounts[1], '100000000000000000000')

};
