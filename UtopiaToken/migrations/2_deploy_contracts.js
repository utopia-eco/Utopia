var UtopiaToken = artifacts.require("UtopiaToken");
var UtopiaPresale = artifacts.require("UtopiaPresale");

module.exports = async function(deployer) {
    var otherAccount = '0x431893403d0bd9FEE90E5ed5a9ed1BC93Be640e7';
    await deployer.deploy(UtopiaToken, otherAccount, otherAccount, otherAccount, otherAccount, otherAccount);
    let token = await UtopiaToken.deployed()

    // Thats max 1 BNB per address
    // Rate: 1BNB -> 5B UTP
    await deployer.deploy(UtopiaPresale, 500*(10**6), token.address, BigInt(1000000000000000000), 1620958382)
    let presale = await UtopiaPresale.deployed();
    console.log(token.address)
    console.log(presale.address);
};