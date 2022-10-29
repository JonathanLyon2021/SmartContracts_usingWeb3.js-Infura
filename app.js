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

let compiledContract = solc.compile(standardCompilerInput);
compiledContract = JSON.parse(compiledContract);
compiledContract = compiledContract["contracts"]["contract"]["ArrayOfFacts"];

//console.log(compiledContract); // This will print the ABI and bytecode of the contract

const privateKey = "0x78054e822a3163f67c5ff9118496cd769eeea353a2c5afd0a60424153d107a31"; // There are no funds in this wallet hackers, I see you lookin... lmao
