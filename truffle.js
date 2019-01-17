require("babel-register");
const HDWalletProvider = require("truffle-hdwallet-provider");

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    compilers: {
      solc: {
        version: "0.4.23" // ex:  "0.4.20". (Default: Truffle's installed solc)
      }
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          "high floor write inside usage obey aisle uniform rigid afford ancient assume",
          "https://rinkeby.infura.io/v3/f01eba9c36a1494499f4d168cf796db0"
        );
      },
      from: "0xeFa4763C4d8Fc88Ff01336f28E7536fA94bF7d61",
      network_id: "4",
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
  mocha: {
    enableTimeouts: false
  }
};
