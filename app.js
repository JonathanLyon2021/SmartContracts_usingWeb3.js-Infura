const Web3 = require('web3');
const solc = require("solc");
const fs = require("fs");

const PROVIDER_URL = "https://goerli.infura.io/v3/08ca1c5dddd34508a9cba3a337ae801c";
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL));

const contractCode = fs.readFileSync("./ArrayOfFacts.sol").toString();

let standardCompilerInput = {
    language: "Solidity",
    sources: {
        contract: {
            content: contractCode
        }
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["abi", "evm.bytecode"]
            }
        }
    }
};

standardCompilerInput = JSON.stringify(standardCompilerInput);
