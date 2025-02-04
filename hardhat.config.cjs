/** @type import('hardhat/config').HardhatUserConfig */

/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.9",
  networks: {
    linea: {
      url: process.env.LINEA_RPC_URL,  // Linea RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`]  
    },
  },
};
