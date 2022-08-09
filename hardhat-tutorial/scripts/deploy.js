const { ethers } = require("hardhat");

async function main() {
    /*
    A ContractFactory in ether.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instance our whilelist contract. 
    */
    const whitelistContract = await ethers.getContractFactory("Whitelist");
    
    // here deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish the deployment
    await deployedWhitelistContract.deployed();

    // print the address of the deployed contract
    console.log(
        "Whitelist Contract Address:",
        deployedWhitelistContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
