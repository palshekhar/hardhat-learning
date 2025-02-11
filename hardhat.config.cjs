/** @type import('hardhat/config').HardhatUserConfig */

/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const api="a9603ca396934fc0bea8b7525cc80653";
const privatekey="99080b0bbb7a6bf1276ccfd9a72d1840d90c3deba6448b6a19b670c7834817cf";
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${api}`,
      accounts: [`${privatekey}`],
      }
  }

};
