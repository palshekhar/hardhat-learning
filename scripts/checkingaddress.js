const { ethers } = require("hardhat");

async function main() {
  const [owner, addr1, addr2] = await ethers.getSigners();

  console.log("Owner Address:", owner.address);
  console.log("Account 1:", addr1.address);
  console.log("Account 2:", addr2.address);
}

main()
  
