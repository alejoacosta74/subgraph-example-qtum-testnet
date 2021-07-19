const GravatarRegistry = artifacts.require('./GravatarRegistry.sol')

module.exports = async function(deployer) {
  const registry = await GravatarRegistry.deployed()

  console.log('Account address:', registry.address)

  let accounts = await web3.eth.getAccounts()
  await registry.createGravatar('Rick', 'https://i.pinimg.com/474x/04/41/a0/0441a0d29c052a22dcb57b7e2902a9c3.jpg', {
    from: accounts[0],
  })
  await registry.createGravatar('Morty', 'https://i.pinimg.com/originals/bb/fb/c5/bbfbc53ad3225e33a49c2ad3c12424f9.png', {
    from: accounts[1],
  })
}
