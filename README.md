# SmartContracts_usingWeb3.js-Infura
This is Exercise 15 in MI4 of Kingsland Universities Blockchain Developer Program

# Overview
Web3.js is a collection of libraries which allow you to interact with a local or remote Ethereum node using an HTTP
or IPC connection. In this exercise, we will use web3.js to deploy a contract on the Ethereum Ropsten testnet and
play with it. We will first compile a contract, deploy it and finally call some of the contract’s functions. In order for
web3 to connect to the Ropsten testnet, we will use Infura.io API as our provider.

# Goals
• Using Web3.js, interface with Ethereum’s Ropsten Network via Infura.io.
• Using Web3.js, call smart contract methods.

# Prerequisites
• NodeJS v16.15.0
• NPM v7.19.1
• Solc v0.8.13
• Web3 v3.0.0-rc.5

# Problem 1. Dependency Installation

To start with, create a new project on your preferred directory.
In the directory, open a terminal and initialize a NodeJS project:
  
    npm init –y

After that, install solc-js:

    npm install solc@0.8.13

Last but not least, web3.js:

    npm install web3@3.0.0-rc.5

## Problem 1. Dependency Installation
To start with, create a new project on your preferred directory.
In the directory, open a terminal and initialize a NodeJS project:

    npm init –y
    
After that, install solc-js:

    npm install solc@0.8.13
    
Last but not least, web3.js:

    npm install web3@3.0.0-rc.5

## Problem 3. Compiling the Smart Contract
The Smart Contract object is a meta-class. What this means is that functions in it are not defined until it is
instantiated with an application binary interface (ABI) which is usually generated by a compiler, such as the Solidity
compiler solc is used to generate JavaScript bindings for the Solidity compiler.
Now, implement an ArrayOfFacts smart contract which stores a string array of facts in the blockchain. Only the
owner of the contract can add facts, but anyone can count how many facts there are and get a fact by index.

Now that the smart contract has been implemented, go back to app.js. Read the contract and store it in a variable.

Compile the contract.
Implement the **standardCompilerInput** which contains compilation instructions for the colc compiler. 
Then, compile the contract via solc.compile)_ and access the object that we are interested in.

Open a terminal on your project folder and run the following command, then examine the output.

    node app.js
